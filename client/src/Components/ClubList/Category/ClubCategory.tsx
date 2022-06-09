import { Dispatch, SetStateAction } from 'react';
import { ClubCategoryContainer } from './style';

interface props {
  onClick: (category: string) => void;
  categoryList: string[];
  selectedCategory: string;
  categoryName: string;
  categoryCSS? : string;
}

const ClubCategory = (props: props) => {
  const { onClick, categoryName, categoryList, selectedCategory, categoryCSS = 'first' } = props;
  return (
    <ClubCategoryContainer>
      <section>
        {categoryList.map((category) => {
          return (
            <div
              key={category}
              onClick={() => onClick(category)}
              className={selectedCategory === category ? `${categoryCSS} selected` : categoryCSS}
            >
              <span>{category}</span>
            </div>
          );
        })}
      </section>
    </ClubCategoryContainer>
  );
};
export default ClubCategory;
