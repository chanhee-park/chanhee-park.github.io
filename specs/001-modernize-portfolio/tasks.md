# Tasks: 포트폴리오 웹사이트 현대화 및 안정화

**Feature**: 001-modernize-portfolio
**Input**: specs/001-modernize-portfolio/ (plan.md, spec.md, data-model.md, contracts/, research.md, quickstart.md)
**Stack**: Vite 5 + React 18 + TypeScript 5 (strict) + Vanilla CSS + ESLint 9 + Prettier 3 + peaceiris/actions-gh-pages + Node 20
**Total Tasks**: 37 tasks across 7 phases

## Format: `[ID] [P?] [Story] Description`

- **[P]**: 병렬 실행 가능 (다른 파일, 의존성 없음)
- **[Story]**: 해당 User Story ([US1], [US2], [US3], [US4])
- 파일 경로는 프로젝트 루트 기준

---

## Phase 1: Setup (프로젝트 초기화)

**Purpose**: 빌드 환경 기반 구축

- [ ] T001 현재 포트폴리오 사이트 스크린샷 캡처 — 각 섹션별 (Intro, Experiences, Educations, Researches) 및 모바일 레이아웃 캡처하여 시각 비교 기준 확보 (T022 시각 검증의 참조 자료)
- [ ] T002 Vite 5 + React 18 + TypeScript 5 프로젝트 초기화 — `npm create vite@5 .` (react-ts 템플릿 선택), 이후 `npm install`, 추가 설치: `eslint@9 @eslint/js typescript-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier prettier`
- [ ] T003 [P] tsconfig.json, tsconfig.app.json, tsconfig.node.json 구성 — strict: true, noUnusedLocals: true, noUnusedParameters: true, moduleResolution: "bundler", target: "ES2020", jsx: "react-jsx" (research.md §3 참조)
- [ ] T004 [P] .nvmrc 생성 (내용: `20`), .gitignore에 `dist/` 포함 확인

---

## Phase 2: Foundational (핵심 기반)

**Purpose**: 모든 User Story가 의존하는 공통 파일

**⚠️ CRITICAL**: 이 Phase 완료 전까지 Phase 3+ 작업 불가

- [ ] T005 src/types/portfolio.ts 생성 — Period, Experience, Education, MaterialType (`"pdf" | "poster" | "video" | "slides" | "demo"`), Material, Research 인터페이스 정의 (data-model.md 전체 참조)
- [ ] T006 [P] eslint.config.js 생성 — @eslint/js, typescript-eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-config-prettier flat config 구성; package.json에 `"lint": "eslint src"`, `"lint:fix": "eslint src --fix"` 스크립트 추가 (research.md §5 참조)
- [ ] T007 [P] .prettierrc.json 생성 — singleQuote: true, semi: true, tabWidth: 2, printWidth: 100; package.json에 `"format": "prettier --write src"` 스크립트 추가
- [ ] T008 src/styles/variables.css 생성 — 현재 style/style.css :root 블록의 CSS custom properties 이전, 오타 수정: `--defult-font` → `--default-font`, `--defult-height` → `--default-height`
- [ ] T009 src/styles/globals.css 생성 — 현재 style/style.css의 reset, body, a, 기본 타이포그래피, 페이지 레이아웃 스타일 이전
- [ ] T010 index.html 업데이트 — CDN React/ReactDOM/Babel `<script>` 태그 전부 제거, `<script type="module" src="/src/main.tsx"></script>` 추가, 기존 `<meta charset>`, `<meta viewport>` 유지
- [ ] T011 src/main.tsx 생성 — React 18 `createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)`; variables.css, globals.css, components.css, responsive.css 모두 import

**Checkpoint**: `npm run build` 빈 App 스텁으로 오류 없이 완료

---

## Phase 3: User Story 1 — 빠르고 안정적인 포트폴리오 접근 (P1) 🎯 MVP

**Goal**: Vite 빌드 기반으로 모든 포트폴리오 섹션이 CDN 없이 올바르게 렌더링됨

**Independent Test**: `npm run build && npm run preview` → T001 스크린샷과 모든 섹션 시각 비교

### Implementation

