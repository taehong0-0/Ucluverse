import React, { ReactElement, ReactEventHandler, useRef } from 'react';
import MainBoard from './MainBoard';
import { MainBoardContainerDiv } from './style';
import noticeImg from '../../../Assets/공지사항.png';
import FAQImg from '../../../Assets/FAQ.png';
import { useState, useEffect } from 'react';
import { PostTitleType } from '../../../Types/PostType';
import axios from 'axios';
import { useScrollFadeIn } from '../../../Hooks';
import api from '../../../Util/helpers/Auth/Api';

//테스트용 더미데이터
const posts = [
  { title: '안녕하세요', id: 1 },
  { title: '안녕하세요2', id: 2 },
  { title: '안녕하세요3', id: 3 },
  { title: '안녕하세요4', id: 4 },
  { title: '안녕하세요5', id: 5 },
];

const MainBoardContainer = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [noticeList, setNoticeList] = useState<PostTitleType[]>([]);
  const [FAQList, setFAQList] = useState<PostTitleType[]>([]);
  const animation = useScrollFadeIn('up', 1, 0, 0.05);

  useEffect(() => {
    // api.get(`/`).then((res) => {
    //   setNoticeList(res.data);
    // });
    // api.get(`/`).then((res) => {
    //   setFAQList(res.data);
    // });
  }, []);

  return (
    <MainBoardContainerDiv>
      <section {...animation}>
        <MainBoard imgURL={noticeImg} posts={posts} />
        <MainBoard imgURL={FAQImg} posts={posts} />
      </section>
    </MainBoardContainerDiv>
  );
};
export default MainBoardContainer;
