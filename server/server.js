const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');

const app = express();
app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('hotel_bookings');
        const collection = db.collection('bookings');
        const bookingsRouter = createRouter(collection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.err);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});    