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
        models.itemPrice.belongsTo(models.item, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };

    return itemPrice;
};
