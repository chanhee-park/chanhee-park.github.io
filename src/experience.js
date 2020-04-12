// Title
const title = 'EXPERIENCE';

// Contents
const exps = [
  {
    "where": "UC Davis VIDI Labs",
    "status": "Visiting Researcher",
    "href": "https://vidi.cs.ucdavis.edu/",
    "period": "2020.03 - 현재",
    "story": `
      VIDI Labs 는 캘리포니아 주립대학 데이비스 캠퍼스 컴퓨터공학과의 데이터 시각화 연구실입니다.
      데이터 시각화 분야의 권위있는 연구자이신 Kwan-Liu Ma 교수님의 지도 아래서 
      머신러닝 모델의 성능 평가 연구와 대용량 네트워크 비교를 위한 시각화 연구를 수행하고 있습니다.
      이곳에서 연구하는 동안 연구의 가치를 판단하는 안목과 영어 실력을 향상시켜 글로벌 인재가 되고자 합니다.
      `
  },
  {
    "where": "(주) 더더랩",
    "status": "Software Membership & Intern",
    "href": "",
    "period": "2017.04 - 2019.02",
    "story": `
      더더랩은 소프트웨어를 개발하고 공급하는 회사입니다.
      저는 이 회사에서 웹 프론트엔드 개발자로서 역량을 갈고 닦았습니다.
      2017년 봄, 학교의 소개로 멤버십 프로그램을 시작했습니다. 멤버십 프로그램이 종료된 이후에도 인턴으로 근무했습니다.
      더더랩에서 근무하는 동안 TypeScript, Vue, Firebase 등 다양한 웹 개발 기술 스택을 쌓았습니다.
      참여한 프로젝트에서는 주로 웹 프론트엔드와 데이터 시각화 개발을 맡았습니다.
      `
  },
];
const list_item = exps.map((exp, i) => (
  <li key={"experience" + i}>
    {
      (exp['href'].length > 0) ?
        (<a href={exp['href']}>{exp['where']}</a>) :
        (<strong>{exp['where']}</strong>)
    }
    {exp['status']}
    <div className='left'>{exp['period']}</div>
    <p>{exp['story']}</p>
  </li>
));
const content = getListContent(list_item);

// Get JSX
const element = getSectionJSX({ title, content });

// Render
ReactDOM.render(
  element,
  document.getElementById('experience')
);
