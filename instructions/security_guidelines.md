# 🛡 Security Guidelines (FoodNavi Project)

이 프로젝트는 OWASP Top 10 표준을 준수하며, 데이터 무결성과 사용자 개인정보 보호를 최우선으로 한다.

## 1. 데이터베이스 보안 (Supabase RLS)
- **RLS 필수 활성화:** 모든 테이블은 생성 즉시 `Row Level Security`를 활성화한다.
- **최소 권한 정책:** `authenticated` 또는 `anon` 역할별로 `SELECT`, `INSERT`, `UPDATE`, `DELETE` 권한을 세밀하게 분리한다. (예: 사용자는 자신의 데이터만 조회 가능)
- **Service Role 보호:** `service_role` 키는 오직 서버 사이드(Edge Functions, Server Actions)에서만 사용하며, 절대 클라이언트에 노출하지 않는다.

## 2. 데이터 보호 및 환경 변수 관리
- **환경 변수 엄격 구분:** 클라이언트에서 접근 가능한 변수는 반드시 `NEXT_PUBLIC_` 접두사를 붙이며, 그 외의 민감 정보(DB URL, API Secret)는 접두사 없이 서버 전용으로 관리한다.
- **Zod 검증 필수:** 클라이언트에서 서버로 넘어오는 모든 데이터(Form submission, URL parameters)는 `zod` 스키마를 통해 서버 측에서 반드시 유효성을 검증한다.

## 3. Next.js 보안 아키텍처
- **Server Actions 보안:** 모든 서버 액션은 내부에서 세션 확인(`supabase.auth.getUser()`)을 거친 후 로직을 수행한다.
- **XSS 방지:** `dangerouslySetInnerHTML`은 원칙적으로 금지한다. 외부 HTML을 렌더링해야 할 경우 반드시 `dompurify` 등을 이용한 새니타이징(Sanitizing)을 거친 후 사용자 승인을 받는다.
- **CSRF 방지:** Next.js의 기본 보안 기능을 활용하며, 폼 제출 시 필요한 토큰 관리를 철저히 한다.

## 4. 로깅 및 모니터링
- 모든 권한 위반 시도나 비정상적인 API 요청은 로그로 기록될 수 있도록 설계한다.