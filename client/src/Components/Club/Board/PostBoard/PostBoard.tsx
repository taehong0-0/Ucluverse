import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostTitleType } from '../../../../Types/PostType';
import Button from '../../../Button/Button';
import PostTitle from '../../Post/Title/PostTitle';
import { ClubBoardContainer } from './style';

const posts = [
  {
    title: '공지사항',
    author: '작성자다',
    type: '공지사항',
    date: '04.12',
    postId: 1,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 2,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 3,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 4,
  },
  {
    title: '일반 포스트다',
    author: '작성자다',
    type: '일반 포스트다',
    date: '04.12',
    postId: 5,
  },
];
interface props {
  boardIdx: number;
  clubId: number;
}
const PostBoard = (props: props) => {
  const { boardIdx, clubId } = props;
  const [postList, setPostList] = useState<PostTitleType[]>([]);
  useEffect(() => {
    // axios.get(`${process.env.REACT_APP_SERVER_URL}/`).then((res) => {
    //   setPostList(res.data);
    // });
  }, []);
  return (
    <ClubBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>게시판 이름</span>
        </div>
        {posts.map((post) => (
          <PostTitle
            title={post.title}
            author={post.author}
            date={post.date}
            type={post.type}
            postId={post.postId}
          ></PostTitle>
        ))}
      </div>
      <Link to={`/club/${clubId}/posting`}>
        <Button name="글작성" clickEvent={() => {}}></Button>
      </Link>
    </ClubBoardContainer>
  );
};
export default PostBoard;