- [ ] T012 [P] [US1] src/data/experiences.ts 생성 — `import type { Experience } from "../types/portfolio"`, `export const experiences: Experience[] = [...]`; 현재 data.jsx의 experiences 배열 전체 이전, JSX 제거 후 순수 TypeScript 객체 배열로 변환
- [ ] T013 [P] [US1] src/data/educations.ts 생성 — `import type { Education } from "../types/portfolio"`, `export const educations: Education[] = [...]`; 현재 data.jsx의 educations 배열 전체 이전
- [ ] T014 [P] [US1] src/data/researches.ts 생성 — `import type { Research } from "../types/portfolio"`, `export const researches: Research[] = [...]`; 현재 data.jsx의 researches 배열 전체 이전 (thumbnail, materials 포함)
- [ ] T015 [US1] src/components/App.tsx 구현 — 현재 app.jsx의 App 컴포넌트 이전: Navbar (각 섹션 앵커 링크), 메인 레이아웃, Intro/Experiences/Educations/Researches 섹션 순서로 렌더링; `class=` → `className=`, `==` → `===` 변환
- [ ] T016 [P] [US1] src/components/Intro.tsx 구현 — 프로필 사진(`assets/chanhee-profile.jpg`), 이름, 소개 텍스트, CV PDF 다운로드 링크(`assets/cv.pdf`), LinkedIn/GitHub 소셜 링크 (현재 components.jsx Intro 섹션 이전)
- [ ] T017 [P] [US1] src/components/Experiences.tsx 구현 — `experiences` 배열 import, 각 항목(role, company, period, description[], link?) 렌더링; description은 각 항목을 `<p>` 또는 `<li>`로 렌더링 (현재 components.jsx Experiences 이전)
- [ ] T018 [P] [US1] src/components/Educations.tsx 구현 — `educations` 배열 import, 각 항목(school, degree, major, period, advisor?) 렌더링 (현재 components.jsx Educations 이전)
- [ ] T019 [P] [US1] src/components/Researches.tsx 구현 — `researches` 배열 import, 각 항목(title, authors with "Chanhee Park" 강조 표시, venue, year, thumbnail?, materials) 렌더링; `visible: true`인 material만 버튼으로 표시 (현재 components.jsx Researches 이전)
- [ ] T020 [US1] src/styles/components.css 생성 — 현재 style/style.css의 컴포넌트별 스타일 이전 (Navbar, Intro, Experience Card, Education Card, Research Card, Material 버튼); BEM 컨벤션 적용
- [ ] T021 [US1] src/styles/responsive.css 생성 — 현재 style/style.mobile.css의 모바일 미디어 쿼리 전부 이전
- [ ] T022 [US1] 시각 비교 검증 — `npm run build && npm run preview` 실행; T001 캡처 스크린샷과 Intro/Experiences/Educations/Researches 섹션 및 모바일 레이아웃 비교; 방문자가 인지할 수 있는 차이 발견 시 CSS 수정 (1-2px 오차는 허용)

**Checkpoint**: 빌드 성공, 모든 섹션 기존과 동일하게 렌더링, CDN 스크립트 없음, 모바일 레이아웃 정상

---

## Phase 4: User Story 2 — 콘텐츠 업데이트 (P2)

**Goal**: 데이터 파일만 수정하면 컴포넌트 코드 변경 없이 콘텐츠 반영; TypeScript가 잘못된 데이터 형식을 빌드 시 감지

**Independent Test**: 가상 데이터 추가 → 화면 반영 확인 → 필수 필드 제거 → 빌드 오류 확인

### Implementation

- [ ] T023 [US2] 데이터 분리 검증 — src/data/experiences.ts에 가상 경험 항목 1개 추가, `npm run dev`에서 컴포넌트 수정 없이 화면에 새 항목이 표시되는지 확인; 검증 후 테스트 항목 제거
- [ ] T024 [US2] TypeScript 강제 적용 검증 — src/data/researches.ts에 `id` 필드를 누락한 항목 임시 추가, `npm run build` 실행하여 명확한 TypeScript 오류 메시지 출력 확인; 검증 후 복원
- [ ] T025 [US2] 데이터 계약 준수 검토 — contracts/data-schema.md 규칙에 따라 각 데이터 파일 검토: 배열 내 id 고유성, 저자 이름 `"Chanhee Park"` 일관성, period 형식(`"YYYY.MM"` 또는 `"YYYY"`), MaterialType 값이 허용 목록 내에 있는지 확인 및 수정

