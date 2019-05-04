const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
require('./helpers/conn.js')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

var routes = require('./route');
routes(app);

app.listen(8787, () => {
    console.log("Server is listening on port 8787");
});


