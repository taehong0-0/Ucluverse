import axios from 'axios';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ReactElement } from 'react';
import { UserType } from '../../../../Types/UserType';
import { departmentIdxList } from '../../../../Util/constant';
import Button from '../../../Button/Button';
import { AdminEnrollmentListContainer, ListBodyContainer } from './style';
interface Props {
  clubId: number;
}
type Member = UserType & {
  questions: string[];
};
const AdminEnrollmentList = (props: Props): ReactElement => {
  const { clubId } = props;
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //todo: 데이터 요청
    axios.get(`${process.env.REACT_APP_SERVER_URL}/user/userClub/applied/users/${clubId}`).then((res) => {
      setMemberList(res.data.res.user);
    });
  }, [clubId]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
    position: fixed; 
    overflow-y: scroll;
    width: 100%;`;
    }
    window.addEventListener('click', handleModalClose);
    return () => {
      window.removeEventListener('click', handleModalClose);
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isOpen]);
  const handleModalClose = (e: MouseEvent) => {
    if (isOpen && !modalRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  const accept = (userId: number) => {
    setMemberList((memberList) => memberList.filter((member) => member.userIdx !== userId));
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/userClub/accept`, {
      userIdx: userId,
      clubIdx: clubId,
    });
  };
  const reject = (userId: number) => {
    setMemberList((memberList) => memberList.filter((member) => member.userIdx !== userId));
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/userClub/reject`, {
      userIdx: userId,
      clubIdx: clubId,
    });
  };
  return (
    <AdminEnrollmentListContainer>
      <span>신청목록</span>
      <div>
        <span>회원 이름</span>
        <span>학번</span>
        <span>학과</span>
        <span>첨부파일</span>
        <span>응답내용</span>
      </div>
      <ListBodyContainer>
        {memberList?.map((member) => (
          <div>
            <span>{member.name}</span>
            <span>{member.studentId}</span>
            <span>{departmentIdxList[member.departmentIdx]}</span>
            <span>첨부파일</span>
            <span
              onClick={() => {
                setQuestions(member.questions);
                setIsOpen(true);
              }}
            >
              응답내용
            </span>
            <div>
              <Button clickEvent={() => accept(member.userIdx)} name="확인" />
              <button onClick={() => reject(member.userIdx)}>
                <span>취소</span>
              </button>
            </div>
          </div>
        ))}
      </ListBodyContainer>
      {isOpen && (
        <div className="modal-background">
          <div className="modal" ref={modalRef}>
            // questions 이용한 질문 리스트
          </div>
        </div>
      )}
    </AdminEnrollmentListContainer>
  );
};
export default AdminEnrollmentList;