**Checkpoint**: 콘텐츠 추가 5분 이내 완료 가능; 잘못된 데이터 형식은 빌드 오류로 즉시 감지

---

## Phase 5: User Story 3 — 코드 유지보수성 (P3)

**Goal**: ESLint/Prettier/TypeScript strict 동작 확인; GitHub Actions 자동 배포 설정

**Independent Test**: `npm run lint` 오류 0개; GitHub main 브랜치 push 시 Actions 탭에서 빌드·배포 성공 확인

### Implementation

- [ ] T026 [P] [US3] TypeScript strict 모드 컴포넌트 검증 — src/components/Experiences.tsx에 의도적으로 props 타입 불일치 코드 임시 작성 (예: `string` 타입 prop에 `number` 전달), 에디터에서 즉시 오류 표시 및 `npm run build` 실패 확인; 수정 후 복원
- [ ] T027 [P] [US3] ESLint 검증 — `npm run lint` 실행, 오류 0개 확인; 오류 있을 경우 수정; eslint-plugin-react-hooks 규칙이 동작하는지 확인 (예: 조건문 내 hook 사용 시 오류 발생)
- [ ] T028 [P] [US3] Prettier 검증 — `npm run format` 실행, 전체 src/ 포맷팅 적용; 이후 `git diff`로 변경된 파일 확인 및 일관성 검증
- [ ] T029 [US3] .github/workflows/deploy.yml 생성 — 트리거: `on: push: branches: [main]`; steps: `actions/checkout@v4` → `actions/setup-node@v4 (node-version: '20')` → `npm ci` → `npm run build` → `peaceiris/actions-gh-pages@v3 (publish_dir: ./dist)`; GITHUB_TOKEN 사용 (research.md §6 참조)

**Checkpoint**: `npm run lint` 및 `npm run build` 오류 없음; deploy.yml push 후 GitHub Actions 탭에서 워크플로우 실행 확인 (SC-006: push 후 10분 이내 배포 반영)

---

## Phase 6: User Story 4 — 접근성 및 SEO (P4)

**Goal**: 스크린리더 접근 가능, 키보드 네비게이션 정상, Lighthouse 접근성 90+

**Independent Test**: Chrome DevTools Lighthouse 접근성 감사 90점 이상; Tab 키로 모든 링크/버튼 논리적 순서로 접근 가능

### Implementation

- [ ] T030 [P] [US4] src/components/Intro.tsx — 프로필 이미지에 `alt="Chanhee Park 프로필 사진"` 추가; CV 링크, 소셜 링크에 `aria-label` 추가 (예: `aria-label="LinkedIn 프로필"`)
- [ ] T031 [P] [US4] src/components/Researches.tsx — 각 연구 썸네일 이미지에 `alt="{title} 논문 썸네일"` 추가; material 버튼에 `aria-label` 추가 (예: `aria-label="PDF 다운로드: {title}"`)
- [ ] T032 [US4] src/components/App.tsx 및 전체 컴포넌트 시맨틱 HTML 검토 — `<main>`, `<nav>`, `<section aria-label="...">`, `<article>`, h1(이름)-h2(섹션명)-h3(항목명) 계층 구조 논리적 배치 여부 확인 및 수정; FR-020에 따라 HTML 구조 변경 내용은 PR에 명시
- [ ] T033 [US4] index.html 메타태그 추가 — `<title>Chanhee Park | Portfolio</title>`, `<meta name="description" content="...">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:type" content="website">`
- [ ] T034 [US4] Lighthouse 감사 실행 — `npm run preview` 상태에서 Chrome DevTools Lighthouse 실행; Performance ≥ 90, Accessibility ≥ 90 달성 확인; 미달 항목 수정

**Checkpoint**: Lighthouse 성능 90+, 접근성 90+; 모든 이미지 alt 텍스트 적용; Tab 키 내비게이션 정상 (SC-002)

---

## Phase 7: Polish & 마무리

**Purpose**: 레거시 파일 정리, 최종 품질 검증

