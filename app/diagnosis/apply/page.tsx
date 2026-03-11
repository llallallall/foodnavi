import { DiagnosisForm } from "@/components/features/DiagnosisForm/DiagnosisForm"

export default function DiagnosisApplyPage() {
  return (
    <div className="bg-muted/30 min-h-screen py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">무료 수출 진단 신청</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            정확한 진단을 위해 아래의 항목을 최대한 상세히 작성해 주세요. 작성 후 3영업일 내에 일본 통관 전문팀이 분석 결과를 이메일로 보내드립니다.
          </p>
        </div>
        
        <DiagnosisForm />
      </div>
    </div>
  )
}
