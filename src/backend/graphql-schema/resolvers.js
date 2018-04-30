const models = require('../models');

const resolvers = {
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
            })
    },
    Mutation: {
        item: async (__, arg) => {
            if (arg.id) {
                const item = await models.item.findOne({
                    where: { id: arg.id }
                });
                return item ? item.update(arg) : models.item.create(arg);
            } else {
                return models.item.create(arg);
            }
        },
        itemPrice: async (__, arg) => {
            if (arg.id) {
                const item = await models.itemPrice.findOne({
                    where: { id: arg.id }
                });
                return item ? item.update(arg) : models.itemPrice.create(arg);
            } else {
                return models.itemPrice.create(arg);
            }
        }
    }
};

module.exports = resolvers;
