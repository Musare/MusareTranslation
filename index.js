const express = require('express');
const app = express();
const config = require("config");

app.use(express.static('locales'));

app.listen(config.get('port'));