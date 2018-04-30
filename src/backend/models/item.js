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
        {}
    );
    item.associate = function(models) {
        models.item.hasMany(models.itemPrice, { as: 'price' });
        models.item.hasMany(models.itemUrl, { as: 'url' });
    };
    return item;
};
