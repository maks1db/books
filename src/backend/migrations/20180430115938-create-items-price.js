'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'itemPrices',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                date: {
                    type: Sequelize.DATE
                },
                price: {
                    type: Sequelize.FLOAT
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                itemId: {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'items',
                        key: 'id'
                    }
                }
            },
            { charset: 'utf8', collate: 'utf8_unicode_ci' }
        );
    },
    down: queryInterface => {
        return queryInterface.dropTable('itemPrices');
    }
};
