import React, { LegacyRef, ReactElement, useState } from 'react';
import { InputContainer } from './style';
interface props {
  inputRef: LegacyRef<HTMLInputElement> | undefined;
  name: string;
  type: string;
}
const FloatInput = (props: props): ReactElement => {
  const { inputRef, name, type } = props;
  const [isActive, setActive] = useState<boolean>(false);
  const handleChange = (text: string) => {
    setActive(text !== '');
  };
  return (
    <InputContainer type={type}>
      <input
        ref={inputRef}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <label className={isActive ? 'active' : ''}>{name}</label>
    </InputContainer>
  );
};
export default FloatInput;
