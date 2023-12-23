import "./Profile.css";

function Profile() {
  return (
    <div id="profile">
      <img src="./image.png" alt="myimage.png" id="myimage" />
      <div id="profileDetail">
        <h1 id="name">Developer, 이다영</h1>
        <h4 id="contact"> 010 9272 8729 | verdantjuly@kakao.com</h4>
        <img src="./github.png" alt="github.png" id="github" />
        <img src="./tistory.png" alt="tistory.png" id="tistory" />
        <h3 id="quote">거꾸로 생각하는 개발자</h3>

        <p id="quoteDetail">
          서버 속도가 느리면 서버가 VM이 어떻게 실행되는지 살펴봅니다.
          <br /> 그 결과 속도를 87.45% 개선하였습니다.
          <br />
          <br /> API의 속도가 더디면 API의 정보를 받아올 때까지의 과정을
          살핍니다.
          <br /> 비동기 처리 후 속도를 98.89% 개선하였습니다.
          <br />
          <br /> 리더로서 팀을 이끌었을 때 70개의 구글 스프레드시트 겐트 차트
          항목을 통해 자세한 계획을 세우고
          <br /> 매일 아침 9시 15분 정기 회의와 자유로운 소회의를 통해 모두가
          만족하는 프로젝트를 완성하였습니다.
          <br />
          <br /> 좋은 리더쉽을 연구하면서 거꾸로 더 훌륭한 팔로워쉽을 생각하게
          되었고
          <br /> 멋진 팀원으로 성장할 준비를 마쳤습니다.
        </p>
      </div>
    </div>
  );
}
export default Profile;
