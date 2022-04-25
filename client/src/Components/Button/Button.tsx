import { MouseEventHandler } from 'react';
import { ButtonContainer } from './style';

interface props {
  clickEvent: () => void;
  name: string;
}

const Button = (props: props) => {
  const { clickEvent, name } = props;
  return (
    <ButtonContainer onClick={() => clickEvent()}>
      <span>{name}</span>
    </ButtonContainer>
  );
};
export default Button;
