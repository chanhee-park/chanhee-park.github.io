const Data = {
  experiences: [
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
      "href": "https://www.thethelab.io/",
      "period": "2017.04 - 2019.02",
      "story": `
      더더랩은 소프트웨어를 개발하고 공급하는 회사입니다.
      저는 이 회사에서 웹 프론트엔드 개발자로서 역량을 갈고 닦았습니다.
      2017년 봄, 학교의 소개로 멤버십 프로그램을 시작했습니다. 멤버십 프로그램이 종료된 이후에도 인턴으로 근무했습니다.
      더더랩에서 근무하는 동안 TypeScript, Vue, Firebase 등 다양한 웹 개발 기술 스택을 쌓았습니다.
      참여한 프로젝트에서는 주로 웹 프론트엔드와 데이터 시각화 개발을 맡았습니다.
      `
    },
  ],
  researches: [
    {
      id: 'visml',
      title: 'A Visualization System for Performance Analysis of Image Classification Models',
      authors: ['Chanhee Park', 'Hyojin Kim', 'Kyungwon Lee'],
      conf_title: 'IS&T International Symposium on Electronic Imaging',
      conf_short: "EI'20",
      short_conf: 'ei',
      year: '2020',
      thumb: 'research/2020-ei-visml-thumb.png',
      code: 'https://github.com/chanhee-park/VisMlic',
      site: 'https://chanhee-park.github.io/VisMlic/',
      video: true,
      pdf: true,
    },
    {
      id: 'color',
      title: 'A Study of Colormaps in Network Visualization',
      authors: ['Raja Mubashar Karim', 'Oh-Hyun Kwon', 'Chanhee Park', 'Kyungwon Lee'],
      conf_title: 'MDPI Applied Sciences',
      short_conf: 'mdpi',
      conf_short: 'Appl. Sci. 2019, 9(20)',
      year: '2019',
      pdf: true,
    },
    {
      id: 'summ',
      title: 'A Narrative Topic Map Visualization to Summarize and Recall a Meeting',
      authors: ['Suhyun Lim', 'Chanhee Park', 'Hyunwoo Han', 'Jaejong Ho', 'Junyup Hong', 'Soojung Lee', 'Kyunwon Lee'],
      conf_title: 'IEEE Visualization Conference',
      conf_short: "InfoVis'19",
      short_conf: 'vis',
      year: '2019',
      thumb: true,
      pdf: true,
      poster: true,
      video: true, // ToDO: Add it
    },
    {
      id: 'gitvis',
      title: 'GitViz: An Interactive Visualization System for Analyzing Development Trends in the Open- Source Software Community',
      authors: ['Chanhee Park', 'Sungjun Do', 'Eunjeong Lee', 'Hanna Jang', 'Sungchan Jeong', 'Hyunwoo Han', 'Kyungwon Lee'],
      conf_title: 'IEEE Pacific Visualization Symposium',
      conf_short: "PacificVis'19",
      short_conf: 'pvis',
      year: '2019',
      thumb: true,
      pdf: true,
      video: true, // ToDo: Update it
    },
    {
      id: 'visml',
      title: 'ComDia+: An Interactive Visual Analytics System for Comparing, Diagnosing, and Improving Multiclass Classifiers',
      authors: ['Chanhee Park', 'Jina Lee', 'Hyunwoo Han', 'Kyungwon Lee'],
      conf_title: 'IEEE Pacific Visualization Symposium',
      short_conf: 'pvis',
      conf_short: "PacificVis'19",
      year: '2019',
      pdf: true,
    },
    {
      id: 'congress',
      title: 'A visual analysis of power relations among people on time-series data using network visualization',
      authors: ['Gyeongcheol Choi', 'Taerin Yoon', 'Chanhee Park', 'Sarah Lee', 'Hogwon Choi', 'Jieun Kang', 'Chulwoong Park', 'Seongmin Mun', 'Kyungwon Lee'],
      conf_title: 'ocial Science History Association',
      conf_short: "SSHA'18",
      short_conf: 'ssha',
      year: '2018',
      thumb: true,
      pdf: true,
    },
    {
      id: 'gitvis',
      title: 'An Interactive Visualization To Help You Gain Knowledge from Authoritative Developers',
      authors: ['Chanhee Park', 'Sungjun Do', 'Eunjeong Lee', 'Hanna Jang', 'Sungchan Jeong', 'Hyunwoo Han', 'Kyungwon Lee'],
      conf_title: 'IEEE Visualization Conference',
      conf_short: "InfoVis'18",
      short_conf: 'vis',
      year: '2018',
      pdf: true,
      poster: true,
    }
  ],
  educations: [
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
  ],
}