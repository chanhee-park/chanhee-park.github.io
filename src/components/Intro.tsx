const about = [
  `복잡한 데이터를 직관적인 사용자 경험으로 전환하는 웹 프론트엔드 엔지니어 박찬희입니다.
  MLOps, 데이터 시각화, 챗봇 등 데이터 중심 제품에서 사용자 요구사항을 이해하고 제품 가치를 높여왔습니다.`,
  `성능 최적화, UX 개선, 시각화 구현, 공통 기능 모듈화, 협업 프로세스 정리에 강점이 있습니다.
  AI 제품과 운영 도구가 더 빠르고 이해하기 쉬운 경험을 제공하도록 만드는 일에 관심이 많습니다.`,
];

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="container">
        <h1 className="name">박찬희 | 웹 프론트엔드 엔지니어</h1>
        <section className="about" id="about">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>
        <div className="intro-links">
          <p>
            데이터 중심 제품, 시각화, 프론트엔드 아키텍처 관련 협업에 관심이 있습니다.
          </p>
          <p>
            <a href="mailto:chanhee13p@gmail.com" aria-label="이메일: chanhee13p@gmail.com">
              <i className="fas fa-envelope fa-fw" aria-hidden="true" />
              <span>chanhee13p@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chanhee-park/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn 프로필 열기 (새 창)"
            >
              <i className="fab fa-linkedin fa-fw" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
