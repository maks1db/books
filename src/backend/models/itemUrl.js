'use strict';
module.exports = (sequelize, DataTypes) => {
    var itemUrl = sequelize.define(
        'itemUrl',
        {
            url: DataTypes.STRING
        },
        {}
    );
    itemUrl.associate = function(models) {
        models.itemUrl.belongsTo(models.item, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };
    return itemUrl;
};
