# Data Model: 포트폴리오 콘텐츠 타입

**Feature**: 001-modernize-portfolio
**File**: `src/types/portfolio.ts`

---

## 개요

포트폴리오 데이터는 컴포넌트 코드에서 완전히 분리되어 `src/data/` 디렉토리의 TypeScript 파일로 관리된다. 모든 타입은 `src/types/portfolio.ts`에 정의하고 데이터 파일과 컴포넌트 모두 이를 import한다.

---

## 타입 정의

### Period (공통: 기간)

```typescript
interface Period {
  start: string;           // 형식: "YYYY.MM" 또는 "YYYY"
  end: string | "current"; // 형식: "YYYY.MM", "YYYY" 또는 재직/재학 중일 경우 "current"
}
```

**검증 규칙**:
- `start`는 비어 있을 수 없음
- `end`가 날짜 문자열인 경우 `start`보다 이후여야 함

---

### Experience (경력)

```typescript
interface Experience {
  id: string;           // 고유 식별자 (예: "baemin-2020")
  role: string;         // 직책 (예: "Frontend Engineer")
  company: string;      // 회사명 (예: "우아한형제들")
  period: Period;       // 재직 기간
  description: string[]; // 역할 설명 (각 항목이 하나의 문단)
  link?: string;        // 회사 또는 프로젝트 외부 링크 (선택)
}
```

**검증 규칙**:
- `id`: 전체 experiences 배열 내 고유해야 함
- `role`, `company`: 비어 있을 수 없음
- `description`: 최소 1개 항목

**예시**:
```typescript
const experience: Experience = {
  id: "baemin-2020",
  role: "Frontend Engineer",
  company: "우아한형제들",
  period: { start: "2020.07", end: "current" },
  description: [
    "B마트 서비스 프론트엔드 개발",
    "디자인 시스템 컴포넌트 라이브러리 유지보수",
  ],
  link: "https://www.woowahan.com",
};
```

---

### Education (학력)

```typescript
interface Education {
  id: string;          // 고유 식별자 (예: "hanyang-phd-2022")
  school: string;      // 학교명 (예: "한양대학교")
  degree: string;      // 학위 (예: "PhD Candidate", "M.S.", "B.S.")
  major: string;       // 전공 (예: "Computer Science")
  period: Period;      // 재학 기간
  advisor?: string;    // 지도교수명 (선택)
}
```

**검증 규칙**:
- `id`: 전체 educations 배열 내 고유해야 함
- `school`, `degree`, `major`: 비어 있을 수 없음

**예시**:
```typescript
const education: Education = {
  id: "hanyang-phd-2022",
  school: "한양대학교",
  degree: "PhD Candidate",
  major: "Computer Science",
  period: { start: "2022", end: "current" },
  advisor: "홍길동 교수",
};
```

---

### MaterialType (자료 유형)

```typescript
type MaterialType = "pdf" | "poster" | "video" | "slides" | "demo";
```

---

### Material (연구 자료)

```typescript
interface Material {
  type: MaterialType;  // 자료 유형
  url: string;         // 자료 URL (절대 경로 또는 assets/ 상대 경로)
  visible: boolean;    // 화면에 버튼으로 표시할지 여부
}
```

**검증 규칙**:
- `url`: 비어 있을 수 없음
- `visible: false`인 항목은 렌더링하지 않음 (데이터는 보존)

---

### Research (연구)

```typescript
interface Research {
  id: string;           // 고유 식별자 (예: "pacificvis-2022")
  title: string;        // 논문 제목
  authors: string[];    // 저자 목록 (표시 순서대로)
  venue: string;        // 학회 또는 저널명 (예: "IEEE VIS 2022")
  year: number;         // 발표 연도
  thumbnail?: string;   // 썸네일 이미지 경로 (assets/ 기준, 선택)
  materials: Material[]; // 관련 자료 목록 (PDF, 포스터, 영상 등)
}
```

**검증 규칙**:
- `id`: 전체 researches 배열 내 고유해야 함
- `title`, `venue`: 비어 있을 수 없음
- `authors`: 최소 1명
- `year`: 4자리 양의 정수

**예시**:
```typescript
const research: Research = {
  id: "pacificvis-2022",
  title: "Visualizing Urban Mobility Patterns",
  authors: ["Chanhee Park", "Colleague A", "Colleague B"],
  venue: "IEEE PacificVis 2022",
  year: 2022,
  thumbnail: "assets/researches/pacificvis-2022-thumb.jpg",
  materials: [
    { type: "pdf", url: "assets/researches/pacificvis-2022.pdf", visible: true },
    { type: "poster", url: "assets/researches/pacificvis-2022-poster.pdf", visible: true },
    { type: "video", url: "https://youtube.com/...", visible: true },
  ],
};
```

---

## 데이터 파일 구조

### `src/data/experiences.ts`
```typescript
import type { Experience } from "../types/portfolio";

export const experiences: Experience[] = [
  // 최신 경력 순서
];
```

### `src/data/educations.ts`
```typescript
import type { Education } from "../types/portfolio";

export const educations: Education[] = [
  // 최신 학력 순서
];
```

### `src/data/researches.ts`
```typescript
import type { Research } from "../types/portfolio";

export const researches: Research[] = [
  // 최신 발표 순서
];
```

---

## 엔티티 관계

```
Research ──── materials ──→ Material[]
         └─── authors  ──→ string[]

Experience ── period ──→ Period
Education  ── period ──→ Period
```

- `Research`와 `Experience`, `Education` 간 직접 관계 없음 (포트폴리오는 각 섹션이 독립)
- `Material`은 `Research`에 내포된 값 객체 (별도 ID 없음)
- 저자 이름(`authors`)은 문자열로 관리, 별도 `Author` 엔티티 없음

---

## 현재 데이터 이전 계획

| 현재 위치 (`data.jsx`) | 이전 위치 | 변경 사항 |
|---|---|---|
| `experiences` 배열 | `src/data/experiences.ts` | JSX 제거, TypeScript 타입 적용 |
| `educations` 배열 | `src/data/educations.ts` | 동일 |
| `researches` 배열 | `src/data/researches.ts` | 동일 |
| 인라인 JSX (설명문) | `description: string[]` | JSX를 순수 문자열 배열로 변환 |
