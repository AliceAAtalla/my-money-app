const PORT = 3003;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}.`));