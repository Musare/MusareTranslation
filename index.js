const express = require('express');
const app = express();

app.use(express.static('locales'));

app.listen(3000);