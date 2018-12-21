'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const router = express.Router();

const app = express();

const dogs = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
},
{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling doge',
  name: 'Max',
  sex: 'Male',
  age: 3,
  breed: 'Soft-Coated Wheaten Terrier',
  story: 'Owner had too many dogs'
}];

const cats = [{
  imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Tabby cat who hates mondays feasts on lasagna',
  name: 'Garfield',
  sex: 'Male',
  age: 8,
  breed: 'Tabby Cat',
  story: 'Jon was fed up with his complaining'
},
{
  imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}];


app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

router.route('/cat')
  .get((req,res, next)=>{
    res.json(cats[0]);
  })
  .delete((req,res,next)=>{
    cats.shift();
    res.sendStatus(204);
  });


router.route('/dog')
  .get((req,res,next)=>{
    res.json(dogs[0]);
  })
  .delete((req,res,next)=>{
    dogs.shift();
    res.sendStatus(204);
  });

app.use('/api/',router);



function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
