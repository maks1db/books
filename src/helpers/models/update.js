const R = require('ramda');

const find = model => id => {
    return [
        model.findOne({
            where: { id }
        }),
        model
    ];
};

const update = data => result => {
    return result[0]
        ? result[0].then(x => (x ? x.update(data) : result[1].create(data)))
        : result[1].create(data);
};

module.exports = (model, data) => {
    return data.id
        ? R.pipe(find(model), update(data))(data.id)
        : update(data)([undefined, model]);
};
