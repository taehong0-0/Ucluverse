import { ConstructionOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { ReactElement, SetStateAction, useEffect, useRef, useState } from 'react';
import { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import useCheckRole from '../../../Hooks/useCheckRole';
import { ClubContext } from '../../../Pages/Club/Club';
import { userState } from '../../../Recoil/User';
import { BoardType } from '../../../Types/PostType';
import { departmentIdxList } from '../../../Util/constant';
import Button from '../../Button/Button';
import FloatInput from '../../Input/Input';
import { BoardContainer, SideBarContainer } from './style';
interface props {
  AboutBoardList: BoardType[];
  CommunicationBoardList: BoardType[];
  clubId: number;
  setBoardIdx: Dispatch<SetStateAction<number>>;
  setBoardName: Dispatch<SetStateAction<string>>;
}

interface Form {
  clubIdx: number;
  notice: string;
  formIdx: number;
  questions: Question[];
}
interface Question {
  content: string;
  questionIdx: number;
  formIdx: number;
}
const ClubSideBar = (props: props): ReactElement => {
  const { AboutBoardList, CommunicationBoardList, setBoardIdx, setBoardName, clubId } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [form, setForm] = useState<Form | null>(null);
  const user = useRecoilValue(userState);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const role = useCheckRole(clubId);
  const handleModalClose = (e: MouseEvent) => {
    if (isOpen && !modalRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  const showToast = (content: string) => {
    toast(content, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submit = () => {
    for (let input of inputRef.current) {
      if (!input.value) {
        showToast('모든 질문에 응답해주세요.');
        return;
      }
    }
    const answerList = inputRef.current.map((answer, idx) => {
      return { questionIdx: form?.questions[idx].questionIdx, content: answer.value };
    });
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/userClub/answer`, {
        userIdx: user.userIdx,
        clubIdx: clubId,
        answerList: answerList,
        submissionFiles: [],
      })
      .then((res) => {
        showToast('신청이 완료되었습니다.');
        setIsOpen(false);
      });
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/forms/${clubId}`).then((res) => {
      setForm(res.data.res.form);
    });
  }, [clubId]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
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
  const singUpClick = () => {
    if (role === 0) {
      setIsOpen(true);
    } else {
      showToast('이미 회원입니다.');
    }
  };
  return (
    <SideBarContainer>
      <button onClick={() => singUpClick()}>가입 신청</button>
      <span>카테고리</span>
      <BoardContainer>
        <div>
          <span>About</span>
          {AboutBoardList.map((board) => (
            <Link to={`/club/${clubId}/board`} key={board.boardIdx}>
              <span
                key={board.boardIdx}
                className="board-name"
                onClick={() => {
                  setBoardIdx(board.boardIdx);
                  setBoardName(board.name);
                }}
              >
                {board.name}
              </span>
            </Link>
          ))}
        </div>
        <div>
          <span>소통공간</span>
          {CommunicationBoardList.map((board) => (
            <Link to={`/club/${clubId}/board`} key={board.boardIdx}>
              <span
                key={board.boardIdx}
                className="board-name"
                onClick={() => {
                  setBoardIdx(board.boardIdx);
                  setBoardName(board.name);
                }}
              >
                {board.name}
              </span>
            </Link>
          ))}
        </div>
      </BoardContainer>
      {role !== 2 && (
        <Link to={`/admin/${clubId}`}>
          <button>어드민페이지</button>
        </Link>
      )}
      {isOpen && (
        <div className="modal-background">
          <div className="modal" ref={modalRef}>
            <span>가입 신청</span>
            <div>
              <div>
                <span>공지사항</span>
                <div id="notice">
                  <pre>{form?.notice}</pre>
                </div>
                <span>첨부파일</span>
              </div>
              <div>
                {form?.questions
                  .map((question) => question.content)
                  .map((question, idx) => {
                    return (
                      <FloatInput
                        name={'질문 ' + (idx + 1)}
                        inputRef={(el: HTMLInputElement) => (inputRef.current[idx] = el)}
                        type="midium"
                        detail={question}
                        key={question}
                      />
                    );
                  })}
              </div>
            </div>
            <div>
              <Button clickEvent={() => submit()} name="확인" />
              <button onClick={() => setIsOpen(false)}>
                <span>취소</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </SideBarContainer>
  );
};
export default ClubSideBar;
