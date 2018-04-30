const models = require('../models');

const resolvers = {
    Query: {
        items: async (__, arg) =>
            await models.item.findAll({
                where: arg,
                order: [['orderNumber']],
                in
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
        }
    }
};

module.exports = resolvers;
