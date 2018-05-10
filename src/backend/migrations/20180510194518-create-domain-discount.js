'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'domainDiscount',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                domain: {
                    type: Sequelize.STRING
                },
                discount: {
                    type: Sequelize.INTEGER
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
        return queryInterface.dropTable('domainDiscount');
    }
};
