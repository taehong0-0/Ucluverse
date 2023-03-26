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
import api from '../../../Util/helpers/Auth/Api';

const ClubPost = (): ReactElement => {
  const url = useLocation();
  const [post, setPost] = useState<PostType | null>(null);
  const urlParams = new URLSearchParams(url.search);
  const postId = urlParams.get('postId');
  const user = useRecoilValue(userState);

  useEffect(() => {
    api.get(`/postings/${postId}/${user.userIdx}`).then((res) => {
      setPost(res.data.res.postings);
    });
  }, []);
  return (
    <PostContainer>
      <PostHeader post={post} />
      <PostMain post={post} />
    </PostContainer>
  );
};
export default ClubPost;
