'use strict';

const Queue = require('./queue');

const cats = new Queue();
const dogs = new Queue();

cats.enqueue({
  imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/250px-Garfield_the_Cat.svg.png',
  imageDescription: 'Tabby cat who hates mondays feasts on lasagna',
  name: 'Garfield',
  sex: 'Male',
  age: 8,
  breed: 'Tabby Cat',
  story: 'Jon was fed up with his complaining'
});

cats.enqueue({
  imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  imageURL: 'https://pbs.twimg.com/profile_images/1068246389384069120/HWQYz7YN_400x400.jpg',
  imageDescription: 'Grumpy cat wearing santa hat',
  name: 'Tardar Sauce',
  sex: 'Female',
  age: 6,
  breed: 'Mixed',
  story: 'Owner gave her away because she was too grumpy'
});

cats.enqueue({
  imageURL: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/12/cat-parody-instagram-removal.jpg',
  imageDescription: 'That is one ugly cat',
  name: 'Wilfred',
  sex: 'Male',
  age: 4,
  breed: 'Chinchilla Persian',
  story: 'Owner gave him away because he was way too ugly'
});

dogs.enqueue({
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Bo_official_portrait.jpg/250px-Bo_official_portrait.jpg',
  imageDescription: 'Barack Obamas dog on the White House Lawn',
  name: 'Bo',
  sex: 'Male',
  age: 11,
  breed: 'Portuguese Water Dog',
  story: 'Owner left his residence'
});

dogs.enqueue({
  imageURL: 'http://www.pethealthnetwork.com/sites/default/files/styles/large/public/soft-coated-wheaten-terrier165150890.png?itok=luTlj9bt',
  imageDescription: 'Good doggo just sitting and looking cute',
  name: 'Max',
  sex: 'Male',
  age: 11,
  breed: 'Soft Coated Wheaten Terrier',
  story: 'He was causing a distraction with his cuteness'
});

module.exports = {cats, dogs};