// Title
const title = 'EDUCATION';

// Contents
const edus = [
  {
    "course": "석사 과정",
    "where": "아주대학교 라이프미디어 협동과정",
    "href": "http://www.ajou.ac.kr/dt/index.jsp",
    "period": "2019-재학 중",
    "story":
      `데이터 시각화에 대한 더 심도 깊은 연구를 하기 위해 대학원에 진학했습니다.
      웹 기반 데이터 분석 시스템, 머신러닝 모델의 성능 평가, 네트워크 시각화를 연구합니다.`
  },
  {
    "course": "학사",
    "where": "아주대학교 미디어학과",
    "href": "https://media.ajou.ac.kr/media/index.jsp",
    "period": "2019-2019",
    "story":
      `미디어 콘텐츠 기획자이자 개발자로 성장하기 위한 시간이었습니다.
      프로젝트를 중심으로 진행되었던 학교 생활 덕분에 다양한 지식과 기술을 익힐 수 있었습니다.
      웹 프론트엔드 개발을 위하여 프로그래밍을 공부했고, 인터페이스 디자인을 수월하게 하기 위해 다양한 어도비 디자인 툴을 익혔습니다.
      더 좋은 콘텐츠를 만들기 위하여 UX 디자인과 디지털 미디어 심리학을 공부했습니다.
      `
  },
];
const list_item = edus.map((edu, i) => (
  <li key={"education" + i}>
    <strong>{edu['course']}</strong>
    <a href={edu['href']}>{edu['where']}</a>
    <div className='left'>{edu['period']}</div>
    <p>{edu['story']}</p>
  </li>
));
const content = getListContent(list_item);

// Get JSX
const element = getSectionJSX({ title, content });

// Render
ReactDOM.render(
  element,
  document.getElementById('education')
);
