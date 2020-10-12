const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = item = mongoose.model('item', itemSchema)