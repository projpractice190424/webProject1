const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require("firebase/app");
const config = require('./config/devKey');

require("firebase/auth");
require("firebase/firestore");
require('firebase/database');

firebase.initializeApp(config.firebaseConfig);

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use( (req, res, next) => {
    req.container = global.container;
    next();
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log("Server is up and running on port: ", port));