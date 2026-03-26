import type { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'makinarocks-2023',
    role: 'Web Frontend Engineer',
    company: 'MakinaRocks',
    period: { start: '2023.05', end: 'current' },
    description: [
      'MLOps 제품, 데이터 대시보드, 엔터프라이즈 챗봇 등 다양한 AI 제품의 프론트엔드를 개발합니다.',
      '성능 최적화, UX/UI 개선, 공통 기능 모듈화, QA 체계 정비, 배포 환경 구성까지 폭넓게 기여하고 있습니다.',
      '주요 시나리오의 API 호출 수를 70% 줄이고, QA 단계의 반복 버그를 제거했으며, Lighthouse 점수를 70점대에서 90점대로 끌어올렸습니다.',
    ],
    link: 'https://www.makinarocks.ai/',
  },
  {
    id: 'woowahan-2021',
    role: 'Web Frontend Engineer',
    company: '우아한형제들',
    period: { start: '2021.08', end: '2023.05' },
    description: [
      '데이터 관리 백오피스, 상담 시스템, 마케팅 플랫폼 등 배달의민족 운영 도구의 프론트엔드를 개발했습니다.',
      '고객 및 주문 정보 조회 기능, 상담 데이터 시각화 대시보드, 백오피스 디자인 시스템 구축에 참여했습니다.',
      '상담 완료 시간 30초 이상 단축, 상담 미완료율 43% 감소, DB 운영팀 문의 10% 감소와 불만 제보 90% 감소에 기여했습니다.',
    ],
    link: 'https://www.woowahan.com/',
  },
  {
    id: 'naver-clova-2020',
    role: 'Frontend Engineer Intern',
    company: 'NAVER Clova AI',
    period: { start: '2020.09', end: '2020.12' },
    description: [
      'NSML 팀에서 머신러닝 엔지니어용 MLOps 플랫폼 개발에 참여했습니다.',
      '학습 로그 조회 기능을 구현하고 모델 성능 분석을 위한 데이터 시각화 리서치를 수행했습니다.',
    ],
    link: 'https://clova.ai/ko',
  },
];
