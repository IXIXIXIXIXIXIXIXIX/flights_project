const express = require("express");
const app = express();
const parser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");
const cors = require("cors");

app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("airportdb");
    const airport_dataCollection = db.collection("airport_data");
    const airport_dataRouter = createRouter(airport_dataCollection);
    app.use("/api/airport_data", airport_dataRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});