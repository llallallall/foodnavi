# 🎨 Design Guidelines (FoodNavi Project)

이 지침은 프로젝트의 시각적 일관성과 유지보수 효율성을 극대화하기 위해 정의한다.

## 1. 컴포넌트 아키텍처 (Atomic Design 기반)
에이전트는 모든 UI 요소를 아래 분류에 따라 `/components/` 하위 폴더에 생성한다.
- **`/components/common/` (Primitive):** 외부 라이브러리 없이 Tailwind로 직접 구현한 기초 UI (Button, Input, Badge, Card, Modal, Spinner 등).
- **`/components/layout/` (Structure):** 페이지의 전체적인 틀을 잡는 요소 (GNB, Footer, Sidebar, PageHeader 등).
- **`/components/features/` (Domain):** 특정 비즈니스 로직이 포함된 복잡한 컴포넌트 (수출진단 폼, 뉴스 리스트 아이템 등).

## 2. 컴포넌트 개발 원칙
- **직접 구현 우선:** 간단한 UI 요소는 `shadcn/ui`를 설치하지 않고 Tailwind CSS로 직접 구현한다. 라이브러리 의존성을 최소화하여 번들 크기를 줄이고 커스텀 자유도를 높인다.
- **headless UI 활용:** 드롭다운이나 콤보박스처럼 접근성(A11y) 구현이 까다로운 요소는 `Radix UI` 또는 `@headlessui/react`의 로직만 가져오고 스타일은 직접 입힌다.
- **Props 타입 정의:** 모든 컴포넌트는 `interface` 또는 `type`을 통해 명확한 Props 타입을 정의하며, 기본값을 적극 활용한다.

## 3. 스타일링 컨벤션
- **Tailwind CSS 전용:** 인라인 스타일이나 외부 CSS 파일을 사용하지 않는다.
- **테마 변수 사용:** `tailwind.config.ts`에 정의된 색상(Primary, Secondary, Accent 등)과 간격 수치만 사용한다. 임의의 수치(예: `w-[342px]`) 사용은 지양하며, 부득이한 경우 주석으로 이유를 명시한다.
- **반응형 설계:** 모바일 우선(Mobile-First) 원칙을 따르며, `sm:`, `md:`, `lg:` 접두사를 활용해 중단점별 디자인을 반드시 적용한다.