const express = require('express');
const fs = require('fs');
const app = express();
const config = require("config");

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const localesDir = __dirname + "/locales/";
app.get("/*", (req, res) => {
	let path = req.path;
	if (path.indexOf('..') !== -1) return res.end();
	res.set('Cache-Control', 'max-age=8640000000');

	fs.access(localesDir + path, function (err) {
		if (!err) {
			res.sendFile(localesDir + path);
		} else {
			res.end();
		}
	});
});

app.listen(config.get('port'));