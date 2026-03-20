import type { Education } from '../types/portfolio';

export const educations: Education[] = [
  {
    id: 'ajou-ms-2022',
    school: '아주대학교',
    degree: '석사',
    major: '디지털미디어학',
    period: { start: '2019.09', end: '2022.02' },
    description: [
      '데이터 분석 시스템의 사용자 인터페이스 설계, 개발, 평가를 연구했습니다.',
      '머신러닝 모델 해석을 위한 시각적 분석 시스템 연구로 석사학위를 받았습니다.',
    ],
  },
  {
    id: 'ajou-bs-2019',
    school: '아주대학교',
    degree: '학사',
    major: '디지털미디어학',
    period: { start: '2015.03', end: '2019.08' },
    description: [
      '유저 인터페이스 디자인, 데이터 시각화, 웹 프론트엔드 개발, 기초 컴퓨터 공학을 공부했습니다.',
    ],
  },
];
