// eslint-disable-next-line object-curly-newline
import { ChangeEvent, useEffect, useState, ReactElement } from 'react';

import { UserType } from '../../../../Types/UserType';
import { departmentIdxList } from '../../../../Util/constants/constant';
import api from '../../../../Util/helpers/Auth/Api';
import { AdminMemberContainer, MemberBodyContainer } from './style';

interface Props {
  clubId: number;
}
interface UserClub {
  userClubIdx: number;
  userIdx: number;
  clubIdx: number;
  role: string;
  status: string;
  star: boolean;
}
type Member = UserType & {
  userClub: UserClub;
};

function AdminMember(props: Props): ReactElement {
  const { clubId } = props;
  const [memberList, setMemberList] = useState<Member[]>([]);
  const sortFunction = (a: Member, b: Member) => {
    if (a.userClub.role === 'manager' && b.userClub.role === 'manager') {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }
    if (a.userClub.role === 'manager') {
      return -1;
    }
    if (b.userClub.role === 'manager') {
      return 1;
    }
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  };
  useEffect(() => {
    // todo: 데이터 요청
    // api.get(`/departments`).then((res) => console.log(res));
    api.get(`/clubs/users/${clubId}`).then((res) => {
      setMemberList(res.data.res.user.sort(sortFunction));
    });
  }, []);
  const onChange = (e: ChangeEvent<HTMLSelectElement>, member: Member) => {
    setMemberList((prev) => {
      return prev
        .map((element) => {
          if (element === member) {
            const { userClub, ...info } = element;
            userClub.role = e.target.value;
            return {
              ...info,
              userClub,
            };
          }
          return element;
        })
        .sort(sortFunction);
    });
    api.post(`/user/userClub/changeRole/${member.userClub.userClubIdx}`);
  };
  return (
    <AdminMemberContainer>
      <span>회원관리</span>
      <div>
        <span>등급</span>
        <span>이름</span>
        <span>학번</span>
        <span>학과</span>
      </div>
      <MemberBodyContainer>
        {memberList.map((member) => {
          return (
            <div key={member.studentId}>
              <div>
                <select
                  id={member.name + member.studentId}
                  className={
                    member.userClub.role && member.userClub.role === 'manager'
                      ? 'manager'
                      : 'member'
                  }
                  onChange={(e) => onChange(e, member)}
                >
                  <option value="manager" selected={member.userClub.role === 'manager'}>
                    임원
                  </option>
                  <option
                    value="member"
                    selected={!member.userClub.role || member.userClub.role === 'member'}
                  >
                    회원
                  </option>
                </select>
              </div>
              <span>{member.name}</span>
              <span>{member.studentId}</span>
              <span>{departmentIdxList[member.departmentIdx - 1]}</span>
            </div>
          );
        })}
      </MemberBodyContainer>
    </AdminMemberContainer>
  );
}
export default AdminMember;
