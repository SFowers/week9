module.exports = function(app, db, ObjectID) {
    app.post('/api/update', function(req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product.id);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid}, {$set:{name:product.name, description: product.description, 
            price:product.price, units: product.units}}, () => {
                res.send({'ok': product.objid})
            })
    });
}