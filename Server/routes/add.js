module.exports = function(app, db) {
    app.post('/api/add', function(req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
        const product = req.body;
        //console.log(req.body);
        const collection = db.collection('products');
        collection.find({'id':product.id}).count((err, count) => {
            if(count == 0 && product.id){
                collection.insertOne(product, (err, dbres) => {
                    if(err) throw err;
                    let num = dbres.insertedCount;
                    res.send({'num':num, err:null});
                })
            } else {
                res.send({num:0, err:"duplicate item"});
            }
        })
    });
}