/**
 * Define a model for a MongoDB collection. It creates a collection called 'Memes' which stores id, name, url and caption of each record.
 */

const mongoose = require('mongoose')

const memeSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    url: {
        type: String,
        required: 'URL can not be empty'
    },
    caption: {
        type: String
    }
})

memeSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme