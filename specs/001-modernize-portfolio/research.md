# Research: 포트폴리오 현대화 기술 결정

**Feature**: 001-modernize-portfolio
**Date**: 2026-03-05
**Updated**: 2026-03-05 (프레임워크 비교 추가)
**Status**: Complete

---

## 1. Build Tool

**Decision**: **Vite 5**

**Rationale**:
- HMR(Hot Module Replacement) 기반 개발 서버로 즉각적인 피드백 제공
- TypeScript, JSX, CSS를 빌드 설정 없이 즉시 지원
- ES Modules 기반으로 프로덕션 번들이 최적화됨 (tree-shaking, code-splitting)
- GitHub Pages 정적 배포에 최적화된 `npm run build` 결과물 생성
- `username.github.io` 형식의 루트 경로 배포에 `base: "/"` 기본값으로 별도 설정 불필요

**Alternatives considered**:
- **Create React App**: 2022년 11월 공식 유지보수 모드 전환, 신규 프로젝트에 권장되지 않음
- **Next.js**: SSR/SSG 기능이 정적 단일 페이지 포트폴리오에 과도함. `next export`로 정적 빌드 가능하나 불필요한 복잡성 추가
- **Parcel**: Vite 대비 생태계 규모가 작고, React + TypeScript 통합 문서가 부족함

---

## 2. React Version

**Decision**: **React 18**

**Rationale**:
- 2022년 3월 출시 이후 2년 이상 안정화, 생태계 완전 지원
- Concurrent Rendering, Automatic Batching 등 현대적 기능 탑재
- 테스트 라이브러리, UI 라이브러리, 린터 플러그인 모두 완전 호환
- TypeScript 타입 정의 안정적

**Alternatives considered**:
- **React 19** (2024년 12월 출시): Server Components 등 새 기능이 정적 포트폴리오에 불필요. 타입 정의 및 플러그인 생태계 여전히 성숙 중. "보수적 기술 선정" 원칙에 맞지 않음
- **React 17**: 현재 사용 중인 버전이지만, Concurrent 기능 없이 최신 best practice 적용 불가

---

## 3. TypeScript

**Decision**: **TypeScript 5.x, strict 모드 활성화**

**Rationale**:
- `strict: true`는 `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes` 등을 일괄 활성화하여 런타임 오류를 컴파일 타임에 감지
- 포트폴리오 데이터 구조(Experience, Education, Research)에 타입 정의를 부여해 데이터 추가 시 잘못된 형식을 빌드 단계에서 즉시 발견
- `noUnusedLocals`, `noUnusedParameters`로 불필요한 코드 조기 제거
- `moduleResolution: "bundler"` Vite 번들러 최적화

**tsconfig 핵심 설정**:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "skipLibCheck": true,
    "isolatedModules": true
  }
}
```

---

## 4. CSS 아키텍처

**Decision**: **Vanilla CSS (정리된 전역 스타일시트)**

**Rationale**:
- 현재 컴포넌트 수 ~10개로 CSS Modules가 제공하는 자동 스코핑의 실질적 이점 없음
- 기존 vanilla CSS 자산(색상 변수, 폰트, 레이아웃)을 그대로 활용 가능 → 시각적 충실도 유지 용이
- 빌드 설정 추가 불필요, 마이그레이션 위험 최소
- Vite는 CSS 파일을 기본으로 처리하므로 별도 플러그인 불필요
- BEM 네이밍 컨벤션으로 클래스 충돌 방지 충분

**파일 구조**:
```
src/styles/
├── variables.css    # CSS Custom Properties (색상, 폰트, 간격)
├── globals.css      # Reset, 기본 타이포그래피, body 레이아웃
├── components.css   # 컴포넌트별 스타일 (BEM prefix로 구분)
└── responsive.css   # 모바일 미디어 쿼리 (현재 style.mobile.css 내용 이전)
```

**Alternatives considered**:
- **CSS Modules**: 50+ 컴포넌트 규모의 프로젝트에 적합, 현재 규모에 과도함. 향후 쉽게 마이그레이션 가능(Vite 지원)
- **Tailwind CSS**: 유틸리티 퍼스트 방식으로 기존 CSS 구조를 전면 교체해야 함. 시각적 충실도 검증이 더 어려움. 보수적 기술 선정 원칙에 다소 맞지 않음

---

## 5. ESLint & Prettier

**Decision**: **ESLint 9 flat config + Prettier 3**

**Rationale**:
- ESLint v9 (2024년 4월 출시)에서 flat config(`eslint.config.js`)가 기본값으로 채택, `.eslintrc` 형식 deprecated
- `eslint-config-prettier`를 마지막에 추가해 ESLint/Prettier 충돌 방지
- `typescript-eslint`로 TypeScript 전용 린팅 규칙 통합

**핵심 패키지**:
```
eslint, @eslint/js, typescript-eslint,
eslint-plugin-react, eslint-plugin-react-hooks,
eslint-config-prettier, prettier
```

**Alternatives considered**:
- **Legacy .eslintrc**: Deprecated, 신규 프로젝트에 권장하지 않음
- **eslint-plugin-prettier**: 2024+ 기준 권장하지 않음, Prettier standalone으로 분리 운영이 best practice

---

## 6. GitHub Actions 배포

**Decision**: **peaceiris/actions-gh-pages v3 → gh-pages 브랜치 배포**

**Rationale**:
- `chanhee-park.github.io`는 username repo이므로 루트 URL, Vite `base: "/"` 설정으로 별도 경로 접두사 불필요
- `peaceiris/actions-gh-pages`는 2019년부터 수천 개 프로젝트에서 검증된 안정적 액션
- `GITHUB_TOKEN` 만으로 동작, 별도 시크릿 설정 불필요
- `main` 브랜치에 push → 자동 빌드 → `gh-pages` 브랜치에 배포 결과물 push

**워크플로우 구조**:
```yaml
on:
  push:
    branches: [main]
