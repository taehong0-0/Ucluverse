import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { PostContainer } from './style';
import test1 from '../../../Assets/test1.jpeg';
import PostHeader from './Header/PostHeader';
import PostMain from './Main/PostMain';
import { useState } from 'react';
import { PostType } from '../../../Types/PostType';
import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../Recoil/User';

const ClubPost = (): ReactElement => {
  const url = useLocation();
  const [post, setPost] = useState<PostType | null>(null);
  const urlParams = new URLSearchParams(url.search);
  const postId = urlParams.get('postId');
  const user = useRecoilValue(userState);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/postings/${postId}/${user.userIdx}`).then((res) => {
      console.log(res);
    });
  }, []);
  //제목, 작성자, 작성시간, 게시판, 좋아요 수, 유저의 좋아요 유무, 댓글, 내용
  // const post = {
  //   title: '더미데이터',
  //   content: '너네 자랑하고 싶은거 있음 얼마든지 해',
  //   time: '22.04.28 11:50',
  //   boardName: '자유게시판',
  //   likeNum: 15,
  //   isLike: true,
  //   comment: [],
  // };
  return (
    <PostContainer>
      <PostHeader post={post} />
      <PostMain post={post} />
    </PostContainer>
  );
};
export default ClubPost;
