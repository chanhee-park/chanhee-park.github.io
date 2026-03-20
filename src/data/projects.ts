import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'makinarocks-runway-link',
    name: 'Runway / Link',
    company: 'MakinaRocks',
    period: '2023.05 - 현재',
    summary:
      'MLOps 프로덕트와 JupyterLab 연동 확장 애플리케이션의 프론트엔드를 개발했습니다. 데이터 흐름이 복잡한 화면을 안정적으로 다루기 위해 성능 개선과 정보 구조 정리에 집중했습니다.',
    highlights: [
      'React Query 도입으로 주요 시나리오의 평균 API 호출 횟수를 기존 대비 70% 절감',
      '번역 텍스트 누락 검사 도구를 빌드 테스트에 통합해 QA 단계 버그를 월 5~10회에서 0회로 축소',
      'D3 기반 파이프라인 그래프를 SVG + Dagre 구조로 재설계해 성능과 유지보수성 개선',
    ],
  },
  {
    id: 'makinarocks-chatbot',
    name: 'Enterprise Chatbot Platform',
    company: 'MakinaRocks',
    period: '2024 - 2025',
    summary:
      '납품형 챗봇 프론트엔드의 공통 구조를 설계하고 제품별 앱을 빠르게 납품할 수 있는 개발 체계를 만들었습니다. 요구사항 분석부터 UX 설계, 개발, 배포까지 폭넓게 담당했습니다.',
    highlights: [
      '핵심 기능을 보일러플레이트화해 프로젝트별 프론트 앱을 2주 내 구현할 수 있는 체계 구축',
      '채팅 목록, 음성 입출력, 추천 질문, 추론 근거 하이라이팅 등 제품 핵심 경험 설계 및 구현',
      '제조기업과 공공기관 프로젝트에서 UX 오너로 참여해 디자인과 배포까지 주도',
    ],
  },
  {
    id: 'makinarocks-anomaly-dashboard',
    name: 'Anomaly Detection Dashboard',
    company: 'MakinaRocks',
    period: '2024',
    summary:
      'AI 모델 기반 공정 이상탐지 대시보드와 알림 경험을 설계하고 프론트엔드를 개발했습니다. 대용량 데이터 탐색과 실시간 의사결정을 동시에 지원하는 데 초점을 맞췄습니다.',
    highlights: [
      '프로젝트 초반 1주일 동안 5개 페이지 규모의 모킹 앱을 제작해 UI와 API 스펙 구체화를 주도',
      'GB 규모 데이터를 스트리밍 방식으로 처리하고 필요한 구간만 표시해 끊김 없는 인터랙션 제공',
      'Vite 프록시와 Nginx 리버스 프록시로 분산된 백엔드 API를 통합해 개발과 운영 편의성 확보',
    ],
  },
];
