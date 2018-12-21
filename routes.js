'use strict';

const express = require('express');

const router = express.Router();

router.route('/cat')
  .get((req,res, next)=>{
    
    const cat = {
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    };

    res.json(cat)
      .catch(err => {
        next(err);
      });
  })
  .delete();


router.route('/dog')
  .get((req,res,next)=>{
    const dog = {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    };

    res.json(dog)
      .catch(err=>{
        next(err);
      });
  })
  .delete();


module.exports = router;