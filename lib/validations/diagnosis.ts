import { z } from "zod"

export const diagnosisFormSchema = z.object({
  company_name: z.string().min(1, "회사명을 입력해주세요."),
  contact_name: z.string().min(1, "담당자명(직위, 이름)을 입력해주세요."),
  contact_email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  contact_phone_work: z.string().optional(),
  contact_phone_mobile: z.string().min(1, "휴대전화 번호를 입력해주세요."),
  category: z.string().min(1, "수출용 제품 카테고리를 입력해주세요."),
  product_name: z.string().min(1, "제품명을 입력해주세요."),
  product_description: z.string().min(10, "제품 상세설명(원재료 포함)을 10자 이상 입력해주세요."),
  sales_channel: z.string().min(1, "판매처를 입력해주세요."),
  fob_price: z.string().min(1, "납품가격(FOB)을 입력해주세요."),
  exw_price: z.string().min(1, "공장 출고 가격을 입력해주세요."),
  lead_time: z.string().min(1, "발주리드타임을 입력해주세요."),
  certifications: z.string().min(1, "인증기관 인허가 보유 여부를 입력해주세요."),
  has_export_label: z.string().min(1, "보유 여부를 선택해주세요."),
  has_jp_catalog: z.string().min(1, "보유 여부를 선택해주세요."),
  website_url: z.string().url("유효한 URL을 입력해주세요.").or(z.literal('')),
  export_experience: z.string().min(1, "수출 경험 여부를 선택해주세요."),
  features: z.string().min(10, "제품의 특장점을 10자 이상 입력해주세요."),
  requested_service: z.string().min(1, "원하는 서비스를 선택해주세요."),
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
