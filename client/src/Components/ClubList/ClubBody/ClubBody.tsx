import { useState } from 'react';
import ClubCategory from '../ClubCategory/ClubCategory';
import ClubList from '../ClubList/ClubList';
import { ClubBodyContainer } from './style';

const ClubBody = () => {
  const [category, setCategory] = useState<string>('전체');
  return (
    <ClubBodyContainer>
      <ClubCategory setCategory={setCategory} />
      <ClubList category={category} />
    </ClubBodyContainer>
  );
};
export default ClubBody;
