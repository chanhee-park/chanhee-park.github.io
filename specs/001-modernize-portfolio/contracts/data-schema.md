# Contract: 포트폴리오 데이터 스키마

**Type**: 콘텐츠 데이터 인터페이스 계약
**Consumers**: `src/components/*.tsx` (읽는 쪽)
**Producers**: `src/data/*.ts` (쓰는 쪽)
**Definition file**: `src/types/portfolio.ts`

---

## 계약 목적

이 계약은 포트폴리오 콘텐츠를 업데이트하는 **편집자(작성자)**와 콘텐츠를 화면에 렌더링하는 **컴포넌트** 사이의 데이터 형식을 명세한다.

- 편집자는 이 계약에 정의된 형식에 따라 데이터를 입력해야 한다.
- 컴포넌트는 이 계약의 타입을 신뢰하여 렌더링하며, 입력 유효성 검사는 TypeScript 컴파일러가 담당한다.
- **계약 위반(타입 오류)은 빌드 단계(`npm run build`)에서 감지**되어 잘못된 데이터가 배포되지 않도록 보장한다.

---

## 데이터 파일 위치

| 섹션 | 파일 경로 | 수출(export) |
|------|-----------|-------------|
| 경력 | `src/data/experiences.ts` | `export const experiences: Experience[]` |
| 학력 | `src/data/educations.ts` | `export const educations: Education[]` |
| 연구 | `src/data/researches.ts` | `export const researches: Research[]` |

---

## Experience 스키마

```typescript
interface Period {
  start: string;            // "YYYY.MM" 또는 "YYYY"
  end: string | "current";  // "YYYY.MM", "YYYY", 또는 "current"
}

interface Experience {
  id: string;               // 필수. 전체 배열 내 고유. 예: "baemin-2020"
  role: string;             // 필수. 직책. 예: "Frontend Engineer"
  company: string;          // 필수. 회사명. 예: "우아한형제들"
  period: Period;           // 필수. 재직 기간
  description: string[];    // 필수. 역할 설명 (빈 배열 불허)
  link?: string;            // 선택. 회사/프로젝트 URL
}
```

**유효한 입력 예시**:
```typescript
{
  id: "baemin-2020",
  role: "Frontend Engineer",
  company: "우아한형제들",
  period: { start: "2020.07", end: "current" },
  description: ["B마트 서비스 프론트엔드 개발"],
}
```

**잘못된 입력 예시** (빌드 오류 발생):
```typescript
{
  // id 없음 → 오류
  role: "Engineer",
  company: "회사",
  period: { start: "2020.07" },  // end 없음 → 오류
  description: [],               // 빈 배열 → 런타임 경고
}
```

---

## Education 스키마

```typescript
interface Education {
  id: string;          // 필수. 전체 배열 내 고유. 예: "hanyang-phd-2022"
  school: string;      // 필수. 학교명. 예: "한양대학교"
  degree: string;      // 필수. 학위. 예: "PhD Candidate", "M.S.", "B.S."
  major: string;       // 필수. 전공. 예: "Computer Science"
  period: Period;      // 필수. 재학 기간
  advisor?: string;    // 선택. 지도교수명
}
```

---

## Research 스키마

```typescript
type MaterialType = "pdf" | "poster" | "video" | "slides" | "demo";

interface Material {
  type: MaterialType;  // 필수. 허용값: pdf | poster | video | slides | demo
  url: string;         // 필수. 파일 경로 또는 외부 URL
  visible: boolean;    // 필수. false이면 화면에 버튼을 렌더링하지 않음
}

interface Research {
  id: string;           // 필수. 전체 배열 내 고유. 예: "pacificvis-2022"
  title: string;        // 필수. 논문 제목
  authors: string[];    // 필수. 저자 목록 (빈 배열 불허). 발표자 이름은 "Chanhee Park"
  venue: string;        // 필수. 학회/저널명 + 연도. 예: "IEEE VIS 2022"
  year: number;         // 필수. 발표 연도. 4자리 정수
  thumbnail?: string;   // 선택. 썸네일 이미지 경로 (assets/ 기준)
  materials: Material[]; // 필수. 자료 목록 (빈 배열 허용)
}
```

---

## 규칙 요약

| 규칙 | 설명 |
|------|------|
| **id 고유성** | 각 배열 내에서 `id` 값이 중복되면 안 된다 |
| **저자 이름 일관성** | 포트폴리오 소유자의 이름은 `"Chanhee Park"`으로 통일 (저자 강조 표시에 사용됨) |
| **assets 경로** | 로컬 파일은 `assets/`로 시작하는 상대 경로 사용. 외부 URL은 `https://`로 시작 |
| **period.end** | 현재 재직/재학 중인 경우 `"current"` 사용 |
| **MaterialType** | `"pdf" | "poster" | "video" | "slides" | "demo"` 외의 값은 빌드 오류 |

---

## 호환성 & 진화

- **Breaking change**: 기존 필드 제거 또는 필수 필드 추가는 breaking change이며, 모든 데이터 파일을 동시에 업데이트해야 한다.
- **Non-breaking change**: 선택 필드(`?`)를 추가하거나 `MaterialType` 유니온에 값을 추가하는 것은 non-breaking이다.
- 계약 변경 시 이 문서와 `src/types/portfolio.ts`를 동시에 업데이트한다.
