import React, { ReactElement, useState } from 'react';
import LinkButton from '../Button/LinkButton';
import { HeaderContainer, HeaderLinkContainer, UserInfoContainer, BackGround } from './style';
import logoImg from '../../Assets/로고2.png';
import profileImg from '../../Assets/profile.svg';
import alarmImg from '../../Assets/알림.png';
import logoutImg from '../../Assets/logout.png';
import mypageImg from '../../Assets/내정보.svg';
import { useRecoilValue } from 'recoil';
import { userState } from '../../Recoil/User';
import { theme } from '../../Recoil/Theme';
import axios from 'axios';
import { PresignedPost } from 'aws-sdk/clients/s3';

const Header = () : ReactElement => {
  const user = useRecoilValue(userState);
  const themeColor = useRecoilValue(theme);

  return (
    <HeaderContainer>
      <LinkButton url="/">
        <img src={logoImg} width="50px" height="50px" />
      </LinkButton>
      <HeaderLinkContainer color={themeColor} className={user.userIdx === 0 ? '' : 'logined'}>
        <LinkButton url="/">홈</LinkButton>
        <LinkButton url="/clubList">동아리</LinkButton>
        <LinkButton url="/clubList/department">소학회</LinkButton>
        <LinkButton url="/clubList/other">그 외 단체</LinkButton>
      </HeaderLinkContainer>

      {user.userIdx === 0 ? (
        <LinkButton url="/login">
          <img src={profileImg} width="50px" height="50px" />
        </LinkButton>
      ) : (
        <UserInfoContainer>
          <img
            src={alarmImg}
            width="18px"
            height="21px"
            onClick={() => {
              //todo : 모달창 컴포넌트 만들고 클릭 이벤트 추가
            }}
          />
          <img
            src={logoutImg}
            width="24px"
            height="21px"
            onClick={() => {
              axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/logout`).then((res) => {
                window.location.href = '/';
              });
            }}
          />
          <LinkButton url="/mypage">
            <img src={mypageImg} width="36px" height="36px" />
          </LinkButton>
        </UserInfoContainer>
      )}
    <BackGround color={themeColor} />
    </HeaderContainer>
  );
};
export default Header;
