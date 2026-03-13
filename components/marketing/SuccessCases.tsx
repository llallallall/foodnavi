"use client"

import { useState } from "react"

const cases = [
  {
    id: 1,
    category: "건강기능식품",
    titleBase: "반려된 보조제 수입허가,\n성분 재조정으로",
    titleHighlight: " 3주 만에 통관 성공",
    problem: "일본 약기법에 저촉되는 의약품 원료(특정 허브 추출물) 포함으로 세관에서 전량 반송 위기 발생.",
    solution: "성분 처방 검토 후, 해당 성분을 일본 내 '식품'으로 인정받는 대체 원료로 변경 제안 및 라벨 재작성 지원."
  },
  {
    id: 2,
    category: "가공식품",
    titleBase: "현지 바이어 발굴로\n대형 유통망 초도 물량",
    titleHighlight: " 20만 불 계약",
    problem: "우수한 제품력에도 불구하고 일본 내 유통 벤더 네트워크 부재로 판로 개척에 난항을 겪음.",
    solution: "제품 컨셉에 맞는 타겟 유통 채널(드러그스토어) 분석 후, 당사 벤더 네트워크를 통한 직접 매칭 및 협상 대행."
  },
  {
    id: 3,
    category: "수산물",
    titleBase: "까다로운 수산물 위생증명,\n사전 검토로",
    titleHighlight: " 무사 통과 검증",
    problem: "일본의 엄격한 수산물 항생제 및 수거검사 기준에 미달하여 폐기 처분될 위험에 노출됨.",
    solution: "수출 전 국내 공인기관의 사전 검사 지도 및 일본 후생노동성 기준에 맞춘 영문 위생증명서 발급 완벽 지원."
  },
  {
    id: 4,
    category: "가공식품",
    titleBase: "원재료 배합비 오류 사전 발견,\n수입 통관",
    titleHighlight: " 리스크 0% 달성",
    problem: "신제품 소스류의 천연색소 등 일부 첨가물이 일본 기준치(Food Sanitation Act)를 초과함을 파악하지 못한 채 선적 예정.",
    solution: "성분 사전 검토(Pre-check)를 통해 초과 기준을 식별하고, 안전한 성분 배합비로 수정 제안하여 리콜 사태 방지."
  }
];

export function SuccessCases() {
  const [activeTab, setActiveTab] = useState("전체")
  
  const tabs = ["전체", "건강기능식품", "가공식품", "수산물"];
  
  const filteredCases = activeTab === "전체" 
    ? cases 
    : cases.filter(c => c.category === activeTab);

  return (
    <section className="py-32 px-4 md:px-6 bg-muted relative border-t border-border">
      <div className="container mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] min-[1920px]:max-w-[1700px]">
        
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-widest text-sm md:text-base mb-4 uppercase">Success Stories</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-tight mb-6">
            검증된 수출 성공 사례
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto break-keep leading-relaxed">
            복잡한 규제와 깐깐한 바이어를 넘어, 일본 시장 안착에 성공한 K-Food 기업들의 이야기입니다.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-none font-bold text-sm transition-all ${
                activeTab === tab 
                  ? 'bg-primary text-secondary shadow-md' 
                  : 'bg-background text-foreground/70 hover:text-foreground hover:bg-muted border border-border/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8">
          {filteredCases.map((item) => (
            <div key={item.id} className="bg-background dark:bg-secondary p-8 md:p-12 shadow-md border border-border/50 rounded-none relative overflow-hidden group animate-in fade-in zoom-in-95 duration-500">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1.5 z-10">
                {item.category}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 pr-16 leading-snug break-keep whitespace-pre-line">
                {item.titleBase}
                <span className="text-primary">{item.titleHighlight}</span>
              </h3>
              
              <div className="space-y-6 mt-8">
                <div className="flex gap-4 p-4 bg-destructive/10 rounded-none border border-destructive/20">
                  <div className="font-bold text-destructive shrink-0 w-16">Problem</div>
                  <p className="text-sm text-foreground/80 leading-relaxed break-keep">{item.problem}</p>
                </div>
                <div className="flex gap-4 p-4 bg-primary/10 rounded-none border border-primary/20">
                  <div className="font-bold text-primary shrink-0 w-16">Solution</div>
                  <p className="text-sm text-foreground/80 leading-relaxed break-keep">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
