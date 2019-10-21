import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { UserRootConfig } from './schema/User';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getUser: UserRootConfig,
  },
});

const mutation = null;

export default new GraphQLSchema({
  query,
  mutation,
});
