import { Dispatch, SetStateAction, ReactElement } from 'react';
import { AdminNavigationContainer } from './style';

interface Props {
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
}
function AdminNavigation(props: Props): ReactElement {
  const { idx, setIdx } = props;
  return (
    <AdminNavigationContainer>
      <span onClick={() => setIdx(0)} className={idx === 0 ? 'selected' : ''}>
        기본 설정
      </span>
      <span onClick={() => setIdx(1)} className={idx === 1 ? 'selected' : ''}>
        신청 및 반려 설정
      </span>
      <span onClick={() => setIdx(2)} className={idx === 2 ? 'selected' : ''}>
        회원 관리
      </span>
      <span onClick={() => setIdx(3)} className={idx === 3 ? 'selected' : ''}>
        신청 양식
      </span>
    </AdminNavigationContainer>
  );
}
export default AdminNavigation;
