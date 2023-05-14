// const { json } = require('express');
const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./db/conne');
// app.use(json());

app.listen(5000, () => {
    console.log('I am Server');
});
app.use('/public/', express.static('public'));
app.use('/api', require('./api/crudapi'));

app.use('/',(req,res)=>{
    return res.send("backend blog")
})