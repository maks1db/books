'use strict';
module.exports = (sequelize, DataTypes) => {
    var itemPrice = sequelize.define(
        'itemPrice',
        {
            date: DataTypes.DATE
        },
        {}
    );
    itemPrice.associate = function(models) {
        models.itemPrice.belongTo(models.item, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };

    return itemPrice;
};
