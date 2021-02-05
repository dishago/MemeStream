const mongoose = require('mongoose')

const Meme = require('../models/meme')

mongoose.connect('mongodb://localhost:27017/Xmeme', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=>{
        console.log('Mongoose connection on');
    })
    .catch(err => {
        console.log('Mongoose connection error');
    })

const seedMemes = [
    {
        name: "MS Dhoni",
        url: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",
        caption: "Meme for my place"
    },

    {
        name: "Viral Kohli",
        url: "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",
        caption: "Another home meme"
    }
]

Meme.insertMany(seedMemes)
.then(res => {console.log(res)})
.catch(err => {console.log(err)})