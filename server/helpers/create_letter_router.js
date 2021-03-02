const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const createLetterRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray()
    .then((docs) => {
      res.json(docs)

    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({_id: ObjectID(id)})
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    })
  });


  // SHOW - Get a single tile by letter
  router.get('/letter/:letter', (req, res) => {
    const letter = req.params.letter;
    console.log("Requested score for:", letter);
    collection.findOne({letter: letter})
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    })
  });


  // // SHOW - Get an array of tiles
  // router.get('/word/:word', (req, res) => {
  //   const preWord = req.params.word;
  //   const word = preWord.split("");
  //   console.log("Requested score for:", word);

  //   let returnArray = []
  //   for(let i=0; i < word.length; ++i)
  //   {
  //     collection.find({letter: word[i]})
  //     .then((doc) => {
  //       returnArray.push(doc)
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500);
  //       res.json({status: 500, error: err});
  //     })
  //   }
  //     res.json(returnArray);
  // });






  return router;

};

module.exports = createLetterRouter;
