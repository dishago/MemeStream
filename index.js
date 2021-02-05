const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');

const mongoose = require('mongoose');
const Meme = require('./models/meme');

mongoose.connect('mongodb://localhost:27017/Xmeme', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=>{
        console.log('Mongoose connection on');
    })
    .catch(err => {
        console.log('Mongoose connection error');
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/memes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const meme = await Meme.findById(id)
        res.render('layouts/show', { meme })
    } catch(err) {
        console.log(err)
    }
})

app.post('/memes', async (req, res) => {
    try {
        const newMeme = new Meme(req.body)
        console.log(req.body)
        await newMeme.save()
        res.json({"id": newMeme._id, "name": newMeme.name, "caption": newMeme.caption, "url": newMeme.url})
    } catch(err) {
        console.log(err)
    }
})

// app.delete('/memes/:id/delete', async (req, res) => {
//     const { id } = req.params
//     const deletedProduct = await Meme.findByIdAndDelete(id)
//     res.redirect('/memes')
// })

app.get('/memes/:id/edit', async (req, res) => {
    const { id } = req.params
    const meme = await Meme.findById(id)
    res.render('layouts/edit', { meme })
})

app.patch('/memes/:id', async (req, res) => {
    const { id } = req.params
    const meme = await Meme.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/memes/${meme._id}`)
})

app.get('/memes', async (req, res) => {
    try {
        const lastMemes = await Meme.find().sort({$natural:-1}).limit(100);
        //console.log(lastMemes)
        res.render('layouts/memes', { lastMemes })
    } catch(err) {
        console.log(err)
    }
})

app.get('/', (req, res) => {
    res.render('layouts/landing');
})

app.use('*',function(req, res){
    res.send('Error 404: Not Found!');
});

app.listen(8081, () => {
    console.log('Listening Xmeme on port 3000');
})