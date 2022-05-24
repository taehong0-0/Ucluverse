import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../../Recoil/User';
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
  const user = useRecoilValue(userState);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/postings/clubBoard/${boardIdx}`).then((res) => {
      setActivityPosts(res.data.res.postings);
    });
  }, []);
  return (
    <ActivityBoardContainer>
      <div>
        <div className="navigator">
          <span>Home</span>
          <span>{'>'}</span>
          <span>활동 게시판</span>
        </div>
        <div className="activity-list">
          {activityPosts.map((post) => (
            <ActivityContainer key={post.createdAt}>
              <Link to={`/club/${clubId}/post?postId=${post.postingIdx}`}>
                <img src={post.path ?? ''} />
                <div>
                  <span>{post.title}</span>
                  <span>{post.createdAt.slice(0, 10)}</span>
                </div>
              </Link>
            </ActivityContainer>
          ))}
        </div>
      </div>
      <Button
        name="글작성"
        clickEvent={() => {
          window.history.pushState({ boardIdx, boardName: '활동 게시판' }, '', `/club/${clubId}/posting`);
          window.location.href = `/club/${clubId}/posting`;
        }}
      ></Button>
    </ActivityBoardContainer>
  );
};
export default ActivityBoard;
