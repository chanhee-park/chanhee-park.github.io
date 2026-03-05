import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'woowahan-2021',
    role: 'Web FE Developer',
    company: '우아한형제들, 데이터프로덕트TF',
    period: { start: '2021.08', end: 'current' },
    description: [
      `우아한형제들 웹프론트개발그룹의 데이터프로덕트TF에서 근무하고 있습니다.
      사내 업무 생산성을 높이기 위한 데이터 기반 프로덕트의 프론트엔드 개발을 담당합니다.
      마케팅플랫폼, 위험관리시스템, 인앱고객센터, 백오피스 UI 컴포넌트 라이브러리 개발 등의 프로젝트에 참여하고 있습니다.`,
    ],
    link: 'https://www.woowahan.com/',
  },
  {
    id: 'naver-clova-2020',
    role: 'Web FE Developer (Intern)',
    company: 'Naver Clova AI, NSML Team',
    period: { start: '2020.09', end: '2020.12' },
    description: [
      `네이버 클로바 AI의 NSML(Naver Smart Machine Learning)팀은 머신러닝 실무자를 돕기 위한 위한 서비스를 개발합니다.
      저는 이곳에서 웹 프론트엔드 개발, UI/UX 리서치, 데이터 분석 및 시각화 등을 담당했습니다.
      주로 TypeScript, React(+Hook), Material-UI, Adobe XD를 사용했습니다.`,
    ],
    link: 'https://clova.ai/ko',
  },
  {
    id: 'ucdavis-vidi-2020',
    role: 'Visualization Researcher (Visiting Researcher)',
    company: 'UC Davis VIDI Labs',
    period: { start: '2020.03', end: '2020.08' },
    description: [
      `캘리포니아 주립대학 데이비스 캠퍼스 컴퓨터공학과의 데이터 시각화 연구실 VIDI Labs에서 방문연구원으로 근무했습니다.
      대용량 소셜 네트워크 비교를 위한 시각화를 연구하고 개발했습니다.
      데이터 처리에는 python, 프론트엔드 개발과 시각화에는 React와 d3를 주로 활용했습니다.`,
    ],
    link: 'https://vidi.cs.ucdavis.edu/',
  },
  {
    id: 'ajou-ace-2018',
    role: 'Web FE Developer (Part-Time)',
    company: '아주대학교 미디어학과 대학특성화사업단',
    period: { start: '2018.03', end: '2019.08' },
    description: [
      `학생들의 진로 및 학습 설계를 보조하는 웹 서비스인 미디어 인더스트리 링크의 개발을 맡았습니다.
      HTML, CSS, JS, SQL 등을 사용하여, 강의 목록 탐색 페이지와 선후배 질문 답변 게시판 등을 개발했습니다.
      개발 외에도 서비스 기획, 운영, 보고서 작성 등을 담당했습니다.
      (주당 10 ~ 15시간 내외로 근무했습니다.)`,
    ],
    link: 'https://ace.ajou.ac.kr/ace/',
  },
  {
    id: 'thethelab-2017',
    role: 'Web FE Developer (Membership & Freelancer)',
    company: '(주) 더더랩',
    period: { start: '2017.05', end: '2019.09' },
    description: [
      `더더랩은 소프트웨어 외주 개발 업체입니다. 학교의 현장실습 프로그램으로 파견되어 연을 맺었습니다.
      파견 기간 종료 후에도 2년여간 프로젝트 단위로 함께했습니다.
      웹 프론트엔드 개발 및 데이터 시각화를 위해  JS, TS, Vue, d3, Firebase, Redis 등을 사용했습니다.
      (프로젝트 단위로 3~6개월씩 탄력적으로 근무했습니다.)`,
    ],
  },
];
