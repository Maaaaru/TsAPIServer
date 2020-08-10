import { memberList } from '@/DB';

export const getMembersList = () => Promise.resolve(memberList);

export const getMember = (id: number) => {
  const memberData = memberList.filter(memberItem => memberItem.id === id);

  return memberData;
}

export const createMember = ({name, age}: {name: string; age: number}) => {
  const member = {
    id: memberList.length + 1,
    name,
    age
  };

  memberList.push(member);

  return memberList;
}

export const deleteMember = (id: number) => {
  const filteredArray = memberList.filter(memberData => memberData.id !== id);

  return filteredArray;
}