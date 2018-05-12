'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn('items', 'active', {
            type: Sequelize.BOOLEAN
        });
    },

    down: queryInterface => {
        queryInterface.removeColumn('items', 'active');
    }
};
