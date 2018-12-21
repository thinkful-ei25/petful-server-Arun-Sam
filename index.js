'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const {dogs, cats} = require('./seed');

const router = express.Router();

const app = express();

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
    res.json(cats.peek());
  })
  .delete((req,res,next)=>{
    cats.dequeue();
    res.sendStatus(204);
  });


router.route('/dog')
  .get((req,res,next)=>{
    res.json(dogs.peek());
  })
  .delete((req,res,next)=>{
    dogs.dequeue();
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
