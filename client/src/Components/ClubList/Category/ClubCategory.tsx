import { Dispatch, SetStateAction } from 'react';
import { ClubCategoryContainer } from './style';

interface props {
  onClick: (category: string) => void;
  categoryList: string[];
  selectedCategory: string;
}

const ClubCategory = (props: props) => {
  const { onClick, categoryList, selectedCategory } = props;
  return (
    <ClubCategoryContainer>
      <span>종류</span>
      <div>
        {categoryList.map((category) => {
          return (
            <div
              onClick={() => onClick(category)}
              className={selectedCategory === category ? 'selected' : ''}
            >
              <span>{category}</span>
            </div>
          );
        })}
      </div>
    </ClubCategoryContainer>
  );
};
export default ClubCategory;
