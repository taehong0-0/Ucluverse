import React, { ChangeEvent, ChangeEventHandler, ReactElement, useRef, useState } from 'react';
import { SearchBarDiv, SearchDataContainer, SearchBarContainer } from './style';
import serchIconImg from '../../../Assets/검색아이콘.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ClubListState, DepartmentListState } from '../../../Recoil/Club';
import { ClubType } from '../../../Types/ClubType';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (): ReactElement => {
  const clubList = useRecoilValue(ClubListState);
  const departmentClubList = useRecoilValue(DepartmentListState);
  const [keyword, setKeyword] = useState<string>('');
  const [searchDataList, setSearchDataList] = useState<ClubType[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setSearchDataList(
      [...clubList, ...departmentClubList]
        .filter((club) => {
          return club.name.toString().toLowerCase().includes(e.target.value.toString().toLowerCase());
        })
        .sort(sortFunction),
    );
  };

  const sortFunction = (aClub: ClubType, bClub: ClubType) => {
    const a = aClub.name;
    const b = bClub.name;
    const len = keyword.length;
    const keywordLowerCase = keyword.toString().toLowerCase();
    if (
      a.toLowerCase().substring(0, len) === keywordLowerCase &&
      b.toLowerCase().substring(0, len) === keywordLowerCase
    ) {
      return 0;
    } else if (a.toLowerCase().substring(0, len) === keywordLowerCase) {
      return -1;
    } else {
      return b.toLowerCase().substring(0, len) === keywordLowerCase ? 1 : 0;
    }
  };

  const handleSearch = (e: MouseEvent) => {
    if (!searchRef.current?.contains(e.target as Node)) setKeyword('');
  };
  useEffect(() => {
    window.addEventListener('click', handleSearch);
    return () => window.removeEventListener('click', handleSearch);
  }, []);

  const letterEmphasis = (name: string) => {
    var pattern = new RegExp(keyword, 'i');
    const matchString = name.match(pattern);

    if (matchString && matchString.length !== 0)
      return name.replace(matchString[0], `<strong>${matchString[0]}</strong>`);

    return '';
  };

  return (
    <SearchBarDiv ref={searchRef}>
      <SearchBarContainer>
        <input placeholder="궁금한 공간을 입력해주세요" value={keyword} onChange={onChange}></input>
        <button>
          <img src={serchIconImg} />
        </button>
      </SearchBarContainer>
      {keyword !== '' && (
        <SearchDataContainer>
          {searchDataList.map((club) => (
            <Link to={`/club/${club.clubIdx}`} key={club.clubIdx}>
              <span dangerouslySetInnerHTML={{ __html: letterEmphasis(club.name) }} />
            </Link>
          ))}
        </SearchDataContainer>
      )}
    </SearchBarDiv>
  );
};
export default SearchBar;
