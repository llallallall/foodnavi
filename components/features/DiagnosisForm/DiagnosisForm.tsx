"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { diagnosisFormSchema, type DiagnosisFormValues } from "@/lib/validations/diagnosis"
import { Button } from "@/components/common/Button"
import { Input } from "@/components/common/Input"
import { Textarea } from "@/components/common/Textarea"
import { Checkbox } from "@/components/common/Checkbox"
import { Label } from "@/components/common/Label"
import { createClient } from "@/lib/supabase/client"

export function DiagnosisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<DiagnosisFormValues>({
    resolver: zodResolver(diagnosisFormSchema),
    defaultValues: {
      category: "",
      has_export_label: "no",
      has_jp_catalog: "no",
      export_experience: "none",
      requested_service: "수출 가능성 진단 (무료)",
      frozen_heating_info: "",
      other_inquiries: "",
    }
  })

  async function onSubmit(data: DiagnosisFormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Data insertion into Supabase (Files would need storage logic first, skipping for initial MVP)
      const payload: any = {
        company_name: data.company_name,
        contact_name: data.contact_name,
        contact_email: data.contact_email,
        contact_phone: data.contact_phone_mobile,
        product_name: data.product_name,
        product_description: data.product_description,
        hs_code: data.category,
        type: 'FREE',
        status: 'PENDING',
        // Additional Fields stored as un-typed JSONb for now if needed, or ignored if Supabase columns not ready.
        // Assuming we dump detailed info into a JSON column `raw_data` for MVP.
        raw_data: {
          nutrition_facts: data.nutrition_facts,
          shelf_life: data.shelf_life,
          net_weight: data.net_weight,
          storage_method: data.storage_method,
          frozen_heating_info: data.frozen_heating_info,
          consumption_method: data.consumption_method,
          cooking_instructions: data.cooking_instructions,
          country_of_origin: data.country_of_origin,
          manufacturing_flowchart: data.manufacturing_flowchart,
          features: data.features,
          sales_channel: data.sales_channel,
          fob_price: data.fob_price,
          exw_price: data.exw_price,
          lead_time: data.lead_time,
          certifications: data.certifications,
          export_experience: data.export_experience,
          has_export_label: data.has_export_label,
          has_jp_catalog: data.has_jp_catalog,
          other_inquiries: data.other_inquiries,
        }
      };

      const { error } = await supabase
        .from('diagnosis_requests')
        .insert([payload])

      if (error) throw error

      setSubmitSuccess(true)
      reset()
    } catch (err: unknown) {
      console.error(err)
      if (err instanceof Error) {
        setSubmitError(err.message)
      } else {
        setSubmitError("신청서를 제출하는 중 오류가 발생했습니다.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-primary/5 p-12 rounded-none text-center space-y-6 border border-primary/20">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-3xl mb-4">✓</div>
        <h3 className="text-3xl font-serif font-bold text-secondary">진단 접수가 완료되었습니다</h3>
        <p className="text-muted-foreground text-lg">
          담당 통관사가 기재해주신 내용을 사전 검토 중입니다.<br />
          <strong className="text-secondary">3영업일 이내</strong>에 입력하신 이메일로 1차 진단 리포트를 회신해 드립니다.
        </p>
        <div className="pt-6">
          <Button size="lg" onClick={() => setSubmitSuccess(false)} className="bg-secondary text-primary hover:bg-secondary/90">
            추가 진단 신청하기
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 bg-white p-8 md:p-14 rounded-none shadow-xl border border-border/50 relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
      
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif font-bold text-secondary mb-2">프리미엄 무료 진단 신청서</h2>
        <p className="text-muted-foreground text-sm">정확한 처방을 위해 현재 상황을 구체적으로 알려주세요.</p>
      </div>

      {submitError && (
        <div className="bg-destructive/15 text-destructive p-4 rounded-none">
          {submitError}
        </div>
      )}

      {/* 1. 신청자 정보 */}
      <div className="bg-[#fcfbf9] border border-[#f0ebe1] p-8 md:p-10 rounded-none relative">
        <div className="absolute -top-3 left-8 bg-background px-3">
          <span className="text-primary font-bold text-sm tracking-widest">STEP 01</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-secondary mb-6 flex items-center gap-3">
          신청자(의뢰인) 정보
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">회사명</Label>
            <Input {...register("company_name")} error={!!errors.company_name} placeholder="예: 윤앤파트너스 주식회사" className="h-12 bg-white" />
            {errors.company_name && <p className="text-xs text-destructive">{errors.company_name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">담당자명 (직위, 이름)</Label>
            <Input {...register("contact_name")} error={!!errors.contact_name} placeholder="예: 홍길동 과장" className="h-12 bg-white" />
            {errors.contact_name && <p className="text-xs text-destructive">{errors.contact_name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">이메일 주소</Label>
            <Input type="email" {...register("contact_email")} error={!!errors.contact_email} placeholder="결과 리포트를 받으실 이메일" className="h-12 bg-white" />
            {errors.contact_email && <p className="text-xs text-destructive">{errors.contact_email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">휴대전화 번호</Label>
            <Input {...register("contact_phone_mobile")} error={!!errors.contact_phone_mobile} placeholder="010-0000-0000" className="h-12 bg-white" />
            {errors.contact_phone_mobile && <p className="text-xs text-destructive">{errors.contact_phone_mobile.message}</p>}
          </div>
        </div>
      </div>

      {/* 2. 제품 상세 정보 */}
      <div className="bg-[#fcfbf9] border border-[#f0ebe1] p-8 md:p-10 rounded-none relative">
        <div className="absolute -top-3 left-8 bg-background px-3">
          <span className="text-primary font-bold text-sm tracking-widest">STEP 02</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-secondary mb-6 flex flex-col sm:flex-row sm:items-baseline gap-2">
          진단 대상 제품 정보
          <span className="text-sm font-normal text-muted-foreground ml-0 sm:ml-2 tracking-normal">제품 정보가 구체적일수록 진단이 정확해집니다.</span>
        </h3>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">수출용 제품명</Label>
              <Input {...register("product_name")} error={!!errors.product_name} placeholder="한글/영문 제품명 기재" className="h-12 bg-white" />
              {errors.product_name && <p className="text-xs text-destructive">{errors.product_name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">제품군 (품목군)</Label>
              <Input {...register("category")} error={!!errors.category} placeholder="가공식품, 수산물 등 (HS코드를 아신다면 함께 기재)" className="h-12 bg-white" />
              {errors.category && <p className="text-xs text-destructive">{errors.category.message}</p>}
            </div>
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">내용량</Label>
              <Input {...register("net_weight")} error={!!errors.net_weight} placeholder="예: 500g" className="h-12 bg-white" />
              {errors.net_weight && <p className="text-xs text-destructive">{errors.net_weight.message}</p>}
            </div>
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">원산국</Label>
              <Input {...register("country_of_origin")} error={!!errors.country_of_origin} placeholder="예: 국산, 중국산 등" className="h-12 bg-white" />
              {errors.country_of_origin && <p className="text-xs text-destructive">{errors.country_of_origin.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label required className="text-secondary font-bold">원재료 및 성분명 (첨가물 포함)</Label>
            <p className="text-xs text-muted-foreground mb-2">원재료별 비중(%)을 반드시 입력해 주십시오. 통관 가능 여부를 결정하는 가장 중요한 항목입니다.</p>
            <Textarea {...register("product_description")} error={!!errors.product_description} placeholder="예: 배추(국산) 70%, 고춧가루(국산) 15%, 마늘 5%, L-글루탐산나트륨 0.5% 등" className="min-h-[140px] bg-white text-base p-4" />
            {errors.product_description && <p className="text-xs text-destructive">{errors.product_description.message}</p>}
          </div>

          <div className="space-y-2">
            <Label required className="text-secondary font-bold">영양성분표</Label>
            <Textarea {...register("nutrition_facts")} error={!!errors.nutrition_facts} placeholder="칼로리, 탄수화물, 단백질, 지방, 나트륨 등 영양성분 정보 기재" className="min-h-[100px] bg-white text-base p-4" />
            {errors.nutrition_facts && <p className="text-xs text-destructive">{errors.nutrition_facts.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">유통기한 (제조일로부터)</Label>
              <Input {...register("shelf_life")} error={!!errors.shelf_life} placeholder="예: 제조일로부터 12개월" className="h-12 bg-white" />
              {errors.shelf_life && <p className="text-xs text-destructive">{errors.shelf_life.message}</p>}
            </div>
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">보존방법 (보관온도)</Label>
              <Input {...register("storage_method")} error={!!errors.storage_method} placeholder="예: 실온 보관, 냉동 보관(-18℃ 이하)" className="h-12 bg-white" />
              {errors.storage_method && <p className="text-xs text-destructive">{errors.storage_method.message}</p>}
            </div>
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">섭취방법</Label>
              <Input {...register("consumption_method")} error={!!errors.consumption_method} placeholder="예: 그대로 섭취, 데워서 섭취" className="h-12 bg-white" />
              {errors.consumption_method && <p className="text-xs text-destructive">{errors.consumption_method.message}</p>}
            </div>
            <div className="space-y-2">
              <Label required className="text-secondary font-bold">가열조리 필요 여부</Label>
              <Input {...register("cooking_instructions")} error={!!errors.cooking_instructions} placeholder="필요 시 가열 방법 및 시간 기재" className="h-12 bg-white" />
              {errors.cooking_instructions && <p className="text-xs text-destructive">{errors.cooking_instructions.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-secondary font-bold">냉동식품의 경우 (제조 시 가열 온도 및 시간)</Label>
            <Input {...register("frozen_heating_info")} error={!!errors.frozen_heating_info} placeholder="해당되는 경우에만 기재 (예: 95℃에서 10분 가열)" className="h-12 bg-white" />
          </div>

          <div className="space-y-2">
            <Label required className="text-secondary font-bold">제조공정도</Label>
            <Textarea {...register("manufacturing_flowchart")} error={!!errors.manufacturing_flowchart} placeholder="원료 입고부터 포장까지의 생산 공정 순서를 기재해주세요." className="min-h-[100px] bg-white text-base p-4" />
            {errors.manufacturing_flowchart && <p className="text-xs text-destructive">{errors.manufacturing_flowchart.message}</p>}
          </div>

          <div className="space-y-2">
            <Label required className="text-secondary font-bold">제품의 특장점 (셀링 포인트)</Label>
            <Textarea {...register("features")} error={!!errors.features} placeholder="타사 제품 대비 경쟁력, 주 타겟층 등을 기재해주세요." className="min-h-[100px] bg-white text-base p-4" />
            {errors.features && <p className="text-xs text-destructive">{errors.features.message}</p>}
          </div>
        </div>
      </div>

      {/* 3. 무역 및 세부 정보 */}
      <div className="bg-[#fcfbf9] border border-[#f0ebe1] p-8 md:p-10 rounded-none relative">
        <div className="absolute -top-3 left-8 bg-background px-3">
          <span className="text-primary font-bold text-sm tracking-widest">STEP 03</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-secondary mb-6">무역 및 물류 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <Label required className="text-secondary font-bold">국내 판매 채널</Label>
            <Input {...register("sales_channel")} error={!!errors.sales_channel} placeholder="백화점, 이마트, 자사몰 등" className="h-12 bg-white" />
            {errors.sales_channel && <p className="text-xs text-destructive">{errors.sales_channel.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">납품가격 (FOB 기준)</Label>
            <Input {...register("fob_price")} error={!!errors.fob_price} placeholder="최소주문수량(MOQ) 기준" className="h-12 bg-white" />
            {errors.fob_price && <p className="text-xs text-destructive">{errors.fob_price.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">공장 출고 가격</Label>
            <Input {...register("exw_price")} error={!!errors.exw_price} placeholder="최소주문수량(MOQ) 기준" className="h-12 bg-white" />
            {errors.exw_price && <p className="text-xs text-destructive">{errors.exw_price.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">발주 리드타임</Label>
            <Input {...register("lead_time")} error={!!errors.lead_time} placeholder="발주 후 제조하여 일본 항구 도착까지 기간" className="h-12 bg-white" />
            {errors.lead_time && <p className="text-xs text-destructive">{errors.lead_time.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">보유 인허가 및 인증</Label>
            <Input {...register("certifications")} error={!!errors.certifications} placeholder="HACCP, ISO22000, 비건 인증 등" className="h-12 bg-white" />
            {errors.certifications && <p className="text-xs text-destructive">{errors.certifications.message}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label required className="text-secondary font-bold">해외 수출 경험 여부</Label>
            <Input {...register("export_experience")} error={!!errors.export_experience} placeholder="없음 / 대만 수출 1년 등" className="h-12 bg-white" />
            {errors.export_experience && <p className="text-xs text-destructive">{errors.export_experience.message}</p>}
          </div>
        </div>
      </div>

      {/* 4. 파일 첨부 및 추가 질문 */}
      <div className="bg-[#fcfbf9] border border-[#f0ebe1] p-8 md:p-10 rounded-none relative">
        <div className="absolute -top-3 left-8 bg-background px-3">
          <span className="text-primary font-bold text-sm tracking-widest">STEP 04</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-secondary mb-6">자료 첨부 및 기타</h3>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Label required className="text-secondary font-bold">수출용 제품라벨 보유 여부</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="yes" {...register("has_export_label")} className="accent-primary w-4 h-4" />
                  <span>예</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="no" {...register("has_export_label")} className="accent-primary w-4 h-4" />
                  <span>아니오</span>
                </label>
              </div>
              {errors.has_export_label && <p className="text-xs text-destructive">{errors.has_export_label.message}</p>}
            </div>

            <div className="space-y-4">
              <Label required className="text-secondary font-bold">일본어 카탈로그 보유 여부</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="yes" {...register("has_jp_catalog")} className="accent-primary w-4 h-4" />
                  <span>예</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="no" {...register("has_jp_catalog")} className="accent-primary w-4 h-4" />
                  <span>아니오</span>
                </label>
              </div>
              {errors.has_jp_catalog && <p className="text-xs text-destructive">{errors.has_jp_catalog.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-secondary font-bold block">관련 파일 업로드 
              <span className="text-xs text-muted-foreground font-normal ml-2 tracking-normal">(카탈로그, 라벨, 제품 이미지 등 / 10MB 이하)</span>
            </Label>
            <div className="border-2 border-dashed border-border p-6 text-center bg-white hover:bg-muted/30 transition-colors cursor-pointer rounded-none">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <p className="font-medium text-sm">파일을 드래그하거나 클릭하여 업로드</p>
              <p className="text-xs text-muted-foreground mt-1 text-center max-w-sm mx-auto">
                현재 진단 폼 기능 개발 중으로 MVP 버전에서는 파일 업로드를 지원하지 않습니다. 첨부자료는 추후 이메일 회신 시 첨부 부탁드립니다.
              </p>
            </div>
          </div>
          
          <div className="space-y-2 pt-4 border-t border-border">
            <Label className="text-secondary font-bold">기타 문의사항</Label>
            <Textarea {...register("other_inquiries")} placeholder="궁금하신 점이나 추가로 전달하실 내용을 자유롭게 적어주세요." className="min-h-[100px] bg-white text-base p-4" />
          </div>
        </div>
      </div>

      {/* 동의 및 제출 */}
      <div className="bg-secondary p-8 md:p-10 rounded-none text-white space-y-8">
        <div className="flex items-start space-x-4">
          <div className="mt-1 bg-white/10 p-1 rounded">
            <Checkbox id="terms" {...register("privacy_consent")} error={!!errors.privacy_consent} className="border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="terms" required className="cursor-pointer text-lg font-bold text-white">개인정보 수집 및 이용에 동의합니다</Label>
            <p className="text-sm text-white/50 break-keep">수집된 정보는 철저한 보안 속에 수출 진단 결과를 제공하기 위한 목적으로만 사용되며, 제3자에게 제공되지 않습니다.</p>
            {errors.privacy_consent && <p className="text-sm text-red-400 font-bold">{errors.privacy_consent.message}</p>}
          </div>
        </div>
        
        <Button type="submit" size="lg" className="w-full text-xl h-20 bg-primary text-secondary font-extrabold hover:bg-primary/90 transition-transform hover:scale-[1.02]" disabled={isSubmitting}>
          {isSubmitting ? "진단 접수 중입니다..." : "프리미엄 무료 수출 진단 접수하기"}
        </Button>
      </div>
    </form>
  )
}
