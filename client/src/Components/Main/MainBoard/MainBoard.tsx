import React, { ReactElement, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MainBoardDiv } from './style';
interface props {
  imgURL: string;
  posts: post[];
}
interface post {
  title: string;
  id: number;
}
const MainBoard = (props: props): ReactElement => {
  const { imgURL, posts } = props;
  return (
    <MainBoardDiv>
      <img src={imgURL} />
      <div>
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`}>
            <span>{post.title}</span>
          </Link>
        ))}
      </div>
    </MainBoardDiv>
  );
};
export default MainBoard;
