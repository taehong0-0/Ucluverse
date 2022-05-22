import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { TitleContainer } from './style';
interface props {
  title: string;
  author: string;
  date: string;
  type: string;
  postId: number;
  clubId: number;
}
const PostTitle = (props: props): ReactElement => {
  const { title, author, date, type, postId, clubId } = props;
  return (
    <TitleContainer>
      <div className={type === '공지사항' ? 'notice' : 'post'}>
        {type === '공지사항' ? <span>공지</span> : <span>·</span>}
        <Link to={`/club/${clubId}/post?postId=${postId}`}>
          <span>{title}</span>
        </Link>
        <span>{author}</span>
        <span>{date.slice(0, 10)}</span>
      </div>
    </TitleContainer>
  );
};
export default PostTitle;
