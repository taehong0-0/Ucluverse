import React, { ReactElement, useRef } from 'react';
import { SearchBarDiv } from './style';

const SearchBar = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <SearchBarDiv>
      <input placeholder="궁금한 공간을 입력해주세요" ref={inputRef}></input>
      <button>submit</button>
    </SearchBarDiv>
  );
};
export default SearchBar;
