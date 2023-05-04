import { ButtonContainer } from './style';

interface IProps {
  clickEvent: () => void;
  name: string;
}

function Button(props: IProps) {
  const { clickEvent, name } = props;
  return (
    <ButtonContainer
      onClick={(e) => {
        clickEvent();
        e.stopPropagation();
      }}
    >
      <h4>{name}</h4>
    </ButtonContainer>
  );
}
export default Button;
