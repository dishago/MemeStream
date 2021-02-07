let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Meme Model
let memeSchema = require('../models/Meme');

// CREATE Meme
router.route('/memes').post((req, res, next) => {
  if(!req.query.name) {
    memeSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        //console.log(data)
        res.json({"id": data._id, "name": data.name, "caption": data.caption, "url": data.url})
      }
    })
  } else {
    memeSchema.create(req.query, (error, data) => {
      if (error) {
        return next(error)
      } else {
        //console.log(data)
        res.json({"id": data._id, "name": data.name, "caption": data.caption, "url": data.url})
      }
    })
  }
});

// READ Memes
router.route('/memes').get((req, res, next) => {
  memeSchema.find().sort({$natural:-1}).limit(100).exec(function(err, data) {
    if (err) return next(err);
    //console.log(data);
    res.json(data);
  })
})

// Get Single Meme
router.route('/memes/:id').get((req, res, next) => {
  memeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      //console.log(data)
      res.json(data)
    }
  })
})

// Update Meme
router.route('/memes/:id').patch((req, res, next) => {
  memeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      //console.log(error)
      return next(error);
    } else {
      res.json(req.body)
      console.log('Meme updated successfully !')
    }
  })
})

router.route('/').get((req, res, next) => {
  res.send('Hello! Please check https://disha-xmeme.herokuapp.com/memes to see all memes.')
})

// // Delete Student
// router.route('/delete-student/:id').delete((req, res, next) => {
//   studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = router;