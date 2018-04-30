const typeDefs = require('./types');
const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});
