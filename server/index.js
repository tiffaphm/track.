const express = require('express');
const router = require('./routes.js');

const app = express();
module.exports.app = app;

const PORT = process.env.PORT || 4000;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is up and listening on ${PORT}!`);
});
