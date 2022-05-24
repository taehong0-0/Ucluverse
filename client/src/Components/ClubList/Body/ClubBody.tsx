import { useEffect, useState } from 'react';
import ClubCategory from '../Category/ClubCategory';
import ClubList from '../ClubList/ClubList';
import { ClubBodyContainer } from './style';
import character from '../../../Assets/Character-hello.png';
import { ClubType } from '../../../Types/ClubType';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { ClubListState } from '../../../Recoil/Club';

const categoryList = [
  '전체',
  '체육',
  '사회활동',
  '연행예술',
  '레저스포츠',
  '과학기술',
  '학술언론',
  '창작전시',
  '종교',
  '준/가동아리',
];
const ClubBody = () => {
  const [category, setCategory] = useState<string>('전체');
  // const [clubList, setClubList] = useState<ClubType[]>([]);
  const clubList = useRecoilValue(ClubListState);
  console.log(clubList);
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_SERVER_URL}/clubs/central`).then((res) => {
  //     setClubList(res.data.res.clubs);
  //   });
  // }, []);
  const clickCategory = (category: string) => {
    setCategory(category);
  };
  return (
    <ClubBodyContainer>
      <span>아주대학교 소학회를 모아봤어요!</span>
      <img width="304px" height="195px" src={character} />
      <ClubCategory
        categoryName="종류"
        onClick={clickCategory}
        categoryList={categoryList}
        selectedCategory={category}
      />
      <ClubList
        clubList={
          category === '전체' ? clubList : clubList.filter((club) => club.clubCategories.includes(category + '분과'))
        }
      />
    </ClubBodyContainer>
  );
};
export default ClubBody;
