import { GraphQLNonNull, GraphQLList } from 'graphql';
import { createMember } from '@/fields/member/resolvers';
import { memberType, memberCreateInput } from '@/fields/member/types';

export const memberMutation = {
  createMember: {
    type: new GraphQLList(memberType),
    args: {
      member: {
        type: new GraphQLNonNull(memberCreateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return createMember(args.member);
    }
  }
};