import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostTitleType } from '../../../../Types/PostType';
import Button from '../../../Button/Button';
import Posting from '../../Posting/Posting';
import { ActivityBoardContainer, ActivityContainer } from './style';

const posts = [
  {
    title: '제목',
    author: 'ㅁㅁ',
    type: 'ㅁㅁ',
    path: '',
    createdAt: '2022.04.11',
    postId: 3,
  },
  {
    title: '제목',
    author: 'ㅁㅁ',
    type: 'ㅁㅁ',
    path: '',
    createdAt: '2022.04.11',
    postId: 3,
  },
  {
    title: '제목',
    author: 'ㅁㅁ',
    type: 'ㅁㅁ',
    path: '',
    createdAt: '2022.04.11',
    postId: 3,
  },
  {
    title: '제목',
    author: 'ㅁㅁ',
    type: 'ㅁㅁ',
    path: '',
    createdAt: '2022.04.11',
    postId: 3,
  },
  {
    title: '제목',
    author: 'ㅁㅁ',
    type: 'ㅁㅁ',
    path: '',
    createdAt: '2022.04.11',
    postId: 3,
  },
];
interface Props {
  boardIdx: number;
  clubId: number;
}
const ActivityBoard = (props: Props) => {
  const { boardIdx, clubId } = props;
  const [activityPosts, setActivityPosts] = useState<PostTitleType[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/awards/${boardIdx}`)
      .then((res) => {
        console.log(res.data);
        // setAwardPosts(res.data.res)
      });
  }, []);
  return (
    <ActivityBoardContainer>
      <div>
        {posts.map((post) => (
          <ActivityContainer>
            <img src={post.path} />
            <div>
              <span>{post.title}</span>
              <span>{post.createdAt}</span>
            </div>
          </ActivityContainer>
        ))}
      </div>
      <Link to={`/club/${clubId}/posting`}>
        <Button name="글작성" clickEvent={() => {}}></Button>
      </Link>
    </ActivityBoardContainer>
  );
};
export default ActivityBoard;
