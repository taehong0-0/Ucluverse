import { useEffect, useState } from 'react';
import ClubCategory from '../Category/ClubCategory';
import ClubList from '../ClubList/ClubList';
import { ClubBodyContainer } from './style';
import { ClubType } from '../../../Types/ClubType';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { ClubListState } from '../../../Recoil/Club';
import YukeyHello from '../../../Assets/Lottie/YukeyHello.json';
import { useLottie } from '../../../Hooks';
import { useScrollFadeIn } from '../../../Hooks';
import { Wave } from '../../Animation';

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
  const lottieYuKey = useLottie(YukeyHello, true, 20, 20);
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn('up', 1, 0.15, 0);
  const animation3 = useScrollFadeIn('up', 1, 0.25, 0);

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
      <section className="top">
        <div className='topBG' />
        <Wave/>
      </section>
      <section className="title" {...animation}>
        <span>아주대학교 동아리를 모아봤어요!</span>
        <article {...animation2}>
          <div id="lottieYukey" {...lottieYuKey} />
        </article>
      </section>
      <section className="content" {...animation3} >
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
      </section>
      <section className="bottom">
        <Wave rotation={180}/>
        <div className='bottomBG' />
      </section>
    </ClubBodyContainer>
  );
};
export default ClubBody;
