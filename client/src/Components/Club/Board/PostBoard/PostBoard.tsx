import { Link } from 'react-router-dom';
import Button from '../../../Button/Button';
import PostTitle from '../../Post/Title/PostTitle';
import { ClubBoardContainer } from './style';

interface props {
  posts: post[];
}
interface post {
  title: string;
  author: string;
  type: string;
  date: string;
  postId: number;
}
const PostBoard = (props: props) => {
  const { posts } = props;

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
      <Link to="/club/posting">
        <Button name="글작성" clickEvent={() => {}}></Button>
      </Link>
    </ClubBoardContainer>
  );
};
export default PostBoard;
