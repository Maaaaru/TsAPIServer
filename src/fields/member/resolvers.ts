import { memberList } from '@/DB';

export const getMemberList = () => Promise.resolve(memberList);

export const createMember = ({name, age}: {name: string; age: number}) => {
  const member = {
    id: memberList.length + 1,
    name,
    age
  };

  memberList.push(member);

  return memberList;
}