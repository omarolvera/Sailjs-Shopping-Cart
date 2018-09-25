module.exports = {
    getCartItems: function(next) {
        CartItem.find().exec(function(err, items) {
            if (err) throw err;
            next(items);
        });

    },
    addCartItem: function(item, next) {

        CartItem.create(item).exec(function(err, product) {
            if (err) throw err;
            next(product);
        });
    },
    removeCartItem: function(item, next) {
        CartItem.destroy({ value: item }).exec(function(err, product) {
            if (err) throw err;
            next(product);
        });
    }

};