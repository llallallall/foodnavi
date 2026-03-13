import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react"

export default function MyPage() {
  const currentStep = 2; // 0: 신청 접수, 1: 1차 검토, 2: 성분 분석 중 (현재), 3: 라벨링 설계, 4: 바이어 매칭
  
  const steps = [
    { title: "신청 접수", description: "진단 의뢰서 접수 완료", date: "2026.03.11", status: "completed" },
    { title: "1차 요건 검토", description: "HS코드 분류 및 위생법 1차 사전 검토", date: "2026.03.12", status: "completed" },
    { title: "정밀 성분 분석", description: "각 원재료별 사용 기준 및 첨가물 심층 검사", date: "예상 소요: 3일", status: "current" },
    { title: "식품표시 라벨 성안", description: "일본 규격에 맞춘 포장재 라벨 설계", date: "대기", status: "pending" },
    { title: "바이어 발굴 매칭", description: "타겟 유통망 기반 벤더사 오퍼", date: "대기", status: "pending" }
  ];

  return (
    <div className="bg-background min-h-screen py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-serif font-bold text-secondary mb-8">나의 수출 진행 현황</h1>

        <div className="bg-background dark:bg-secondary p-8 md:p-12 shadow-md border border-border rounded-none flex flex-col md:flex-row gap-8">
          
          <div className="md:w-1/3 border-r border-border/50 pr-8">
            <h2 className="text-xl font-bold text-secondary mb-4">현재 접수 건</h2>
            <div className="bg-muted p-4 rounded-none">
              <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">건강기능식품</span>
              <p className="font-bold text-lg mt-3 text-secondary">프리미엄 밀크씨슬 EX</p>
              <p className="text-sm text-muted-foreground mt-1">접수번호: #FN-260311-002</p>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                현재 <strong className="text-primary font-bold">정밀 성분 분석</strong> 단계가 진행 중입니다. 분석 중 문의사항이 발생하면 이메일로 연락 드리겠습니다.
              </p>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="font-bold text-secondary text-lg mb-8 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              진행 타임라인
            </h3>

            <div className="space-y-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-muted z-0"></div>

              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 relative z-10 group">
                  <div className="mt-1 bg-white shrink-0">
                    {step.status === 'completed' ? (
                      <CheckCircle2 className="w-8 h-8 text-primary shadow-sm rounded-full bg-white" strokeWidth={2} />
                    ) : step.status === 'current' ? (
                      <div className="w-8 h-8 rounded-full border-[3px] border-primary bg-primary/20 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      <Circle className="w-8 h-8 text-muted border-white rounded-full bg-white" strokeWidth={2} />
                    )}
                  </div>
                  
                  <div className={`p-5 rounded-lg border w-full transition-all ${step.status === 'current' ? 'bg-primary/5 border-primary/30 shadow-sm' : step.status === 'completed' ? 'bg-white border-border/50 hover:border-primary/50' : 'bg-muted/50 border-transparent'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`text-lg font-bold ${step.status === 'pending' ? 'text-muted-foreground' : 'text-secondary'}`}>
                        {step.title}
                      </h4>
                      <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
                        step.status === 'completed' ? 'bg-muted text-secondary/60' : 
                        step.status === 'current' ? 'bg-primary text-white font-bold' : 
                        'text-muted-foreground'
                      }`}>
                        {step.date}
                      </span>
                    </div>
                    <p className={`text-sm ${step.status === 'pending' ? 'text-muted-foreground/60' : 'text-secondary/70'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-muted/50 rounded-lg border border-border flex items-center justify-between">
              <p className="text-sm font-medium text-foreground/80">추가 서류 제출이 필요하신가요?</p>
              <button className="text-sm font-bold text-primary flex items-center hover:underline">
                자료 보완하기 <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
