const { json } = require('express');
var cors = require('cors')
const express = require('express');

const app = express();

require('./db/conne');
app.use(cors())
app.use(json());

app.listen(5000, () => {
    console.log('I am Server');
});

app.use('/api', require('./api/crudapi'));
