import { useState } from 'react';
import ClubCategory from '../ClubCategory/ClubCategory';
import ClubList from '../ClubList/ClubList';
import { ClubBodyContainer } from './style';

interface club {
  clubIdx: number;
  clubName: string;
  category: string;
  imgSrc: string;
}
const ClubBody = () => {
  const [category, setCategory] = useState<string>('전체');
  const clubList: any[] = [
    {
      clubIdx: 1,
      clubName: 'Do-iT!',
      category: '학술언론',
      imgSrc: '',
    },
    {
      clubIdx: 2,
      clubName: '유클러버스',
      category: '학술언론',
      imgSrc: '',
    },
    {
      clubIdx: 3,
      clubName: '화이팅',
      category: '체육',
      imgSrc: '',
    },
    {
      clubIdx: 4,
      clubName: '꽁',
      category: '학술언론',
      imgSrc: '',
    },
    {
      clubIdx: 5,
      clubName: '에이핀',
      category: '체육',
      imgSrc: '',
    },
    {
      clubIdx: 6,
      clubName: '에이핀',
      category: '학술언론',
      imgSrc: '',
    },
  ];
  return (
    <ClubBodyContainer>
      <ClubCategory setCategory={setCategory} />
      <ClubList category={category} clubList={clubList} />
    </ClubBodyContainer>
  );
};
export default ClubBody;
