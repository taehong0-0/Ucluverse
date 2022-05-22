import React, { ReactElement, SetStateAction, useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import useCheckRole from '../../../Hooks/useCheckRole';
import { ClubContext } from '../../../Pages/Club/Club';
import { userState } from '../../../Recoil/User';
import { BoardType } from '../../../Types/PostType';
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
const questions = ['이름', '학번', '관심있는 과목', '개발경험', '개발실력', '개발언어'];
const notice = `ddddd\r\n
ddddddd
ddddddddddd\r\n
ddddddd
ddddddddddd\r\n
ddddddd
dddddd`;

const ClubSideBar = (props: props): ReactElement => {
  const { AboutBoardList, CommunicationBoardList, setBoardIdx, setBoardName, clubId } = props;
  const role = useCheckRole(clubId);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = useRecoilValue(userState);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const handleModalClose = (e: MouseEvent) => {
    if (isOpen && !modalRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };
  const submit = () => {};
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
  return (
    <SideBarContainer>
      <button onClick={() => setIsOpen(true)}>가입 신청</button>
      <span>카테고리</span>
      <BoardContainer>
        <div>
          <span>About</span>
          {AboutBoardList.map((board) => (
            <Link to={`/club/${clubId}/board`}>
              <span
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
            <Link to={`/club/${clubId}/board`}>
              <span
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
      {role === 2 && (
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
                  <pre>{notice}</pre>
                </div>
                <span>첨부파일</span>
              </div>
              <div>
                {questions.map((question, idx) => {
                  return (
                    <FloatInput
                      name={question}
                      inputRef={(el: HTMLInputElement) => (inputRef.current[idx] = el)}
                      type="midium"
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
