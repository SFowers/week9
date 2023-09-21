module.exports = function(app, db) {
    app.get('/api/read', function(req, res) {
        const collection = db.collection('products');
        collection.find({}).toArray((err, data) => {
            res.send(data);
        })
    });
}