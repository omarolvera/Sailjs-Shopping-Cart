/**
 * CartItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getCartItems: function(req, res) {
        CartItemService.getCartItems(function(products) {
            res.json(products);
        });
    },
    addCartItem: function(req, res) {
        //sails.log(' id is:', req.body);
        var productInfo = {
            id: (req.body.id) ? req.body.id : undefined,
            name: (req.body.name) ? req.body.name : undefined,
            qty: 1,
            price: (req.body.price) ? req.body.price : undefined,
        };

        CartItemService.addCartItem({ productId: productInfo.id, name: productInfo.name, qty: 1, price: productInfo.price }, function(success) {
            res.json(success);
        });
    },
    removeCartItem: function(req, res) {
        var productInfo = (req.body.value) ? req.body.value : undefined
        CartItemService.removeCartItem(productInfo, function(success) {
            res.json(success);
        });
    }
};