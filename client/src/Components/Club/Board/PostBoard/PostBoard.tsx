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
  boardName: string;
}
const PostBoard = (props: props) => {
  const { boardIdx, clubId, boardName } = props;
  const [postList, setPostList] = useState<PostTitleType[]>([]);
  useEffect(() => {
    if (boardName === '전체 게시판') {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/postings/club/entire/${boardIdx}`,
        )
        .then((res) => {
          console.log(res);
          console.log(boardIdx);
          setPostList(res.data);
        });
    } else {
      axios
        .get(
          `${process.env.REACT_APP_SERVER_URL}/postings/clubBoard/${boardIdx}`,
        )
        .then((res) => {
          console.log(res);
          console.log(boardIdx);
          setPostList(res.data);
        });
    }
  }, [boardIdx]);
  return (
    <ClubBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>{boardName}</span>
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
      {boardName !== '전체게시판' && (
        <Button
          name="글작성"
          clickEvent={() => {
            window.history.pushState(
              { boardIdx, boardName },
              '',
              `/club/${clubId}/posting`,
            );
            window.location.href = `/club/${clubId}/posting`;
          }}
        ></Button>
      )}
    </ClubBoardContainer>
  );
};
export default PostBoard;
