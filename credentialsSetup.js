var fs=require('fs');
fs.writeFile(process.env.GCP_KEY_FILE, process.env.GCP_CRED, (err) => {});
fs.writeFile(process.env.CLOUDINARY_KEY_FILE, process.env.CLOUDINARY_URL, (err) => {});