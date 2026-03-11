
**🚀 Migration Guideline: Imweb to Next.js & Supabase**

이 지침은 기존 아이엠웹 기반 사이트(https://foodnavi.imweb.me/)를 Next.js 환경으로 완벽하게 이관하기 위한 기술적 절차와 체크리스트를 정의한다.

## **1\. URL 구조 매핑 및 SEO 보존 (Critical)**

아이엠웹의 숫자 기반 URL 구조를 의미론적(Semantic) URL로 변경하되, 기존 검색 엔진 지수를 보존해야 한다.

* **URL 매핑 테이블:**  
  * / → / (Home)  
  * /25, /27 (무료진단 신청) → /diagnosis/apply  
  * /23 (서비스 소개) → /services  
  * /33 (가이드 & 뉴스) → /community/guide  
* **301 Redirect 설정:** next.config.js의 redirects 설정을 통해 기존 URL 접속 시 새 URL로 영구 이동 처리한다.  
* **Metadata:** 각 페이지의 기존 Meta Title과 Description을 추출하여 Next.js의 Metadata 객체로 이관한다.

## **2\. 데이터 마이그레이션 (Database)**

아이엠웹의 폐쇄형 데이터를 Supabase PostgreSQL 구조로 재설계한다.

* **콘텐츠 추출:** 아이엠웹 관리자 페이지에서 게시글(뉴스/가이드) 및 회원 데이터를 CSV로 추출한다.  
* **테이블 설계 (Supabase):**  
  * profiles: 회원 정보 (아이엠웹 회원 이관)  
  * posts: 가이드 및 뉴스 게시글 (카테고리 구분)  
  * diagnosis\_requests: 무료/유료 진단 신청 데이터 (폼 데이터 매핑)  
* **비밀번호 처리:** 아이엠웹의 암호화된 비밀번호는 이전이 불가능하므로, Supabase Auth의 '비밀번호 재설정' 기능을 활용한 사용자 전환 시나리오를 설계한다.

## **3\. 에셋 마이그레이션 (Assets)**

이미지 및 파일의 호스팅 위치를 변경한다.

* **이미지 다운로드:** 아이엠웹 CDN(cdn.imweb.me)에 호스팅된 모든 원본 이미지를 다운로드한다.  
* **Supabase Storage:** 모든 에셋을 Supabase Storage의 public 버킷으로 업로드한다.  
* **Next.js Image Optimization:** 이관된 이미지는 next/image 컴포넌트를 사용하여 WebP/Avif 포맷으로 자동 변환되도록 구현한다.

## **4\. 핵심 기능 구현 (Functionality)**

아이엠웹의 위젯 기능을 Next.js 커스텀 로직으로 대체한다.

* **무료 진단 폼 (The Funnel):**  
  * 기존 폼 항목을 분석하여 React Hook Form \+ Zod로 유효성 검사 로직을 재구축한다.  
  * 제출 시 Supabase DB 저장 및 관리자 알림(Email/Kakao) 발송 로직을 연결한다.  
* **게시판 (Community):**  
  * 아이엠웹의 게시판 위젯 대신 Next.js의 Server Components와 ISR(Incremental Static Regeneration)을 활용해 초고속 블로그 페이지를 구현한다.

## **5\. 단계별 이관 프로토콜 (Execution)**

1. **\[분석\]** 아이엠웹 사이트의 모든 페이지를 크롤링하거나 수동 전수조사하여 누락되는 메뉴가 없는지 확인한다.  
2. **\[설계\]** /instructions/project\_identity.md의 마케팅 전략에 맞춰 새로운 페이지 레이아웃을 설계한다.  
3. **\[개발\]** 공통 컴포넌트(components/common)를 먼저 개발하고 페이지 단위로 이관을 진행한다.  
4. **\[검증\]** 각 페이지의 반응형 동작, 폼 제출 로직, SEO 태그 정상 작동 여부를 테스트한다.  
5. **\[전환\]** DNS 설정을 변경하고 Vercel 배포를 완료한 뒤, 기존 도메인 연결을 확인한다.