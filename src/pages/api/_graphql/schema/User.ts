import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFieldConfigMap,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

export interface UserType {
  id: number | string;
  username: string;
}

export const UserSchema = new GraphQLObjectType({
  name: 'User',
  fields: (): GraphQLFieldConfigMap<UserType, object> => ({
    username: {
      type: GraphQLString,
      resolve(user): string {
        return user.username;
      },
    },
    referrer: {
      type: UserSchema,
      resolve(user): UserType {
        return { ...user, username: 'Bosb' };
      },
    },
  }),
});

const users: UserType[] = [
  { id: '1', username: 'Adam' },
  { id: '2', username: 'Bob' },
  { id: '3', username: 'Chris' },
];

export const UserRootConfig = {
  type: UserSchema,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { id }): UserType {
    return users.find(user => String(user.id) === String(id));
  },
};
