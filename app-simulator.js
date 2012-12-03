//nodejs module declaration
var express = require("express");
var app = express();

//init express
app.use(express.static(__dirname));

app.listen(process.env.VCAP_APP_PORT || 3103);
console.log('-- Server running at http://127.0.0.1:3103/ --');
