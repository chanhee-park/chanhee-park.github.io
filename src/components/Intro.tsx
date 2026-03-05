const about = [
  `웹 프론트엔드 개발자 박찬희입니다.
  데이터 분석, 조회, 관리를 위한 웹 기반 데이터 프로덕트 분야에 강점이 있습니다.
  데이터를 기반으로한 의사결정이 서비스를 성장시킨다고 생각합니다.
  다양한 직군의 사람들이 데이터를 자유롭게 가지고 놀 수 있도록 돕는데 관심이 많습니다.`,
  `데이터에서 아이디어를 발견하도록 만드는 일에 보람을 느낍니다.
  효과적인 데이터 분석 시스템을 만들기 위해 웹 프론트엔드와 데이터 과학 분야를 공부하고 있습니다.`,
];

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="container">
        <h1 className="name">Chan-Hee Park</h1>
        <div className="center">
          <img
            className="image--cover only-mobile center-content"
            src="assets/chanhee-profile.jpg"
            alt="Chanhee Park 프로필 사진"
          />
        </div>
        <div className="flex-outer">
          <div className="flex-9">
            <section className="about" id="about">
              {about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>
            <div className="only-mobile">
              <a
                href="mailto:chanhee13p@gmail.com"
                className="mobile-email"
                aria-label="이메일 보내기"
              >
                <i className="fas fa-envelope fa-fw" />
                <span>chanhee13p@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex-3 no-mobile">
            <div className="center">
              <img
                className="image--cover center-content"
                src="assets/chanhee-profile.jpg"
                alt="Chanhee Park 프로필 사진"
              />
            </div>
            <ul className="tags">
              <li className="tag">#Web_Front_End</li>
              <li className="tag">#Data_Analytics</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <h3 className="card_title">방문해주셔서 감사합니다!</h3>
            <div className="card_letter">
              <p>
                데이터를 참신한 아이디어로 바꿀 방법을 찾고 계신가요? 저와 함께 프로젝트를 하고
                싶은 분은 편하게 연락 주세요.
              </p>
              <p>
                <a
                  href="mailto:chanhee13p@gmail.com"
                  aria-label="이메일: chanhee13p@gmail.com"
                >
                  <i className="fas fa-envelope fa-fw" />
                  <span>chanhee13p@gmail.com</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
