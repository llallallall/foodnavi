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
      <div className="bg-primary-light p-8 rounded-lg text-center space-y-4">
        <h3 className="text-2xl font-bold text-primary-dark">신청이 완료되었습니다!</h3>
        <p className="text-muted-foreground">담당자가 확인 후 3영업일 내에 기재해주신 이메일로 회신드리겠습니다.</p>
        <Button onClick={() => setSubmitSuccess(false)}>새로운 진단 신청하기</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-card p-6 md:p-10 rounded-xl shadow-sm border">
      {submitError && (
        <div className="bg-destructive/15 text-destructive p-4 rounded-md">
          {submitError}
        </div>
      )}

      {/* 1. 신청자 정보 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-2">1. 신청자(회사) 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label required>회사명</Label>
            <Input {...register("company_name")} error={!!errors.company_name} placeholder="예: 윤앤파트너스 주식회사" />
            {errors.company_name && <p className="text-xs text-destructive">{errors.company_name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>담당자명 (직위, 이름)</Label>
            <Input {...register("contact_name")} error={!!errors.contact_name} placeholder="예: 홍길동 과장" />
            {errors.contact_name && <p className="text-xs text-destructive">{errors.contact_name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>이메일 주소</Label>
            <Input type="email" {...register("contact_email")} error={!!errors.contact_email} placeholder="example@domain.com" />
            {errors.contact_email && <p className="text-xs text-destructive">{errors.contact_email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>휴대전화 번호</Label>
            <Input {...register("contact_phone_mobile")} error={!!errors.contact_phone_mobile} placeholder="010-0000-0000" />
            {errors.contact_phone_mobile && <p className="text-xs text-destructive">{errors.contact_phone_mobile.message}</p>}
          </div>
        </div>
      </div>

      {/* 2. 제품 정보 */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-2">2. 제품 정보</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label required>수출용 제품명</Label>
            <Input {...register("product_name")} error={!!errors.product_name} placeholder="한글/영문 제품명 기재" />
            {errors.product_name && <p className="text-xs text-destructive">{errors.product_name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>카테고리 및 HS코드 (형식)</Label>
            <Input {...register("category")} error={!!errors.category} placeholder="가공식품, 농산물 등 (HS코드를 아신다면 함께 적어주세요)" />
            {errors.category && <p className="text-xs text-destructive">{errors.category.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>제품 상세설명 및 원재료</Label>
            <Textarea {...register("product_description")} error={!!errors.product_description} placeholder="제품의 주원료, 첨가물, 포장재 등의 상세 정보를 포함하여 적어주세요." className="min-h-[120px]" />
            {errors.product_description && <p className="text-xs text-destructive">{errors.product_description.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>제품 특장점</Label>
            <Textarea {...register("features")} error={!!errors.features} placeholder="타사 대비 경쟁력, 타겟 고객층 등을 기재해주세요." />
            {errors.features && <p className="text-xs text-destructive">{errors.features.message}</p>}
          </div>
        </div>
      </div>

      {/* 3. 무역 및 가격 정보 (축약형, 실제 서비스 시 23문항 전부 맵핑) */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold border-b pb-2">3. 무역 및 부가 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label required>국내 판매 채널</Label>
            <Input {...register("sales_channel")} error={!!errors.sales_channel} placeholder="백화점, 이마트, 쿠팡 등" />
            {errors.sales_channel && <p className="text-xs text-destructive">{errors.sales_channel.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>FOB 가격 (달러/엔화)</Label>
            <Input {...register("fob_price")} error={!!errors.fob_price} placeholder="최소주문수량(MOQ) 기준" />
            {errors.fob_price && <p className="text-xs text-destructive">{errors.fob_price.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>EXW 가격 (공장 출하가)</Label>
            <Input {...register("exw_price")} error={!!errors.exw_price} placeholder="원화/엔화 표기" />
            {errors.exw_price && <p className="text-xs text-destructive">{errors.exw_price.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>발주 리드타임</Label>
            <Input {...register("lead_time")} error={!!errors.lead_time} placeholder="예: 발주 후 3주" />
            {errors.lead_time && <p className="text-xs text-destructive">{errors.lead_time.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>보유 인허가</Label>
            <Input {...register("certifications")} error={!!errors.certifications} placeholder="HACCP, ISO22000, 핼랄 등" />
            {errors.certifications && <p className="text-xs text-destructive">{errors.certifications.message}</p>}
          </div>
          <div className="space-y-2">
            <Label required>수출 경험</Label>
            <Input {...register("export_experience")} error={!!errors.export_experience} placeholder="없음 / 미국 수출 3년 등" />
            {errors.export_experience && <p className="text-xs text-destructive">{errors.export_experience.message}</p>}
          </div>
        </div>
      </div>

      {/* 동의 및 제출 */}
      <div className="pt-6 border-t space-y-6">
        <div className="flex items-start space-x-2">
          <div className="mt-1">
            <Checkbox id="terms" {...register("privacy_consent")} error={!!errors.privacy_consent} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="terms" required className="cursor-pointer">개인정보 수집 및 이용에 동의합니다</Label>
            <p className="text-xs text-muted-foreground">수집된 정보는 수출 진단 결과를 제공하기 위한 목적으로만 안전하게 사용됩니다.</p>
            {errors.privacy_consent && <p className="text-xs text-destructive">{errors.privacy_consent.message}</p>}
          </div>
        </div>
        
        <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isSubmitting}>
          {isSubmitting ? "신청서 제출 중..." : "무료 수출 진단 신청하기"}
        </Button>
      </div>
    </form>
  )
}
