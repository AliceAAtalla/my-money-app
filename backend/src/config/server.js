const PORT = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('./cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}.`));

module.exports = app;
