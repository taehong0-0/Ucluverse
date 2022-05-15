import axios from 'axios';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { ReactElement } from 'react';
import Button from '../../../Button/Button';
import { AdminEnrollmentListContainer, ListBodyContainer } from './style';
interface Props {
  clubId: number;
}
interface Member {
  name: string;
  studentId: number;
  department: string;
  path: string;
  questions: [];
}
const AdminEnrollmentList = (props: Props): ReactElement => {
  const { clubId } = props;
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [questions, setQuestions] = useState<[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //todo: 데이터 요청
    // axios.get(``).then((res) => setMemberList(res.data.res));
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
  const accept = (userId: number) => {};
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
        <div>
          <span>회원 이름</span>
          <span>학번</span>
          <span>학과</span>
          <span>첨부파일</span>
          <span
            onClick={() => {
              setQuestions([]);
              setIsOpen(true);
            }}
          >
            응답내용
          </span>
          <div>
            <Button clickEvent={() => accept(1)} name="확인" />
            <button onClick={() => setIsOpen(false)}>
              <span>취소</span>
            </button>
          </div>
        </div>
      </ListBodyContainer>
      {isOpen && (
        <div className="modal-background">
          <div className="modal" ref={modalRef}></div>
        </div>
      )}
    </AdminEnrollmentListContainer>
  );
};
export default AdminEnrollmentList;
