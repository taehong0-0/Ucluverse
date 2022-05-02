import { ClubListContainer } from './style';

interface props {
  category: string;
}
const ClubList = (props: props) => {
  const { category } = props;
  return <ClubListContainer></ClubListContainer>;
};
export default ClubList;
