'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'itemUrls',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                url: {
                    type: Sequelize.STRING
                },
                itMain: {
                    type: Sequelize.BOOLEAN,
                    default: false
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
        return queryInterface.dropTable('itemUrls');
    }
};
