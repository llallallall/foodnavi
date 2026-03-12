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
    }
  })

  async function onSubmit(data: DiagnosisFormValues) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Data insertion into Supabase (Files would need storage logic first, skipping for initial MVP)
      const { error } = await supabase
        .from('diagnosis_requests')
        .insert([{
          company_name: data.company_name,
          contact_name: data.contact_name,
          contact_email: data.contact_email,
          contact_phone: data.contact_phone_mobile,
          product_name: data.product_name,
          product_description: data.product_description,
          hs_code: data.category, // Simplified mapping
          type: 'FREE',
          status: 'PENDING'
        }])

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

      {/* 2. 제품 정보 */}
      <div className="bg-[#fcfbf9] border border-[#f0ebe1] p-8 md:p-10 rounded-none relative">
        <div className="absolute -top-3 left-8 bg-background px-3">
          <span className="text-primary font-bold text-sm tracking-widest">STEP 02</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-secondary mb-6">진단 대상 제품 정보</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">수출용 제품명</Label>
            <Input {...register("product_name")} error={!!errors.product_name} placeholder="한글/영문 제품명 기재" className="h-12 bg-white" />
            {errors.product_name && <p className="text-xs text-destructive">{errors.product_name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">카테고리 및 HS코드</Label>
            <Input {...register("category")} error={!!errors.category} placeholder="가공식품, 수산물 등 (HS코드를 아신다면 함께 적어주세요)" className="h-12 bg-white" />
            {errors.category && <p className="text-xs text-destructive">{errors.category.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">제품 원재료 및 상세설명</Label>
            <Textarea {...register("product_description")} error={!!errors.product_description} placeholder="정확한 진단을 위해 주원료, 첨가물, 배합비 등의 핵심 정보를 상세히 기재해주세요." className="min-h-[140px] bg-white text-base p-4" />
            {errors.product_description && <p className="text-xs text-destructive">{errors.product_description.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">제품 특장점 (셀링 포인트)</Label>
            <Textarea {...register("features")} error={!!errors.features} placeholder="타사 대비 경쟁력, 타겟 고객층(예: 30대 여성 다이어터) 등을 기재해주세요." className="min-h-[100px] bg-white text-base p-4" />
            {errors.features && <p className="text-xs text-destructive">{errors.features.message}</p>}
          </div>
        </div>
      </div>

      {/* 3. 무역 및 가격 정보 */}
      <div className="bg-[#fcfbf9] border border-[#f0ebe1] p-8 md:p-10 rounded-none relative">
        <div className="absolute -top-3 left-8 bg-background px-3">
          <span className="text-primary font-bold text-sm tracking-widest">STEP 03</span>
        </div>
        <h3 className="text-2xl font-serif font-bold text-secondary mb-6">무역 및 부가 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">국내 판매 채널</Label>
            <Input {...register("sales_channel")} error={!!errors.sales_channel} placeholder="백화점, 이마트, 자사몰 등" className="h-12 bg-white" />
            {errors.sales_channel && <p className="text-xs text-destructive">{errors.sales_channel.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">FOB 가격 / EXW 가격</Label>
            <Input {...register("fob_price")} error={!!errors.fob_price} placeholder="최소주문수량(MOQ) 기준 달러/원화 기재" className="h-12 bg-white" />
            {errors.fob_price && <p className="text-xs text-destructive">{errors.fob_price.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">보유 인허가 및 인증명</Label>
            <Input {...register("certifications")} error={!!errors.certifications} placeholder="HACCP, ISO22000, 비건 인증 등" className="h-12 bg-white" />
            {errors.certifications && <p className="text-xs text-destructive">{errors.certifications.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required className="text-secondary font-bold">해외 수출 경험 여부</Label>
            <Input {...register("export_experience")} error={!!errors.export_experience} placeholder="없음 / 대만 수출 1년 등" className="h-12 bg-white" />
            {errors.export_experience && <p className="text-xs text-destructive">{errors.export_experience.message}</p>}
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
