# Implementation Plan: 포트폴리오 웹사이트 현대화 및 안정화

**Branch**: `001-modernize-portfolio` | **Date**: 2026-03-05 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-modernize-portfolio/spec.md`

---

## Summary

6년 전 React 초학습 시점에 작성된 포트폴리오 코드베이스를 현대적인 기반 위에 재건한다. 현재는 CDN 스크립트 태그로 React를 로드하고, Babel 6(EOL)으로 브라우저 내 JSX를 실시간 변환하며, 타입·린팅·자동 배포가 전혀 없다.

**기술 접근**: Vite 5 + React 18 + TypeScript 5(strict) 스택으로 전면 이식. 시각적 디자인과 콘텐츠는 기능적으로 동일하게 유지한다. CSS는 기존 vanilla CSS를 정리·재구성하여 그대로 활용한다. GitHub Actions로 `main` 브랜치 push 시 GitHub Pages에 자동 배포한다.

---

## Technical Context

**Language/Version**: TypeScript 5.x (strict mode), Node.js 20 LTS
**Primary Dependencies**: React 18, React DOM 18, Vite 5, ESLint 9, Prettier 3, `@vitejs/plugin-react`
**Storage**: 정적 TypeScript 데이터 파일 (`src/data/*.ts`), 런타임 스토리지 없음
**Testing**: N/A (Out of Scope — spec 명시)
**Target Platform**: GitHub Pages (정적 호스팅, `chanhee-park.github.io`)
**Project Type**: 정적 단일 페이지 웹 애플리케이션
**Performance Goals**: Lighthouse 성능 90+, 접근성 90+, FCP < 3초
**Constraints**: 정적 파일만 배포 (서버 불가), GitHub Pages 호환, 외부 CDN 의존 없음
**Scale/Scope**: ~10개 컴포넌트, ~3개 데이터 파일, 단일 유지보수자

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

> **Note**: `.specify/memory/constitution.md` 파일이 존재하지 않습니다. 프로젝트 헌법이 미설정 상태이므로 범용 품질 원칙을 적용합니다.

| 원칙 | 상태 | 비고 |
|------|------|------|
| 단일 책임 컴포넌트 | ✅ PASS | 각 섹션(Experiences, Educations 등)이 독립 컴포넌트로 분리됨 |
| 데이터/컴포넌트 분리 | ✅ PASS | `src/data/`에 콘텐츠, `src/components/`에 뷰 분리 |
| 타입 안전성 | ✅ PASS | TypeScript strict 모드, 데이터 인터페이스 정의 |
| 불필요한 추상화 없음 | ✅ PASS | 10개 컴포넌트, CSS Modules 미사용(규모 부적합) |
| 순환 의존성 없음 | ✅ PASS | 데이터 → 타입, 컴포넌트 → 데이터 단방향 |
| 외부 CDN 의존 없음 | ✅ PASS | 모든 의존성 번들에 내재화 (빌드 후) |

**Post-design re-check**: 모든 gate 통과. Complexity Tracking 불필요.

---

## Project Structure

### Documentation (this feature)

```text
specs/001-modernize-portfolio/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── data-schema.md   # Phase 1 output — 콘텐츠 데이터 인터페이스 계약
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
# 새 파일 구조 (현재 src/*.jsx → 아래 구조로 이전)
src/
├── main.tsx                   # 진입점 (현재 index.html의 React mount 역할)
├── components/
│   ├── App.tsx                # 최상위 레이아웃 + Navbar (현재 app.jsx)
│   ├── Intro.tsx              # 소개 섹션
│   ├── Experiences.tsx        # 경력 섹션
│   ├── Educations.tsx         # 학력 섹션
│   └── Researches.tsx         # 연구 섹션 (Materials, Thumbnail, Authors 포함)
├── data/
│   ├── experiences.ts         # 경력 데이터 (현재 data.jsx의 experiences)
│   ├── educations.ts          # 학력 데이터
│   └── researches.ts          # 연구 데이터
├── types/
│   └── portfolio.ts           # 모든 포트폴리오 타입 정의
└── styles/
    ├── variables.css           # CSS Custom Properties (현재 :root 변수)
    ├── globals.css             # Reset, body, 기본 레이아웃
    ├── components.css          # 컴포넌트별 스타일 (BEM)
    └── responsive.css          # 모바일 미디어 쿼리 (현재 style.mobile.css)

assets/                        # 기존 파일 그대로 유지 (변경 없음)
├── cv.pdf
├── chanhee-profile.jpg
└── researches/

index.html                     # Vite 진입 HTML (CDN 스크립트 제거, <script type="module"> 사용)
vite.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json
eslint.config.js
.prettierrc.json
.nvmrc                         # Node 20

.github/
└── workflows/
    └── deploy.yml             # GitHub Actions: main push → GitHub Pages 자동 배포
```

**Structure Decision**: 단일 프론트엔드 프로젝트. 현재 3개 파일(`app.jsx`, `components.jsx`, `data.jsx`)을 역할별 디렉토리 구조로 분리. 백엔드·API 없음. 정적 배포.

---

## Architecture Decisions

### 현재 → 목표 매핑

| 현재 (Before) | 목표 (After) | 이유 |
|---|---|---|
| `<script src="https://unpkg.com/react@17/...">` | npm 패키지 번들 내재화 | CDN 의존 제거, 오프라인 가능 |
| `<script type="text/babel">` | `npm run build` 사전 컴파일 | 브라우저 내 변환 제거, 성능 개선 |
| `babel-cli` v6 | Vite 5 내장 esbuild | EOL 도구 교체, 빌드 속도 100x 향상 |
| `lodash.map()` | `Array.prototype.map()` | 불필요한 대형 라이브러리 제거 |
| 타입 없음 | TypeScript strict | 런타임 오류 빌드 타임 감지 |
| 린트/포맷 없음 | ESLint 9 + Prettier 3 | 코드 품질 자동화 |
| 수동 배포 | GitHub Actions | push → 자동 배포 |
| `class=` (HTML attr) | `className=` (JSX attr) | React 표준 준수 |
| `== / !=` | `=== / !==` | 엄격한 동등 비교 |
| `--defult-font` 오타 | `--default-font` | CSS 변수명 수정 |

### 시각적 충실도 보장 전략

1. **Before 스크린샷**: 이식 작업 시작 전 현재 사이트 캡처 (참조용)
2. **나란히 비교**: 이식 후 각 섹션별 시각적 결과 대조
3. **예외 처리**: 접근성/SEO/유지보수성으로 불가피한 HTML 변경 시 PR에서 명시적 설명
4. **오차 범위**: CSS 구현 방식 차이로 인한 1-2px 오차 허용 (기능적 동일 기준)

---

## Complexity Tracking

> 모든 Constitution Check gates 통과. 복잡도 위반 없음.
