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
                            (result.dataValues.maxNumber || 0) + 1;
                    }
                },
                afterSave: (agr1, agr2) => {
                    var a = 1;
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
