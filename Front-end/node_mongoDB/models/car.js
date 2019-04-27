const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carShema = new Schema({
    make: String,
    model: String,
    year: Number,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Car = mongoose.model('car', carShema);
module.exports = Car