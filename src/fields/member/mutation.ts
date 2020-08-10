import { GraphQLNonNull, GraphQLList } from 'graphql';
import { createMember, deleteMember } from '@/fields/member/resolvers';
import { memberListType, memberCreateInput, memberDeleteInput } from '@/fields/member/types';

export const memberMutation = {
  createMember: {
    type: new GraphQLList(memberListType),
    args: {
      member: {
        type: new GraphQLNonNull(memberCreateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return createMember(args.member);
    }
  },
  deleteMember: {
    type: new GraphQLList(memberListType),
    args: {
      member: {
        type: new GraphQLNonNull(memberDeleteInput)
      }
    },
    resolve: (_: any, args: any) => {
      return deleteMember(args.member);
    }
  }
};