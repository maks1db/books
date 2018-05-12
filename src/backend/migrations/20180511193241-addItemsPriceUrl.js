'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn('itemPrices', 'itemUrlId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'itemUrls',
                key: 'id'
            }
        });
    },

    down: queryInterface => {
        queryInterface.removeColumn('itemPrices', 'itemUrlId');
    }
};
