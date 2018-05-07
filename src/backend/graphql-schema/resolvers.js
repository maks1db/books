const models = require('../models');
const update = require('../../helpers/models/update');
const updateOrderNumber = require('./updateOrderNumber');

const resolvers = {
    Item: {
        priceList: async arg => {
            return await models.itemPrice.findAll({
                where: { itemId: arg.id },
                order: [['date', 'DESC'], ['price', 'DESC']]
            });
        },
        urlList: async arg => {
            return await models.itemUrl.findAll({
                where: { itemId: arg.id },
                order: [['itMain', 'DESC']]
            });
        }
    },
    Query: {
        items: async (__, arg) =>
            await models.item.findAll({
                where: arg,
                order: [['orderNumber']]
            }),
        itemPrice: async (__, arg) =>
            await models.itemPrice.findAll({
                where: arg,
                order: [['date', 'DESC']]
            }),
        itemUrl: async (__, arg) =>
            await models.itemUrklfindAll({
                where: arg,
                order: [['itMain', 'DESC']]
            })
    },
    Mutation: {
        item: async (__, arg) => {
            const result = await update(models.item, arg);
            arg.id && (await updateOrderNumber(result));

            return result;
        },
        itemPrice: async (__, arg) => await update(models.itemPrice, arg),
        itemUrl: async (__, arg) => await update(models.itemUrl, arg)
    }
};

module.exports = resolvers;
