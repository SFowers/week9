module.exports = function(app, db, ObjectID) {
    app.post('/api/remove', function(req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
        productID = req.body.id;

        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.deleteOne({_id:objectid}, (err, docs) => {
            collection.find({}).toArray((err, data) => {
                res.send(data);
            })
        })
    });
}