/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getProducts: function(req, res) {
        ProductService.getProducts(function(products) {
            res.json(products);
        });
    }

};