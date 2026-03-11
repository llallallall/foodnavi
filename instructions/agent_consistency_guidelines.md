**🤖 Agent Consistency Guidelines: Project FoodNavi**

## **1\. 가이드라인 참조 및 우선순위**

* 모든 세부 지침 파일은 /instructions/ 폴더 내에 위치한다.  
* 에이전트는 작업을 시작할 때 반드시 /instructions/ 내의 다음 파일들을 최우선으로 읽고 맥락을 파악해야 한다.  
  1. agent\_consistency\_guidelines.md (본 파일)  
  2. security\_guidelines.md (OWASP 및 데이터 보안)  
  3. design\_guidelines.md (커스텀 컴포넌트 및 UI/UX)

## **2\. 기술 스택 및 라이브러리 정책**

* **Framework:** Next.js 14+ (App Router)  
* **Language:** TypeScript (Strict Mode)  
* **Styling:** Tailwind CSS (표준 유틸리티 중심)  
* **UI Component:** **shadcn/ui 사용 지양.** 간단한 UI 요소(Button, Input 등)는 Tailwind를 활용해 /components/common/에 직접 구현하여 라이브러리 의존성을 최소화한다.  
* **Database/Auth:** Supabase (Client & Auth)  
* **ORM:** Prisma

## **3\. 디렉토리 구조 (App Router 기준)**

에이전트는 지정된 구조 외에 임의로 폴더를 생성하지 않는다.

* instructions/: AI 에이전트 전용 가이드라인 및 보안/디자인 지침  
* app/: 라우팅 및 페이지 레이아웃  
* components/common/: 직접 구현한 재사용 가능 기초 UI 컴포넌트 (Button, Modal 등)  
* components/features/: 특정 기능 단위 컴포넌트 (수출진단 폼, 가이드 리스트 등)  
* lib/: Supabase 클라이언트, Prisma 설정 및 공통 유틸리티  
* hooks/: 비즈니스 로직 분리를 위한 커스텀 리액트 훅  
* types/: 전역 TypeScript 인터페이스 및 타입 정의

## **4\. 작업 기록 및 피드백 프로토콜 (핵심)**

### **📝 작업 기록 수행 (work\_history.md)**

사용자가 \*\*"작업기록수행"\*\*이라고 명령하면, 에이전트는 즉시 직전 기록에 이어서 현재까지의 변경 사항을 프로젝트 루트의 work\_history.md에 추가한다.

* **포맷:** \#\# \[YYYY-MM-DD HH:mm\] 작업 내역 요약  
* **내용:** \- 수행한 핵심 기능 구현 및 수정 사항  
  * 생성/수정된 파일 목록  
  * 주요 로직의 변경 이유 및 참고사항

### **🛠 트러블슈팅 기록 (troubleshooting.md)**

패키지 충돌, 빌드 오류, 타입 에러 등 작업 중 발생한 기술적 이슈를 해결한 경우, 반드시 troubleshooting.md에 기록하여 동일한 실수를 방지한다.

* **항목:** 이슈 내용, 원인 분석, 해결 방법, 재발 방지책

## **5\. 보안 및 코드 작성 원칙**

* **보안:** /instructions/security\_guidelines.md를 준수하며, 특히 Supabase RLS 정책과 환경 변수 노출 방지에 만전을 기한다.  
* **일관성:** 변수/함수명은 camelCase, 컴포넌트명은 PascalCase를 사용한다.  
* **패키지 관리:** 새로운 npm 패키지 설치가 필요한 경우, 반드시 사용자에게 설치 목적을 설명하고 승인을 받은 후 진행한다.

## **6\. 작업 개시 프로토콜 (Pre-flight Check)**

모든 세션 또는 새로운 작업 단위가 시작될 때 에이전트는 다음 단계를 수행한다.

1. /instructions/ 내의 모든 지침을 재학습한다.  
2. 현재 요청받은 작업 범위를 요약한다.  
3. 해당 작업이 기존 보안/디자인 지침과 충돌하는 지점이 있는지 확인하고 보고한다.  
4. 사용자의 최종 확인 후 코딩을 시작한다.

### ---

