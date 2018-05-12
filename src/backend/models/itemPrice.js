'use strict';
module.exports = (sequelize, DataTypes) => {
    var itemPrice = sequelize.define(
        'itemPrice',
        {
            date: {
                type: DataTypes.DATE,
                defaul: sequelize.NOW
            },
            price: {
                type: DataTypes.FLOAT
            }
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
        models.itemPrice.belongsTo(models.itemUrl, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };

    return itemPrice;
};
