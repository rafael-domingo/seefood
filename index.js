const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const PORT = process.env.PORT || 5000;

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))


app.use(cors());
app.use(fileUpload());

// Google Cloud Vision API Function
async function CloudVision(image) {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
    const credentials = require('./seefood.json');
    // Creates a client
    const client = new vision.ImageAnnotatorClient({credentials});
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection(image);
    const labels = result.labelAnnotations;
    // labels.forEach(label => console.log(label.description));
    return labels;
  }

// Upload Endpoint
app.post('/upload', (req, res) => {

    // Check if file was uploaded
    if(req.files === null) {
        return res.status(400).json({ msg: 'No file was uploaded'})
    }

    const file = req.files.file;

    // Upload to Cloudinary
    // const cloudinaryCredentials = require('./cloudinary.json');
    // cloudinary.config({
    //     cloudinaryCredentials
    // })
    // cloudinary.uploader.upload(file,
    // function(err, result) { 
    //     console.log(result);
    //     console.log(err)
    //     })

    // Call Google Cloud Vision API 
    const labels = CloudVision(file.data).then(response => {
        const path = `${Date.now()}${file.name}`;
        console.log(file);
        // Move file to directory named below
        file.mv(`${__dirname}/client/public/uploads/${path}`, err => {
            if(err) {
                console.log(err);
                return res.status(500).send();
            }
            // Response back to client
            res.json({ fileName: file.name, filePath: `/uploads/${path}`, labels: response})
        });
    });
    


   

});

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })

  
app.listen(PORT, () => console.log(`Server started on: ${PORT}`));
