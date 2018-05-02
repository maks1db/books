const reg = /([\w][\w\d-]+\.[\w\d]{2,3})/gi;

module.exports = (sequelize, DataTypes) => {
    var itemUrl = sequelize.define(
        'itemUrl',
        {
            url: DataTypes.STRING,
            itMain: DataTypes.BOOLEAN,
            domain: DataTypes.STRING
        },
        {
            hooks: {
                beforeSave: item => {
                    const result = (item.url || '')
                        .replace('www.', '')
                        .match(reg);
                    item.domain = (result && result[0]) || '';
                }
            }
        }
    );
    itemUrl.associate = function(models) {
        models.itemUrl.belongsTo(models.item, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false
            }
        });
    };
    return itemUrl;
};
