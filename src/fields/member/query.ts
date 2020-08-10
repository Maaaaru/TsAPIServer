import { GraphQLList, GraphQLNonNull } from 'graphql';
import { getMembersList, getMember} from '@/fields/member/resolvers';
import { memberListType, memberItemType } from '@/fields/member/types';

export const memberQuery = {
  memberList: {
    type: new GraphQLList(memberListType),
    description: 'Get list data',
    resolve: getMembersList
  },
  memberItem: {
    type: new GraphQLList(memberListType),
    args: {
      member: {
        type: new GraphQLNonNull(memberItemType)
      }
    },
    description: 'Get list data',
    resolve: (_: any, args: any) => {
      return getMember(args.member);
    }
  }
};