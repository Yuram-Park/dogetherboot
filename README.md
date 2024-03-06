# dogetherboot
- 애견 동반 활동 장소 추천
- SpringBoot + React
<br>

---
<br>

## 프로젝트 목표
- 반려인구의 증가와 정보 굥유의 중요성 증가에 따라 반려동물 동반 가능 장소 정보 제공
- Spring Boot를 활용한 프로젝트 MVC 구조 구성 및 기본 게시판 CRUD 구현
- React를 활용한 프론트 구현 및 백 연동

## 개발 환경 & 사용 기술
- 언어/개발 툴 <br>
<img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;
<img src="https://img.shields.io/badge/springboot-6DB33F?style=flat-square&logo=springboot&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;
<img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;
<img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;

- 데이터베이스 <br>
<img src="https://img.shields.io/badge/mariadb-003545?style=flat-square&logo=mariadb&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;

- 클라우드 <br>
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=flat-square&logo=amazonaws&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/></a>&nbsp;


## 팀원 구성
- 권민혁: 크롤링 적용 방법 연구
- 김진광: Back-End(Spring Security / 회원가입 / 로그인 / 로그아웃 / 내 정보 조회 / 내 정보 수정 / 관리자 페이지 / 권한 부여 / 소셜 로그인 - OAuth2, 구글, 네이버, 카카오)
- 남다은: Front-End(메인페이지 / 장소 리스트 / 장소 상세 / 게시판 리스트 / 게시판 상세 / 게시판 등록&수정 / 활동 내역 / 관심장소, 관심글 / 이미지 업로드 기능 / React Component - 네비게이션 바, 각종 캐러셀, 사이드바, 페이지네이션)
- 박유람: Back-End(게시판 CRUD / 댓글 CRUD / 게시판 이미지 업로드 기능 / 조회수 기능 / 검색 기능 / 게시판 텍스트 에디터 적용 / Servlet -> SpringBoot 변환), Front-End(Axios 프론트-백 연동)
- 심성우: Front-End(회원가입 / 비밀번호 변경 / 내 정보 조회 / 게시판 목록, 상세 / 로그인)
- 조민혁: Back-End(장소추천 목록-필터링 기능 & 상세-리뷰, 별점 기능 / 관심장소&글 등록, 모아보기 기능 / 활동내역 / 내 정보 조회 및 회원탈퇴 / JWT 로그인, 로그아웃, 세션유지


## 개발 일정
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/e31cad4b-9181-4e4c-a1d2-4dd34c4a8cb8)

## ERD 구성
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/d4341c6f-22b8-486b-bcdf-1186943988b9)

## 페이지 구성
1. 메인 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/2931383d-1691-4263-80b7-457dfce88345)

2. 회원가입 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/1cd8ebdd-a823-44a5-a9e5-4f1393804787)

3. 로그인 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/58edc1ae-9a90-4db3-970d-b92730bed021)

4. 내 정보 확인 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/4714d5dc-cd8e-4a30-8b10-187611f6a44f)

5. 내 관심 장소 모아보기 / 내 활동 내역 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/f3ae2d56-a3c8-42f1-ac27-99a18c80220e)

6. 장소 추천 - 목록 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/c6027ec4-7a18-46e8-b8d2-fd5d951de9bc)

7. 장소 추천 - 상세 페이지_1
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/a30c5214-661c-4ef5-8312-011c5cad8705)

8. 장소 추천 - 상세 페이지_2
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/25a537a4-e94f-4c4e-a91c-f7b0b708ac5b)

9. 커뮤니티 - 공지사항 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/8015a81a-5e81-4ecf-b74e-e11df75812ca)
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/7cb4a5d8-6b79-43d3-8637-3da6789e8a16)

10. 커뮤니티 - 후기 게시판 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/ea21b7f9-9f11-4cab-998e-b3ec02132bc9)
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/d8bfe85a-621a-4ec8-a543-80275fcd5a7a)

12. 커뮤니티 - 뉴스 / 칼럼 게시판 페이지
![image](https://github.com/Yuram-Park/dogetherboot/assets/141884897/0cf03c84-ec89-43fa-bb63-d13e01854bea)




