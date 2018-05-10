'use strict';
module.exports = (sequelize, DataTypes) => {
    var domainDiscount = sequelize.define(
        'domainDiscount',
        {
            domain: DataTypes.STRING,
            discount: DataTypes.INTEGER
        },
        {}
    );
    domainDiscount.associate = function(models) {
        // associations can be defined here
    };
    return domainDiscount;
};
