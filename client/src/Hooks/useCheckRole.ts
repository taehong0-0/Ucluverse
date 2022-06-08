import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/User';

const useCheckRole = (clubId: number) => {
  const user = useRecoilValue(userState);
  const [role, setRole] = useState<number>(0); //0 : 회원아님 / 1 : 회원 / 2 : 임원진

  useEffect(() => {
    if (user.BODList?.includes(clubId)) setRole(2);
    else {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/user/userClub/isSignedUp/${user.userIdx}/${clubId}`)
        .then((res) => {
          setRole(res.data.res.isSignedUp ? 1 : 0);
        });
    }
  }, [clubId]);
  return role;
};
export default useCheckRole;
