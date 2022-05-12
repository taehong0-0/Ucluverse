import character from '../../../Assets/Character-hello.png';
import { useState } from 'react';
import ClubCategory from '../Category/ClubCategory';
import ClubList from '../ClubList/ClubList';
import { ClubBodyContainer } from './style';
import { ClubType } from '../../../Types/ClubType';

interface departmentCategoryType {
  [index: string]: string[];
  공과대학: string[];
  정보통신대학: string[];
  소프트웨어융합대학: string[];
  자연과학대학: string[];
  경영대학: string[];
  인문대학: string[];
  사회과학대학: string[];
  간호대학: string[];
  약학대학: string[];
}
const collegeCategoryList = [
  '정보통신대학',
  '소프트웨어융합대학',
  '자연과학대학',
  '경영대학',
  '인문대학',
  '사회과학대학',
  '간호대학',
  '약학대학',
  '공과대학',
];
const departmentCategoryList: departmentCategoryType = {
  공과대학: [
    '기계공학과',
    '산업공학과',
    '화학공학과',
    '신소재공학과',
    '응용화학생명공학과',
    '환경안전공학과',
    '건설시스템공학과',
    '교통시스템공학과',
    '건축학과',
    '융합시스템공학과',
  ],
  정보통신대학: ['전자공학과'],
  소프트웨어융합대학: [
    '미디어학과',
    '소프트웨어학과',
    '국방디지털융합학과',
    '사이버보안학과',
    '인공지능융합학과',
  ],
  자연과학대학: ['수학과', '화학과', '물리학과', '생명과학과'],
  경영대학: ['경영학과', '금융공학과', 'e-비지니스학과', '글로벌경영학과'],
  인문대학: [
    '국어국문학과',
    '사학과',
    '영어영문학과',
    '문화콘텐츠학과',
    '불어불문학과',
  ],
  사회과학대학: [
    '경제학과',
    '사회학과',
    '행정학과',
    '정치외교학과',
    '심리학과',
    '스포츠레저학과',
  ],
  간호대학: ['간호학과'],
  약학대학: ['약학과'],
};
const clubList: any[] = [
  {
    clubIdx: 1,
    clubName: 'Do-iT!',
    category: '학술언론',
    imgSrc: '',
    college: '소프트웨어융합대학',
    department: '소프트웨어학과',
  },
  {
    clubIdx: 2,
    clubName: '유클러버스',
    category: '학술언론',
    imgSrc: '',
    college: '사회과학대학',
    department: '정치외교학과',
  },
  {
    clubIdx: 3,
    clubName: '화이팅',
    category: '체육',
    imgSrc: '',
    college: '소프트웨어융합대학',
    department: '소프트웨어학과',
  },
  {
    clubIdx: 4,
    clubName: '꽁',
    category: '학술언론',
    imgSrc: '',
    college: '사회과학대학',
    department: '스포츠레저학과',
  },
  {
    clubIdx: 5,
    clubName: '에이핀',
    category: '체육',
    imgSrc: '',
    college: '경영대학',
    department: '경영학과',
  },
  {
    clubIdx: 6,
    clubName: '에이핀',
    category: '학술언론',
    imgSrc: '',
    college: '경영대학',
    department: 'e-비지니스학과',
  },
];
const DepartmentBody = () => {
  const [collegeCategory, setCollegeCategory] = useState<string>('');
  const [departmentCategory, setDepartmentCategory] = useState<string>('');

  const clickCollegeCategory = (category: string) => {
    if (collegeCategory === category) {
      setCollegeCategory('');
      setDepartmentCategory('');
    } else {
      setCollegeCategory(category);
    }
  };
  const clickDepartmentCategory = (category: string) => {
    if (departmentCategory === category) {
      setDepartmentCategory('');
    } else {
      setDepartmentCategory(category);
    }
  };
  return (
    <ClubBodyContainer>
      <span>아주대학교 소학회를 모아봤어요!</span>
      <img width="304px" height="195px" src={character} />
      <ClubCategory
        categoryName="단과"
        onClick={clickCollegeCategory}
        selectedCategory={collegeCategory}
        categoryList={collegeCategoryList}
      />
      {collegeCategory !== '' && (
        <ClubCategory
          categoryName="학과"
          onClick={clickDepartmentCategory}
          selectedCategory={departmentCategory}
          categoryList={departmentCategoryList[collegeCategory]}
        />
      )}
      {collegeCategory !== '' && departmentCategory !== '' && (
        <ClubList
          clubList={clubList.filter(
            (club) => club.department === departmentCategory,
          )}
        />
      )}
    </ClubBodyContainer>
  );
};
export default DepartmentBody;
