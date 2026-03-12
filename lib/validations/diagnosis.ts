import { z } from "zod"

export const diagnosisFormSchema = z.object({
  company_name: z.string().min(1, "회사명을 입력해주세요."),
  contact_name: z.string().min(1, "담당자명(직위, 이름)을 입력해주세요."),
  contact_email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  contact_phone_work: z.string().optional(),
  contact_phone_mobile: z.string().min(1, "휴대전화 번호를 입력해주세요."),
  
  // 2. 제품 정보 (기존 + 신규)
  product_name: z.string().min(1, "제품명을 입력해주세요."),
  category: z.string().min(1, "제품군(품목군)을 입력해주세요."),
  product_description: z.string().min(10, "원재료 및 성분명(배합비 포함)을 10자 이상 입력해주세요."), // 재사용: 원재료 배합비
  nutrition_facts: z.string().min(1, "영양성분표를 입력해주세요."),
  shelf_life: z.string().min(1, "유통기한(제조일로부터 몇년/몇개월)을 입력해주세요."),
  net_weight: z.string().min(1, "내용량을 입력해주세요."),
  storage_method: z.string().min(1, "보존방법(보관온도)을 입력해주세요."),
  frozen_heating_info: z.string().optional(), // 냉동식품의 경우
  consumption_method: z.string().min(1, "섭취방법을 입력해주세요."),
  cooking_instructions: z.string().min(1, "가열조리 필요 여부 및 방법을 입력해주세요."),
  country_of_origin: z.string().min(1, "원산국을 입력해주세요."),
  manufacturing_flowchart: z.string().min(10, "제조공정도를 상세히 입력해주세요."),
  features: z.string().min(10, "제품의 특장점을 10자 이상 입력해주세요."),

  // 3. 무역 및 세부 정보
  sales_channel: z.string().min(1, "판매처를 입력해주세요."),
  fob_price: z.string().min(1, "납품가격(FOB)을 입력해주세요."),
  exw_price: z.string().min(1, "공장 출고 가격을 입력해주세요."),
  lead_time: z.string().min(1, "발주리드타임을 입력해주세요."),
  certifications: z.string().min(1, "인증기관 인허가 보유 여부를 입력해주세요."),
  export_experience: z.string().min(1, "수출 경험 여부를 선택해주세요."),
  has_export_label: z.string().min(1, "수출용 라벨 보유 여부를 선택해주세요."),
  has_jp_catalog: z.string().min(1, "일본어 카탈로그 보유 여부를 선택해주세요."),
  
  // 기타 정보
  website_url: z.string().url("유효한 URL을 입력해주세요.").or(z.literal('')),
  requested_service: z.string().min(1, "원하는 서비스를 선택해주세요."),
  other_inquiries: z.string().optional(),
  privacy_consent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해야 합니다.",
  }),
  // 파일 업로드 관련 메타데이터 (클라이언트에서 File 객체로 관리 후 서버 URL 매핑 예정)
  // 여기서는 단순히 파일 존부 혹은 파일 리스트를 허용하도록 any 사용 (간단화를 위해)
  export_label_file: z.any().optional(),
  jp_catalog_file: z.any().optional(),
  product_images: z.any().optional(),
})

export type DiagnosisFormValues = z.infer<typeof diagnosisFormSchema>
