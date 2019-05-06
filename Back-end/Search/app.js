const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use( (req, res, next) => {
    req.container = global.container;
    next();
});

const port = process.env.PORT || 6000;
app.listen(port, () => console.log("Server is up and running on port: ", port));