- [ ] T035 레거시 파일 삭제 — Phase 3 Checkpoint(시각 검증) 통과 확인 후 `src/app.jsx`, `src/components.jsx`, `src/data.jsx`, `style/` 디렉토리 전체 삭제
- [ ] T036 [P] 최종 빌드 검증 — `npm run lint && npm run build`; TypeScript 오류 0개, ESLint 오류 0개 확인
- [ ] T037 [P] quickstart.md 개발 플로우 검증 — `npm install`, `npm run dev`, `npm run build`, `npm run preview` 순서가 quickstart.md 문서와 일치하게 동작하는지 확인

---

## Dependencies & Execution Order

### Phase 의존성

- **Phase 1 (Setup)**: 의존성 없음 — 즉시 시작 가능
- **Phase 2 (Foundational)**: Phase 1 완료 후 시작 — **Phase 3+ 전체 블로킹**
- **Phase 3 (US1)**: Phase 2 완료 후 시작
- **Phase 4 (US2)**: Phase 3 완료 후 시작 (데이터 파일 존재 전제)
- **Phase 5 (US3)**: Phase 3 완료 후 시작 (Phase 4와 병렬 가능)
- **Phase 6 (US4)**: Phase 3 완료 후 시작 (Phase 4/5와 병렬 가능)
- **Phase 7 (Polish)**: Phase 3-6 모두 완료 후 시작

### Phase 3 내부 실행 순서

```
T005 (types)
  └─→ T012 [P] / T013 [P] / T014 [P]  ← 병렬 실행 가능
        └─→ T015 (App.tsx)
        └─→ T016 [P] / T017 [P] / T018 [P] / T019 [P]  ← 병렬 실행 가능
              └─→ T020 → T021 → T022
```

### 병렬 실행 예시 (Phase 3)

```bash
# 데이터 파일 동시 생성 (T005 완료 후):
Task: "src/data/experiences.ts 생성 (T012)"
Task: "src/data/educations.ts 생성 (T013)"
Task: "src/data/researches.ts 생성 (T014)"

# 컴포넌트 동시 구현 (T012-T014 완료 후):
Task: "Intro.tsx 구현 (T016)"
Task: "Experiences.tsx 구현 (T017)"
Task: "Educations.tsx 구현 (T018)"
Task: "Researches.tsx 구현 (T019)"
```

---

## Implementation Strategy

### MVP (Phase 3 완료 시점)

1. Phase 1 Setup → Phase 2 Foundational → Phase 3 US1 완료
2. **MVP 검증**: `npm run preview`에서 T001 스크린샷 비교 통과
3. 이 시점에서 CDN-free, Vite 빌드 포트폴리오 배포 가능

### 점진적 완성 순서

| 단계 | 완성 내용 | 검증 방법 |
|------|-----------|-----------|
| Phase 1-3 완료 | CDN 없는 Vite 빌드 포트폴리오 | 시각 비교 + 빌드 성공 |
| Phase 4 완료 | 데이터/컴포넌트 분리 검증 | 가상 항목 추가 테스트 |
| Phase 5 완료 | GitHub Actions 자동 배포 | Actions 탭 워크플로우 확인 |
| Phase 6 완료 | 접근성 개선 | Lighthouse 90+ |
| Phase 7 완료 | 레거시 파일 정리 | 최종 빌드 오류 0개 |

---

## Notes

- **[P] 태스크**: 다른 파일에 작업, 완료되지 않은 태스크에 의존성 없음 → 병렬 실행 권장
- **[Story] 레이블**: spec.md의 User Story 1-4에 대응 (US1=P1, US2=P2, US3=P3, US4=P4)
- **T001 스크린샷 필수**: 시각 비교 기준 없으면 T022 검증 불가 — Phase 1 첫 번째 작업
- **PR 명시 규칙**: 접근성·SEO·유지보수성을 위한 HTML 구조 변경(T032 등)은 FR-020에 따라 PR에서 변경 이유·영향 범위 명시
- **Lodash 제거**: 새 package.json에 Lodash 포함하지 않음으로써 자동 해결 (T002)
- **CSS 오타 수정**: `--defult-font` → `--default-font` (T008에서 올바른 이름으로 생성)
