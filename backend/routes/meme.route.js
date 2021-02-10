/**
 * Specifies API routes for the backend server using Express.
 * POST /memes => To create a new meme (either using query parameters or request body content) in database
 * GET /memes => To read all memes stored in database
 * PATCH /memes/:id => To update a single meme (of the given id) with the new values provided by the request body
 * DELETE /memes/:id => To delete a single meme from all records with the given id
 * GET /memes/:id => To get a single meme from all records with the given id
 */

let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Meme Model created using mongoose
let memeSchema = require('../models/Meme');

// CREATE Meme
router.route('/memes').post((req, res, next) => {
  var meme = req.query
  if(!req.query.name) meme = req.body
  memeSchema.findOne({"name": meme.name, "caption": meme.caption, "url": meme.url}, (error, data) => {
    if(data!==null) {
      res.status(409).send('Record already exists!')
    } else {
      memeSchema.create(meme, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.status(201).json({"id": data._id, "name": data.name, "caption": data.caption, "url": data.url})
        }
      })
    }
  })
})

// READ Memes
router.route('/memes').get((req, res, next) => {
  memeSchema.find().sort({$natural:-1}).limit(100).exec(function(err, data) {
    if (err) return next(err);
    res.status(200).json(data);
  })
})

// Get Single Meme
router.route('/memes/:id').get((req, res, next) => {
  memeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return res.status(404).send("Record not found!")
    } else {
      res.status(200).json(data)
    }
  })
})

// UPDATE Meme
router.route('/memes/:id').patch((req, res) => {
  if(req.body.name!=null) {
    return res.status(403).send("Cannot change name!")
  }
  memeSchema.findOneAndUpdate({_id: req.params.id}, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return res.status(404).send(error)
    } else {
      res.status(200).json(req.body)
    }
  })
})

// HOME Page
router.route('/').get((req, res) => {
  res.status(200).json('Hello! Please check https://disha-xmeme.herokuapp.com/memes to see all memes.')
})

// DELETE Meme
router.route('/memes/:id').delete((req, res, next) => {
  memeSchema.findOneAndDelete(req.params.id, (error, data) => {
    if (error) {
      return res.status(404).send(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;