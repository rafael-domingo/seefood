const express = require('express');
const app = express();
const visionAPI = require('./vision');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/', visionAPI);

app.listen(PORT, () => console.log('Server started'));
