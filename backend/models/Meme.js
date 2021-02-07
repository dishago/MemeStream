const mongoose = require('mongoose')

const memeSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    caption: {
        type: String
    }
})

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme