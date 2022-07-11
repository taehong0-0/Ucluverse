<center>
  <img src="https://user-images.githubusercontent.com/79848632/170935278-ffe7545b-1165-4a4b-a78a-8da3ec0c4533.png" />
</center>

<h1 align="center">
  Ucluverse  
</h1>

<h4 align="center">
  아주대학교 파란학기 2022-1학기에 참여한 '유클러버스' 프로젝트입니다.<br/>
</h4>
<p align="center">
  비대면 소학회 및 동아리 간접경험과 홍보/신청이란 도전과제를 수행하였습니다.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/nest-ff69b4?style=for-the-badge&logo=nestjs"/>
  <img src="https://img.shields.io/badge/MySQL-yellow?style=for-the-badge&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/MariaDB-brown?style=for-the-badge&logo=mariadb"/>
<img src="https://img.shields.io/badge/TypeORM-red?style=for-the-badge"/>
  <br/>
  <img src="https://img.shields.io/github/contributors/taehong0-0/Ucluverse?style=for-the-badge"/>
  <img src="https://img.shields.io/github/last-commit/taehong0-0/ucluverse?style=for-the-badge"/>
</p>

<p align="center">
  <a href="#introduce">Introduce</a> •
  <a href="#develop-rule">Develop Rule</a> •
  <a href="#design">Design</a> •
  <a href="#activity">Activity</a>
</p>

![유클러버스](https://user-images.githubusercontent.com/79848632/170947334-b1775e60-750f-49e0-8a9d-cb5c24efe2a3.gif)

## Introduce
### 유클러버스
+ University + Club + Metaverse의 합성어로, **아주대학교** 만의 **동아리 메타버스 플랫폼**을 만들고자 하는 의미입니다.
### 목표
+ 팬데믹으로 인한 비대면의 불편함 해소
+ 원활한 동아리 활동관리와 홍보, 소통
+ 지속 가능한 웹 서비스 출시

### 
## Develop Rule
+ [개발 규칙](https://flicker-particle-a8a.notion.site/8254653bfb3747048b741e5790af46ce)은 [Notion](https://www.notion.so/)을 통해 공유하였습니다.

### ERD
![image](https://user-images.githubusercontent.com/79848632/178212707-4becbc9b-75c7-46a5-a1c6-e80228d41683.png)
### 개발 규칙
<details>
<summary>내용</summary>
<div markdown="1">

# Git

## 브랜치 규칙

- main : 배포할 브랜치
- dev: 개발 진행 브랜치
- feat : 각 기능별 브랜치
- bugfix: 버그 수정 브랜치
- refactor : 리팩토링 브랜치

ex) Feat/{이슈 번호} → Feat/#1200

## 이슈 규칙

ex)

제목 : Feat : 헤더 생성

내용 : - [ ] 아이콘 생성

## 커밋 규칙

ex) Feat : 헤더 마이메뉴 추가

## 네이밍 규칙

# **[ constant : SNAKE_CASE (with Capital Letter) ]**

export const SUCCESS_MESSAGE = '성공!' ✅

export const successMessage ='성공!' ❌

# **[ variable : camelCase ]**

const inputVariable ✅

const InputVariable ❌

# **[ function : camelCase ]**

const handleClick = () => {} ✅

const handle_click = () => {} ❌

# **[ component : PascalCase ]**

const FunctionalComponent = ({...props}) => {} ✅

const functionalComponent = ({...props}) => {} ❌

</div>
</details>

### 폴더 구조
```bash
- src
  |-- Assets
  |-- hooks
  |-- constants
  |-- components
  |     |-- Header
  |           |-- ClubHeader.tsx
  |           |-- style.ts
  |-- recoil
  |-- Types
  |-- Util
  |-- libs
  |-- styles
  |     |-- Global.ts
  |     |-- theme.ts
  |-- pages
        |
        |- Club
              |
              |-- Club.tsx
              |-- style.ts

```

## Design
### 스타일 가이드
+ <a href="https://www.notion.so/">Notion</a>을 이용하여 디자인에 관한 <a href="https://flicker-particle-a8a.notion.site/54c1bbc0088849e794f3f9a80b6c9e28?v=115f2c94ea984b949242bbd2000f6f06">전반적인 규칙</a>을 정하고 공유하였습니다.

### 홈페이지 시안
+ <a href="https://www.adobe.com/">Adobe XD</a>를 이용하여 홈페이지 <a href="https://xd.adobe.com/view/9a0204b4-c788-42de-a6ef-475abbace06c-cf51/">디자인 시안</a>을 작업했습니다.
+ Figma, Sketch 등 다른 시안 툴보다는 Adobe 호환성을 우선적으로 고려하였습니다.

### 모션그래픽/애니메이션
+ <a href="https://www.adobe.com/">Adobe After Effects</a>를 이용하여 영상 및 홈페이지에 들어가는 모션을 디자인하였습니다.
+ 특히, 홈페이지에 적용시킬 땐 <a href="https://airbnb.io/lottie/#/">Lottie</a>를 활용하였습니다.

## Activity
### 소셜 미디어 활동
+ <a href="https://www.instagram.com/ucluverse/">인스타그램 계정</a>을 활성화하여 아주대학교 동아리 플랫폼 홍보를 집중하였습니다.

### 홍보 포스터 제작
+ 홈페이지 홍보를 위한 **포스터를 제작**하였습니다.

### 굿즈 제작
+ **'유클러버스' 브랜딩 마케팅** 을 위해 **캐릭터 및 굿즈**를 제작하였습니다.
