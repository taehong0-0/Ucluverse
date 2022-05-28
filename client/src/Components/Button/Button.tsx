import { MouseEventHandler } from 'react';
import { ButtonContainer } from './style';

interface props {
  clickEvent: () => void;
  name: string;
}

const Button = (props: props) => {
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
};
export default Button;
