const graphql = require('graphql');

const {
      GraphQLObjectType,
      GraphQLSchema
}  = graphql;

const mutations =  require('./mutations');
const queries = require('./queries');

module.export = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});
