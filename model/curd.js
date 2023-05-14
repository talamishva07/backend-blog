const mongoose = require('mongoose');


const crudSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    Filepath: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('cruds', crudSchema);

