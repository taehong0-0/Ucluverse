import { ChangeEvent, useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { AdminMemberContainer, MemberBodyContainer } from './style';
interface Props {
  clubId: number;
}
interface Member {
  type: string;
  name: string;
  studentId: number;
  department: string;
}
const AdminMember = (props: Props): ReactElement => {
  const { clubId } = props;
  const [memberList, setMemberList] = useState<Member[]>([]);
  useEffect(() => {
    // todo: 데이터 요청
    // axios.get(``).then((res) => setMemberList(res.data.res));
    setMemberList(
      [
        {
          type: '회원',
          name: '이호용',
          studentId: 201720793,
          department: '소프트웨어학과',
        },
        {
          type: '임원',
          name: '권대휘',
          studentId: 201720721,
          department: '소프트웨어학과',
        },
        {
          type: '임원',
          name: '민태홍',
          studentId: 201720753,
          department: '소프트웨어학과',
        },
      ].sort(sortFunction),
    );
  }, [clubId]);
  const sortFunction = (a: Member, b: Member) => {
    if (a.type === '임원' && b.type === '임원') {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    } else if (a.type === '임원') {
      return -1;
    } else {
      return 1;
    }
  };
  const onChange = (e: ChangeEvent<HTMLSelectElement>, member: Member) => {
    // document
    //   .querySelector(`#${member.name}${member.studentId}`)
    // ?.setAttribute('title', e.target.value);
    const selected = memberList.find((element) => element === member);
    if (!selected) return;
    // selected['type'] = e.target.value;
    const newMember: Member = {
      type: e.target.value,
      name: selected.name,
      studentId: selected.studentId,
      department: selected.department,
    };
    // setMemberList((list) =>
    //   [selected, ...list.filter((element) => element !== member)].sort(
    //     sortFunction,
    //   ),
    // );
    setMemberList((memberList) => {
      return memberList
        .map((element) => {
          if (element === member) {
            return {
              type: e.target.value,
              name: element.name,
              studentId: element.studentId,
              department: element.department,
            };
          }
          return element;
        })
        .sort(sortFunction);
    });
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
            <div>
              <div key={member.studentId}>
                <select
                  id={member.name + member.studentId}
                  className={member.type === '임원' ? '임원' : '회원'}
                  name="type"
                  title={member.type === '임원' ? '임원' : '회원'}
                  onChange={(e) => onChange(e, member)}
                >
                  <option
                    value="임원"
                    className={`${member.type === '임원'}`}
                    selected={member.type === '임원'}
                    onChange={() => console.log('change')}
                    onClick={() => console.log('click')}
                  >
                    임원
                  </option>
                  <option
                    value="회원"
                    selected={member.type === '회원'}
                    className={`${member.type === '회원'}`}
                    onChange={() => console.log('change')}
                    onClick={() => console.log('click')}
                  >
                    회원
                  </option>
                </select>
              </div>
              <span>{member.name}</span>
              <span>{member.studentId}</span>
              <span>{member.department}</span>
            </div>
          );
        })}
      </MemberBodyContainer>
    </AdminMemberContainer>
  );
};
export default AdminMember;
