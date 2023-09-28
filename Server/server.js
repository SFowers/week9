const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const mongoURL = 'mongodb://127.0.0.1:27017/';
const dbName = 'mydb';
let db; 

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB server');

    db = client.db(dbName);

    require('./routes/add.js')(app, db);
    require('./routes/read.js')(app, db);
    require('./routes/update.js')(app, db, ObjectID);
    require('./routes/remove.js')(app, db, ObjectID);

    app.listen(port, () => {
        console.log('App is listening on port ' + port);
    });
});

module.exports = {
    app: app,
    http: http
};
