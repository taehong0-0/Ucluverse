import axios from 'axios';
import { info } from 'console';
import { ChangeEvent, useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { isAsExpression } from 'typescript';
import { UserType } from '../../../../Types/UserType';
import { departmentIdxList } from '../../../../Util/constants/constant';
import api from '../../../../Util/helpers/Auth/Api';
import Button from '../../../Button/Button';
import { AdminMemberContainer, MemberBodyContainer } from './style';
interface Props {
  clubId: number;
}

type Member = UserType & {
  userClub: UserClub;
};
interface UserClub {
  userClubIdx: number;
  userIdx: number;
  clubIdx: number;
  role: string;
  status: string;
  star: boolean;
}
const AdminMember = (props: Props): ReactElement => {
  const { clubId } = props;
  const [memberList, setMemberList] = useState<Member[]>([]);
  useEffect(() => {
    // todo: 데이터 요청
    // api.get(`/departments`).then((res) => console.log(res));
    api.get(`/clubs/users/${clubId}`).then((res) => {
      setMemberList(res.data.res.user.sort(sortFunction));
    });
  }, []);
  const sortFunction = (a: Member, b: Member) => {
    if (a.userClub.role === 'manager' && b.userClub.role === 'manager') {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    } else if (a.userClub.role === 'manager') {
      return -1;
    } else if (b.userClub.role === 'manager') {
      return 1;
    } else {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }
  };
  const onChange = (e: ChangeEvent<HTMLSelectElement>, member: Member) => {
    setMemberList((memberList) => {
      return memberList
        .map((element) => {
          if (element === member) {
            const { userClub, ...info } = element;
            userClub.role = e.target.value;
            return {
              ...info,
              userClub: userClub,
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
                  className={member.userClub.role && member.userClub.role === 'manager' ? 'manager' : 'member'}
                  onChange={(e) => onChange(e, member)}
                >
                  <option value="manager" selected={member.userClub.role === 'manager'}>
                    임원
                  </option>
                  <option value="member" selected={!member.userClub.role || member.userClub.role === 'member'}>
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
};
export default AdminMember;
