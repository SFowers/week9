const MongoClient= require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = "mydb";

MongoClient.connect(url, {poolSize:10}, function(err, client) {
    if (err) {return console.log(err)};
    console.log("Connected mongodb");
    const db = client.db(dbName);
    //const productsCollection = db.collection('products');

    /*
    require('./add.js')(app, db);
    require('./read.js')(app, db);
    require('./remove.js')(app, db);
    require('./update.js')(app, db);
    */
    client.close();
});
