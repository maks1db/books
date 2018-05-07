'use strict';
module.exports = (sequelize, DataTypes) => {
    var item = sequelize.define(
        'item',
        {
            title: DataTypes.STRING,
            img: DataTypes.STRING,
            itemType: DataTypes.STRING,
            orderNumber: DataTypes.INTEGER,
            owner: DataTypes.STRING,
            description: DataTypes.STRING
        },
        {
            hooks: {
                beforeSave: async item => {
                    if (!item.orderNumber) {
                        const result = await sequelize.models.item.findOne({
                            attributes: [['orderNumber', 'maxNumber']],
                            order: [['orderNumber', 'DESC']]
                        });

                        item.orderNumber =
                            (result && (result.dataValues.maxNumber || 0)) + 1;
                    }
                },
                afterSave: async item => {
                    const items = await sequelize.models.item.findAll({
                        where: {
                            orderNumber: {
                                $gte: item.orderNumber
                            },
                            id: {
                                $not: item.id
                            }
                        },
                        order: [['orderNumber']]
                    });

                    let ind = item.orderNumber;
                    for (let e in items) {
                        ind++;
                        e.orderNumber = ind;
                        e.save();
                    }
                }
            }
        }
    );
    item.associate = function(models) {
        models.item.hasMany(models.itemPrice, { as: 'price' });
        models.item.hasMany(models.itemUrl, { as: 'url' });
    };
    return item;
};
