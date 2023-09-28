module.exports = function(app, db, ObjectID) {
    app.post('/api/update', function(req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product.id);
        const collection = db.collection('products');
        collection.find({'id':product.id}).count((err, count) => {
            if(count == 1){
                collection.updateOne({id:product.id}, {$set:{name:product.name, description: product.description, 
                    price:product.price, units: product.units}}, () => {
                        //console.log(product);
                        res.send({'message': 'updated', 'product': product})
                    })
            } else {
                res.send({num:0, err:"no item found"});
            }
        });
    });
}