require('babel-core').transform('code', {
    plugins: ['transform-pipeline']
});
require('./src/backend/server');
