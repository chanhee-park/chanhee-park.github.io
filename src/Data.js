const Data = {
  introCard: {
    title: '방문해주셔서 감사합니다!',
    paragraphs: [
      `복잡한 데이터를 참신한 아이디어로 바꿀 방법을 찾고 계신가요? 
      저와 함께 프로젝트를 하고 싶은 분은 편하게 연락 주세요.
      `,
      (
        < a href="mailto: chanhee13p@gmail.com" >
          <i className="fas fa-envelope fa-fw" />
          <span> chanhee13p@gmail.com</span>
        </a >
      )
    ]
  },
  about: [
    `제 목표는 복잡한 데이터를 이해하는 장벽을 낮추는 것입니다. 
  특히 제 연구 비전은 '시각화를 통한 머신러닝 모델 해석과 개선'에 있습니다. 
  머신러닝 모델은 높은 성능에도 불구하고 해석과 디버깅이 어렵다는 이유로 활용에 어렵곤 합니다. 
  머신러닝 모델의 행동 패턴을 이해하는 것은 인공지능 모델을 개선하고 활용하는데 위해 필수적입니다. 
  머신러닝 모델의 이해하기 어려운 이유는 학습에 data, parameter, hyperparams를 비롯한 많은 변수가 사용되기 때문입니다. 
  데이터 시각화는 많은 데이터 속에서 패턴을 찾는다는 강점이 있습니다. 
  인공지능 설명에 데이터 시각화가 핵심 역할을 할 것이라고 생각합니다.`,
    `저는 머신러닝 모델이 더 높은 성능과 해석 가능성을 갖도록 만들기 위한 데이터 시각화 시스템을 만들어 왔습니다. 
  참신하고 효과적인 데이터 분석 시스템을 만들기 위해 웹 프론트엔드, 데이터 시각화, 머신러닝을 공부하고 있습니다. `
  ],
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
  educations: [
    {
      "course": "석사 과정",
      "where": "아주대학교 라이프미디어 협동과정",
      "href": "http://www.ajou.ac.kr/dt/index.jsp",
      "period": "2019 - 재학 중",
      "story":
        `데이터 시각화에 대한 더 심도 깊은 연구를 하기 위해 대학원에 진학했습니다.
      웹 기반 데이터 분석 시스템, 머신러닝 모델의 성능 평가, 네트워크 시각화를 연구합니다.`
    },
    {
      "course": "학사",
      "where": "아주대학교 미디어학과",
      "href": "https://media.ajou.ac.kr/media/index.jsp",
      "period": "2019 - 2019",
      "story":
        `미디어 콘텐츠 기획자이자 개발자로 성장하기 위한 시간이었습니다.
      프로젝트를 중심으로 진행되었던 학교 생활 덕분에 다양한 지식과 기술을 익힐 수 있었습니다.
      웹 프론트엔드 개발을 위하여 프로그래밍을 공부했고, 인터페이스 디자인을 수월하게 하기 위해 다양한 어도비 디자인 툴을 익혔습니다.
      더 좋은 콘텐츠를 만들기 위하여 UX 디자인과 디지털 미디어 심리학을 공부했습니다.
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
      video: true,
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
      video: true,
    },
    {
      id: 'comdia',
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
  projects: [
    {
      id: 'visml',
      title: 'A Visualization System for Performance Analysis of Image Classification Models',
      authors: ['Chanhee Park', 'Hyojin Kim', 'Kyungwon Lee'],
      conf_title: 'IS&T International Symposium on Electronic Imaging',
      conf_short: "EI'20",
      short_conf: 'ei',
      year: '2020',
      code: 'https://github.com/chanhee-park/VisMlic',
      site: 'https://chanhee-park.github.io/VisMlic/',
      video: true,
      pdf: true,
    },
  ]
}
