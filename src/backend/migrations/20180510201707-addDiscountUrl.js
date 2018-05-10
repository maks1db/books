'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return [
            queryInterface.addColumn('itemUrls', 'discount', {
                type: Sequelize.INTEGER
            })
        ];
    },

    down: queryInterface => {
        return [queryInterface.removeColumn('itemUrls', 'discount')];
    }
};