jobs:
  deploy:
    steps:
      - checkout → setup-node v4 (Node 20) → npm ci → npm run build
      - peaceiris/actions-gh-pages@v3 (publish_dir: ./dist)
```

**Alternatives considered**:
- **actions/deploy-pages**: GitHub 공식 방식이나 권한 설정이 더 복잡(pages write + id-token write). 기능상 동일
- **수동 빌드 후 dist 커밋**: 현재 방식의 문제점(dist 파일이 저장소에 포함)을 반복

---

## 7. 패키지 매니저 & Node 버전

**Decision**: **npm + Node.js 20 LTS**

**Rationale**:
- npm: Node.js 기본 내장, 포트폴리오 규모에 충분, 학습 곡선 없음
- Node.js 20 (LTS "Iron"): 2025년 4월까지 Active LTS, 2026년 4월까지 Maintenance LTS

**Alternatives considered**:
- **pnpm**: 디스크 효율 우수하나 단일 유지보수자 포트폴리오에 과도함
- **Node.js 22 (LTS "Jod")**: 최신 LTS이지만 20이 더 오래된 안정성 보유

---

## 8. 프레임워크 비교: Vite+React vs Next.js vs Astro

> 사용자 요청으로 Next.js, Astro 등의 프레임워크 사용 방안을 추가 비교 검토함.

### 비교 대상 요약

| 항목 | Vite 5 + React 18 | Next.js 14/15 | Astro 4/5 |
|------|-------------------|---------------|-----------|
| **번들 크기** | ~35KB JS | ~85KB JS | 0–5KB JS (기본값) |
| **렌더링 모델** | CSR (Client-Side) | SSG/SSR 선택 | Zero-JS 기본, 선택적 JS |
| **Lighthouse** | 95–100 | 85–90 | 98–100 |
| **React 지원** | 네이티브 | 네이티브 | 아일랜드 아키텍처 (부분 hydration) |
| **GitHub Pages** | `base: "/"`, 설정 최소 | 복잡 (basePath, 이미지 비활성화 필요) | 공식 `withastro/action` 제공 |
| **학습 곡선** | 낮음 | 낮음 (React 경험자) | 중간 (새 문법 학습 필요) |
| **현재 코드 이식** | JSX → TSX, 최소 변경 | JSX → TSX + 라우팅 재구성 | JSX → .astro 파일로 마이그레이션 |
| **유지보수 부담** | 낮음 | 중간 (주기적 breaking changes) | 낮음 |

---

### Vite 5 + React 18 (현재 채택안)

**장점**:
- 현재 JSX → TSX 이식이 파일 단위로 직관적
- 순수 React 생태계 그대로 유지 (hook, 컴포넌트 패턴 동일)
- 번들러 교체만으로 개발 경험 대폭 개선
- 추가 개념 학습 없이 기존 React 지식 100% 활용

**단점**:
- 정적 포트폴리오에 Client-Side Rendering은 불필요한 JS 포함
- Lighthouse 성능에서 Astro 대비 소폭 열세

---

### Next.js 14/15

**장점**:
- React 개발자에게 익숙한 파일 기반 라우팅
- SSG(`output: 'export'`)로 정적 배포 가능

**단점**:
- GitHub Pages 배포 시 설정 복잡: `basePath`, `trailingSlash: true`, 이미지 최적화 비활성화 필수
- 단일 페이지 포트폴리오에 SSR/App Router는 과도한 기능
- 번들 크기 ~85KB — 포트폴리오에서 정당화 불가
- Next.js 주요 버전마다 breaking changes 빈번 (13→14→15 모두 마이그레이션 필요)
- Lighthouse 85–90으로 세 옵션 중 최하

**결론**: **비추천**. 정적 단일 페이지에는 과잉 설계.

---

### Astro 4/5

**장점**:
- **정적 포트폴리오에 최적화된 프레임워크**: Zero-JS by default 철학
- 번들 크기 0–5KB → Lighthouse 98–100 달성 가능
- React 컴포넌트를 `<SomeComponent client:load />` 형태로 그대로 임포트 가능 (아일랜드 아키텍처)
- `withastro/action` GitHub Pages 공식 배포 액션 제공
- Content Collections: 타입 안전 데이터 파일 관리 (TypeScript 스키마 검증 내장)
- Markdown/MDX 파일 지원으로 향후 블로그 확장 유리

**단점**:
- `.astro` 파일 문법 (Frontmatter + HTML 혼합) 신규 학습 필요
- 기존 JSX 컴포넌트를 `.astro` 파일로 재작성 필요 (단순하나 작업량 증가)
- React-only 상태관리(useState, useEffect 등)는 `client:` 지시어 필요
- 아일랜드 아키텍처 개념 이해 필요 (단, 포트폴리오 수준에서는 부분적 적용만 필요)

**결론**: 정적 포트폴리오 목적에 가장 최적화된 도구. 성능 지표 최상.

---

### 최종 비교 판단

| 기준 | Vite+React | Next.js | Astro |
|------|:---:|:---:|:---:|
| 정적 포트폴리오 적합성 | ★★★★☆ | ★★☆☆☆ | ★★★★★ |
| 학습 비용 (React 경험자) | ★★★★★ | ★★★★☆ | ★★★☆☆ |
| 성능 (Lighthouse) | ★★★★☆ | ★★★☆☆ | ★★★★★ |
| GitHub Pages 설정 난이도 | ★★★★★ | ★★☆☆☆ | ★★★★★ |
| 보수적 기술 선정 | ★★★★★ | ★★★☆☆ | ★★★★☆ |
| 현재 코드 이식 용이성 | ★★★★★ | ★★★☆☆ | ★★★☆☆ |

**권장 선택지**:

1. **Astro** — 성능 최우선, 정석적인 정적 포트폴리오 도구. `.astro` 문법 학습 비용을 감수할 수 있다면 최선.
2. **Vite 5 + React 18** — 보수적 선정, 학습 비용 0, React 코드베이스 그대로 유지. 현재 명세의 기본 채택안.

> **Next.js는 세 옵션 중 이 포트폴리오에 가장 부적합**: 복잡한 GitHub Pages 설정, 과도한 번들 크기, 정기적 breaking changes 부담이 이점을 상회한다.

---

## 결정 요약표

| 항목 | 선택 | 근거 |
|------|------|------|
| Build Tool | **Vite 5** | 표준, 빠름, GitHub Pages 완벽 지원 |
| React | **React 18** | 2년 이상 안정, 완전한 생태계 지원 |
| Language | **TypeScript 5 (strict)** | 빌드 타임 데이터 유효성 검증 |
| CSS | **Vanilla CSS (정리)** | 10개 컴포넌트, 마이그레이션 위험 최소 |
| Linting | **ESLint 9 flat + Prettier 3** | 2024+ 표준, 공식 권장 방식 |
| CI/CD | **peaceiris/actions-gh-pages** | 검증된 안정성, 간단한 설정 |
| Package Manager | **npm** | 기본 내장, 포트폴리오 규모에 충분 |
| Node | **Node 20 LTS** | Active LTS, 안정성 검증 |
