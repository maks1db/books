'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'items',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                title: {
                    type: Sequelize.STRING
                },
                img: {
                    type: Sequelize.STRING
                },
                itemType: {
                    type: Sequelize.STRING
                },
                orderNumber: {
                    type: Sequelize.INTEGER
                },
                owner: {
                    type: Sequelize.STRING
                },
                description: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            },
            { charset: 'utf8', collate: 'utf8_unicode_ci' }
        );
    },
    down: queryInterface => {
        return queryInterface.dropTable('items');
    }
};
