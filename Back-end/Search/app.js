const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require("firebase/app");
const config = require('./config/devKey');
const _ = require('./ioc');

var app = express();

const searchRoute = require('./routes/search');
const clickRoute = require('./routes/click');

firebase.initializeApp(config.firebaseConfig);
require("firebase/auth");
require("firebase/firestore");
require('firebase/database');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    req.container = global.container;
    next();
});

app.use(searchRoute);
app.use(clickRoute);

const port = process.env.PORT || 8888;
app.listen(port, () => console.log("Server is up and running on port: ", port));