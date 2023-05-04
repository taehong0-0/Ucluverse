import React, { ReactElement, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { PostContainer } from './style';
import PostHeader from './Header/PostHeader';
import PostMain from './Main/PostMain';
import { PostType } from '../../../Types/PostType';
import { userState } from '../../../Recoil/User';
import api from '../../../Util/helpers/Auth/Api';

function ClubPost(): ReactElement {
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
}
export default ClubPost;
