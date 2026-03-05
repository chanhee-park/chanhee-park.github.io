import type { Education } from '../types/portfolio';

export const educations: Education[] = [
  {
    id: 'hanyang-phd-2022',
    school: '한양대학교',
    degree: '박사과정',
    major: '기술경영학',
    period: { start: '2022.03', end: 'current' },
  },
  {
    id: 'ajou-ms-2022',
    school: '아주대학교',
    degree: '석사',
    major: '미디어학',
    period: { start: '2019.09', end: '2022.02' },
  },
  {
    id: 'ajou-bs-2019',
    school: '아주대학교',
    degree: '학사',
    major: '디지털미디어학',
    period: { start: '2015.03', end: '2019.08' },
  },
];
