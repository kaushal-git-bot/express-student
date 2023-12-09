const express = require ("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

const apiHandler = require('./api')

app.use(bodyParser.json())

app.use('/', apiHandler)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




