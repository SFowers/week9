const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) {return console.log(err)};
    console.log("connected mongodb server");
    const dbName = "users";
    const db = client.db(dbName);
    //require('./routes/auth.js')(app, db);
    //require('./routes/auth.js')(app, db);
    //require('./routes/auth.js')(app, db);
    //require('./socket.js')(app, db);
    //require('./listen.js')(app, db);
});