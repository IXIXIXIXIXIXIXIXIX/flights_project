const express = require('express');
const ObjectID = require('mongodb').ObjectID;


const createRouter = function (collection) {

  const router = express.Router();

  // INDEX - Get all airports
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

  // SHOW - Get a single airport BY ID
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


  // SHOW - Get a single airport BY ICAO
  router.get('/icao_code/:icao_code', (req, res) => {
    const icao_code = req.params.icao_code;
    console.log(icao_code);
    collection.findOne({icao_code: icao_code})
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    })
  });


  // CREATE - Create a new doc
  router.post('/', (req, res) => {
    console.log("route reached");
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => res.json(result.ops[0]))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
      });
    });

  //DESTROY - Delete a doc
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({_id: ObjectID(id)})
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });

  });


  // UPDATE - Update a doc
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    collection.updateOne(
      {_id: ObjectID(id)},
      {$set: updatedData}
    )
    .then((result) => {res.json(result)})
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });
  return router;

};

module.exports = createRouter;
