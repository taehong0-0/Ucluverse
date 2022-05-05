import { useState } from 'react';
import ClubCategory from '../Category/ClubCategory';
import ClubList from '../ClubList/ClubList';
import { ClubBodyContainer } from './style';
import character from '../../../Assets/Character-hello.png';

interface club {
  clubIdx: number;
  clubName: string;
  category: string;
  imgSrc: string;
}
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
const categoryList = [
  '전체',
  '체육',
  '사회활동',
  '언행예술',
  '레저스포츠',
  '과학기술',
  '학술언론',
  '창작전시',
  '종교',
  '준/가동아리',
];
const ClubBody = () => {
  const [category, setCategory] = useState<string>('전체');
  const clickCategory = (category: string) => {
    setCategory(category);
  };
  return (
    <ClubBodyContainer>
      <span>아주대학교 소학회를 모아봤어요!</span>
      <img width="304px" height="195px" src={character} />
      <ClubCategory
        onClick={clickCategory}
        setCategory={setCategory}
        categoryList={categoryList}
        selectedCategory={category}
      />
      <ClubList
        clubList={
          category === '전체'
            ? clubList
            : clubList.filter((club) => club.category === category)
        }
      />
    </ClubBodyContainer>
  );
};
export default ClubBody;
