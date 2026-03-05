# Quickstart: 포트폴리오 개발 환경 설정

**Feature**: 001-modernize-portfolio
**Target**: Vite 5 + React 18 + TypeScript 5

---

## 사전 요구사항

| 도구 | 최소 버전 | 확인 명령 |
|------|-----------|-----------|
| Node.js | 20.x LTS | `node --version` |
| npm | 10.x | `npm --version` |
| Git | 2.x | `git --version` |

**Node 버전 관리** (권장):
```bash
# nvm 사용 시
nvm use  # .nvmrc (Node 20) 자동 적용

# 또는 직접 설치: https://nodejs.org/en/download
```

---

## 설치

```bash
# 저장소 클론
git clone https://github.com/chanhee-park/chanhee-park.github.io.git
cd chanhee-park.github.io

# 의존성 설치
npm install
```

---

## 개발 서버 실행

```bash
npm run dev
```

- 브라우저가 자동으로 `http://localhost:5173`에 열림
- 파일 저장 시 HMR(Hot Module Replacement)로 즉시 반영
- TypeScript 오류는 터미널에 표시됨

---

## 빌드

```bash
# 프로덕션 빌드 (dist/ 생성)
npm run build

# 빌드 결과물 로컬 미리보기
npm run preview
```

`dist/` 폴더가 GitHub Pages에 배포되는 최종 결과물이다.

---

## 코드 품질 도구

```bash
# ESLint 실행 (코드 품질 검사)
npm run lint

# ESLint 자동 수정
npm run lint:fix

# Prettier 포맷팅 적용
npm run format
```

### 에디터 설정 (VS Code 권장)

`.vscode/settings.json` 파일을 생성하여 자동 포맷팅을 활성화한다:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

**권장 확장**:
- `esbenp.prettier-vscode` (Prettier)
- `dbaeumer.vscode-eslint` (ESLint)

---

## 콘텐츠 업데이트

포트폴리오 데이터는 `src/data/` 폴더의 파일에서 직접 수정한다.

### 새 경력 추가

`src/data/experiences.ts` 파일을 열고 배열에 항목을 추가한다:

```typescript
{
  id: "company-yyyy",         // 고유 ID (중복 없이)
  role: "직책명",
  company: "회사명",
  period: { start: "YYYY.MM", end: "current" }, // 재직 중이면 "current"
  description: ["역할 설명 문단 1", "역할 설명 문단 2"],
  link: "https://company.com", // 선택사항
}
```

### 새 연구 추가

`src/data/researches.ts` 파일을 열고 배열에 항목을 추가한다:

```typescript
{
  id: "venue-yyyy",
  title: "논문 제목",
  authors: ["Chanhee Park", "공저자명"],
  venue: "학회/저널명 YYYY",
  year: 2026,
  thumbnail: "assets/researches/파일명-thumb.jpg", // 선택사항
  materials: [
    { type: "pdf", url: "assets/researches/파일명.pdf", visible: true },
    { type: "poster", url: "assets/researches/파일명-poster.pdf", visible: true },
  ],
}
```

> **타입 오류가 발생하면**: 필드 이름·타입이 `src/types/portfolio.ts`에 정의된 인터페이스와 일치하는지 확인한다.

---

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포한다.

```bash
git add .
git commit -m "feat: add new experience"
git push origin main
```

배포 상태는 GitHub 저장소의 **Actions** 탭에서 확인할 수 있다. push 후 ~3분 이내에 [chanhee-park.github.io](https://chanhee-park.github.io)에 반영된다.

---

## 주요 npm 스크립트 정리

| 스크립트 | 명령 | 설명 |
|---------|------|------|
| `npm run dev` | `vite` | 개발 서버 실행 (HMR 포함) |
| `npm run build` | `tsc && vite build` | 타입 검사 후 프로덕션 빌드 |
| `npm run preview` | `vite preview` | 빌드 결과물 로컬 미리보기 |
| `npm run lint` | `eslint src` | ESLint 실행 |
| `npm run lint:fix` | `eslint src --fix` | ESLint 자동 수정 |
| `npm run format` | `prettier --write src` | Prettier 포맷팅 |

---

## 프로젝트 구조 요약

```
src/
├── main.tsx          # 진입점
├── components/       # React 컴포넌트
├── data/             # 포트폴리오 콘텐츠 (수정 대상)
├── types/            # TypeScript 타입 정의
└── styles/           # CSS 파일

assets/               # PDF, 이미지, 영상 (변경 없음)
.github/workflows/    # GitHub Actions CI/CD
```
