import PostTitle from '../../../Post/PostTitle';
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
    </ClubBoardContainer>
  );
};
export default PostBoard;
