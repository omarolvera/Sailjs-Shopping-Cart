module.exports = {
    getProducts: function(next) {
        Products.find().exec(function(err, products) {
            if (err) throw err;
            next(products);
        });

    }

};