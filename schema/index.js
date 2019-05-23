import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import queries from './queries';
let queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => (queries)
});

export let Schema = new GraphQLSchema({
  query: queryType
});