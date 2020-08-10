import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql';

export const memberListType = new GraphQLObjectType({
  name: 'memberList',
  description: 'memberList',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member ID.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    }
  }
});

export const memberItemType = new GraphQLInputObjectType({
  name: 'memberItem',
  description: 'memberItem',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member ID'
    }
  }
});

export const memberCreateInput = new GraphQLInputObjectType({
  name: 'memberCreateInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    }
  }
});

export const memberDeleteInput = new GraphQLInputObjectType({
  name: 'memberDeleteInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member id'
    }
  }
})
