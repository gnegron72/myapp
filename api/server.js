'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing.js');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Connect to DB
mongoose.connect("mongodb://db/things");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// App
const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));

var api = require("./routes/api.js");
app.use(bodyParser.json());
app.use("/api", api);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
