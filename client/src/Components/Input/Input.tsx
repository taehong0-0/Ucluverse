import React, { LegacyRef, ReactElement, useState } from 'react';
import { InputContainer } from './style';

interface IProps {
  inputRef: LegacyRef<HTMLInputElement> | undefined;
  name: string;
  type: string;
  detail?: string;
}
function FloatInput(props: IProps): ReactElement {
  const { inputRef, name, type, detail } = props;
  const [isActive, setActive] = useState<boolean>(false);
  const handleChange = (text: string) => {
    setActive(text !== '');
  };
  return (
    <InputContainer type={type}>
      <input ref={inputRef} onChange={(e) => handleChange(e.target.value)} />
      <label className={isActive ? 'active' : ''}>{name}</label>
      <span className={isActive ? 'active' : ''}>{detail}</span>
    </InputContainer>
  );
}
export default FloatInput;
