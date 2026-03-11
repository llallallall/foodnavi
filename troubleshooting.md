# Troubleshooting Log (FoodNavi Migration)

## 1. Zod `literal` ErrorMap 호환성 에러 발생
- **이슈 내용:** `npm run lint` 및 `build` 수행 시 `z.literal(true, { errorMap: ... })` 구문에서 `Object literal may only specify known properties` 타입 에러 발생. (TS2769)
- **원인 분석:** 특정 버전의 Zod에서는 `z.literal`의 두 번째 인수로 커스텀 에러 메시지(errorMap) 객체를 엄격하게 지원하지 않는 현상이 발생함.
- **해결 방법:** `z.literal(true)` 대신 `z.boolean().refine((val) => val === true, { message: "..." })` 형태로 변경하여 커스텀 에러 메시지와 true 제약을 동시에 안정적으로 지원함.
- **재발 방지책:** 향후 약관 동의 등 `true` 값만을 허용하는 체크박스 밸리데이션에는 `z.boolean().refine` 구문을 우선적으로 사용한다.

## 2. TypeScript `catch (err: any)` 린트 에러 (ESLint `no-explicit-any`)
- **이슈 내용:** `DiagnosisForm.tsx`의 폼 제출 핸들러 내 `catch (err: any)`에서 ESLint 경고(`@typescript-eslint/no-explicit-any`) 발생 후 빌드 실패(Strict 모드).
- **원인 분석:** TypeScript의 최신 Strict 린트 룰에서는 `catch` 블록의 에러 타입을 `any`로 지정하는 것을 금지함. (기본적으로 `unknown` 또는 생략을 권장)
- **해결 방법:** `catch (err: unknown)`으로 명시한 후, 내부에서 `if (err instanceof Error)`를 통해 타입을 좁혀(Type Narrowing) 안전하게 `.message` 속성에 접근하도록 수정함.
- **재발 방지책:** 어플리케이션 내 모든 Try-Catch 블록 에러 핸들링은 `err: unknown`과 Type Guard 패턴(`instanceof Error`)을 조합하여 사용한다.
