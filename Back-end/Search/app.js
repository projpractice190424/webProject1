const express = require('express');

var app = express();

const port = process.env.PORT || 6000;
app.listen(port, () => console.log("Server is up and running on port: ", port));