import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostTitleType } from '../../../../Types/PostType';
import Button from '../../../Button/Button';
import PostTitle from '../../Post/Title/PostTitle';
import { ClubBoardContainer } from './style';

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
      axios.get(`${process.env.REACT_APP_SERVER_URL}/postings/club/entire/${clubId}`).then((res) => {
        setPostList(res.data.res.postings.sort(sortFunc) ?? []);
      });
    } else {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/postings/clubBoard/${boardIdx}`).then((res) => {
        setPostList(res.data.res.postings);
      });
    }
  }, [boardName]);
  const sortFunc = (a: PostTitleType, b: PostTitleType) => {
    if (a.type === '공지사항' && b.type === '공지사항') {
      return 0;
    } else if (a.type === '공지사항') {
      return -1;
    } else {
      return 1;
    }
  };
  return (
    <ClubBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>{boardName}</span>
        </div>
        {postList.map((post) => (
          <PostTitle
            key={post.createdAt}
            title={post.title}
            author={post.author}
            date={post.createdAt}
            type={post.type}
            postId={post.postingIdx}
            clubId={clubId}
          ></PostTitle>
        ))}
      </div>
      {boardName !== '전체 게시판' && (
        <Button
          name="글작성"
          clickEvent={() => {
            window.history.pushState({ boardIdx, boardName }, '', `/club/${clubId}/posting`);
            window.location.href = `/club/${clubId}/posting`;
          }}
        ></Button>
      )}
    </ClubBoardContainer>
  );
};
export default PostBoard;
