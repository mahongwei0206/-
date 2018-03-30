const express = require('express');
const bodyparser = require('body-parser');
const static =require('express-static')
const app = express();

app.listen(1234);
const limit = require('./routes/limit.js');
app.use(bodyparser.urlencoded({}));
app.use('/limit',limit);
app.use(express.static('./public'));