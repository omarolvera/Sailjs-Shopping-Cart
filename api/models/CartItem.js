/**
 * CartItem.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {

    attributes: {
        productId: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        qty: {
            type: 'integer'
        },
        price: {
            type: 'integer'
        }


    },
    connection: 'mongodb'
};