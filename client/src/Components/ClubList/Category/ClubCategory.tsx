import { Dispatch, SetStateAction } from 'react';
import { ClubCategoryContainer } from './style';

interface props {
  onClick: (category: string) => void;
  categoryList: string[];
  selectedCategory: string;
  categoryName: string;
}

const ClubCategory = (props: props) => {
  const { onClick, categoryName, categoryList, selectedCategory } = props;
  return (
    <ClubCategoryContainer>
      <span>{categoryName}</span>
      <div>
        {categoryList.map((category) => {
          return (
            <div
              key={category}
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
