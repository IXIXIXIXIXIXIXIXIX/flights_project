const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(cors());
app.use(parser.json());


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err)
    {
        console.log(err);
    }
    const db = client.db('skyrabble');
    const bookingsCollection = db.collection('countries');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/countries', bookingsRouter);

    app.listen(5001, function() {
        console.log(`App listening on port ${this.address().port}`);
    })

});