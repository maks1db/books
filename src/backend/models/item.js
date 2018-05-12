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
            description: DataTypes.STRING,
            myPrice: DataTypes.INTEGER,
            myPriceHot: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN
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
