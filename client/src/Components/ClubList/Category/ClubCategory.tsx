import { ClubCategoryContainer } from './style';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (category: string) => void;
  categoryList: string[];
  selectedCategory: string;
  categoryName: string;
  categoryCSS?: string;
}

function ClubCategory(props: IProps) {
  const { onClick, categoryList, selectedCategory, categoryCSS = 'first' } = props;
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
}
export default ClubCategory;
