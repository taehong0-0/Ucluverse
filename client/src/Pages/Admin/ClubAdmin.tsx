import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import AdminEnrollmentForm from '../../Components/Admin/ClubAdmin/Enrollment/EnrollmentForm';
import AdminEnrollmentList from '../../Components/Admin/ClubAdmin/Enrollment/EnrollmentList';
import AdminMain from '../../Components/Admin/ClubAdmin/Main/Main';
import AdminMember from '../../Components/Admin/ClubAdmin/Member/Member';
import AdminNavigation from '../../Components/Admin/ClubAdmin/Navigation/Navigation';
import Header from '../../Components/Header/Header';
import { ClubType } from '../../Types/ClubType';

const ClubAdmin = (): ReactElement => {
  const { id } = useParams();
  const clubId = Number(id);
  const [idx, setIdx] = useState<number>(0);
  const [club, setClub] = useState<ClubType | null>(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/clubs/club/${clubId}`)
      .then((res) => {
        setClub(res.data.res.clubs);
      });
  }, []);
  return (
    <>
      <Header />
      <AdminNavigation idx={idx} setIdx={setIdx} />
      {idx === 0 && <AdminMain club={club} clubId={clubId} />}
      {idx === 1 && <AdminEnrollmentList clubId={clubId} />}
      {idx === 2 && <AdminMember clubId={clubId} />}
      {idx === 3 && <AdminEnrollmentForm clubId={clubId} />}
    </>
  );
};
export default ClubAdmin;
