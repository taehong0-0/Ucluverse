import { Dispatch, SetStateAction } from 'react';
import { ClubCategoryContainer } from './style';

interface props {
  setCategory: Dispatch<SetStateAction<string>>;
}
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
const ClubCategory = (props: props) => {
  const { setCategory } = props;
  return (
    <ClubCategoryContainer>
      <span>종류</span>
      <div>
        {categoryList.map((category) => {
          return (
            <div onClick={() => setCategory(category)}>
              <span>{category}</span>
            </div>
          );
        })}
      </div>
    </ClubCategoryContainer>
  );
};
export default ClubCategory;
