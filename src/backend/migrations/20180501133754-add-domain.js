'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('itemUrls', 'domain', {
            type: Sequelize.STRING
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('itemUrls', 'domain');
    }
};
