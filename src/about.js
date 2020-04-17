// Title: About 섹션을 헤더에 위치시키기위해 타이틀을 사용하지 않는다. 
const title = null;

// Content
const paragraphs = [
  `제 목표는 복잡한 데이터를 이해하는 장벽을 낮추는 것입니다. 
  특히 제 연구 비전은 '시각화를 통한 머신러닝 모델 해석과 개선'에 있습니다. 
  머신러닝 모델은 높은 성능에도 불구하고 해석과 디버깅이 어렵다는 이유로 활용에 어렵곤 합니다. 
  머신러닝 모델의 행동 패턴을 이해하는 것은 인공지능 모델을 개선하고 활용하는데 위해 필수적입니다. 
  머신러닝 모델의 이해하기 어려운 이유는 학습에 data, parameter, hyperparams를 비롯한 많은 변수가 사용되기 때문입니다. 
  데이터 시각화는 많은 데이터 속에서 패턴을 찾는다는 강점이 있습니다. 
  인공지능 설명에 데이터 시각화가 핵심 역할을 할 것이라고 생각합니다.`,
  `저는 머신러닝 모델이 더 높은 성능과 해석 가능성을 갖도록 만들기 위한 데이터 시각화 시스템을 만들어 왔습니다. 
  참신하고 효과적인 데이터 분석 시스템을 만들기 위해 웹 프론트엔드, 데이터 시각화, 머신러닝을 공부하고 있습니다. `
];
const content = paragraphs.map((p, i) => <p key={i}>{p}</p>);

// Get JSX
const element = <Section title={title} content={content}></Section>

// Render
ReactDOM.render(
  element,
  document.getElementById('about')
);
