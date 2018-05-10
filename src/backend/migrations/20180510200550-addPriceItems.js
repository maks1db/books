'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return [
            queryInterface.addColumn('items', 'myPrice', {
                type: Sequelize.INTEGER
            }),
            queryInterface.addColumn('items', 'myPriceHot', {
                type: Sequelize.INTEGER
            })
        ];
    },

    down: queryInterface => {
        return [
            queryInterface.removeColumn('items', 'myPrice'),
            queryInterface.removeColumn('items', 'myPriceHot')
        ];
    }
};
