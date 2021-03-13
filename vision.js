async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
    const credentials = require('./seefood.json');
    // Creates a client
    const client = new vision.ImageAnnotatorClient({credentials});
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./sausage.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }

  quickstart();

const express = require('express');
const router = express.Router();


router.post('/api', (req, res) => {
    quickstart();
    console.log(`client: ${req.body.result}`);
    res.send(req.body);

})

module.exports = router;