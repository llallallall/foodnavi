import Link from "next/link"
import { Button } from "@/components/common/Button"
import { Card, CardContent } from "@/components/common/Card"
import { Search, ShieldAlert, ArrowRight, Map, CheckCircle2, AlertCircle, HelpCircle, FileQuestion, LineChart, Target, FileCheck, Check, FileText, Users, Truck, PlusSquare, BadgeCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* 2. Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="container relative z-10 mx-auto max-w-5xl 2xl:max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 2xl:gap-24">
          <div className="flex-1 space-y-8">
            <div className="inline-block border border-white/30 rounded-sm px-4 py-1.5 text-sm font-medium tracking-wide">
              • 일본 식품 수출 전문 컨설팅
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl min-[1920px]:text-[5rem] font-extrabold leading-tight tracking-tight">
              일본 식품 수출,<br />
              <span className="text-primary">규제 장벽에 막혀</span><br />
              포기하셨나요?
            </h1>
            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              식품위생법, 첨가물 기준, 통관 절차, 라벨링 규제...<br />
              혼자 해결하기엔 너무 복잡한 일본 시장.
            </p>
            <p className="text-base font-medium max-w-lg leading-relaxed break-keep">
              <span className="text-primary">26년간 수출업체와 일본 바이어 양쪽을 지켜본 전문가가</span><br />
              <span className="text-white">당신의 제품이 왜 통하지 않는지, 무엇을 바꿔야 하는지</span><br />
              <span className="text-primary">냉정하고 객관적인 시각으로 진단하고, 실행에서 통관까지 완벽하게 검증합니다.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/diagnosis/apply">
                <Button size="lg" className="w-full sm:w-auto text-secondary font-bold px-8 h-14 bg-primary hover:bg-primary-dark">
                  무료 수출가능성 진단 받기
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 border-white text-white bg-transparent hover:bg-white/10 hover:text-white border-2">
                  서비스 소개 보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md xl:max-w-[440px] 2xl:max-w-[480px]">
            <div className="bg-[#051320] border border-white/10 rounded-xl p-8 space-y-8 shadow-2xl">
              <h3 className="text-xl font-bold text-primary mb-6">서비스 진행 프로세스</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">신청서 작성</h4>
                    <p className="text-white/60 text-sm mt-1">제품 정보와 수출 준비 현황을 간단히 입력</p>
                    <span className="inline-block mt-2 text-xs bg-white/10 px-2 py-1 rounded text-white/80">5분</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">전문가 분석</h4>
                    <p className="text-white/60 text-sm mt-1">일본 통관사 자격보유 전문가가 직접 검토</p>
                    <span className="inline-block mt-2 text-xs bg-white/10 px-2 py-1 rounded text-white/80">3일 이내</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">진단보고서 수령</h4>
                    <p className="text-white/60 text-sm mt-1">수출 가능성 &amp; 리스크를 정리</p>
                    <span className="inline-block mt-2 text-xs bg-white/10 px-2 py-1 rounded text-white/80">무료</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-bold text-white text-lg">과제 해결 의뢰</h4>
                    <p className="text-white/60 text-sm mt-1">진단에서 발견된 항목만 필요한 만큼 선택적으로 의뢰 가능</p>
                    <span className="inline-block mt-2 text-xs bg-white/10 px-2 py-1 rounded text-white/80">유료 · 선택사항</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics Bar */}
      <section className="bg-secondary py-12 px-4 border-b border-white/5 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container relative z-10 mx-auto xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-extrabold text-primary">26<span className="text-xl lg:text-2xl font-bold">年</span></div>
            <div className="font-bold text-white/90">일본 식품 수출지원</div>
            <div className="text-sm text-white/60">전문 경력</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-extrabold text-primary">양방향</div>
            <div className="font-bold text-white/90">수출업체 &amp; 일본 바이어</div>
            <div className="text-sm text-white/60">양측 현장 경험</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-extrabold text-primary">통관사</div>
            <div className="font-bold text-white/90">일본 국가자격</div>
            <div className="text-sm text-white/60">통관사 자격 보유</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-extrabold text-primary">3<span className="text-xl lg:text-2xl font-bold">days</span></div>
            <div className="font-bold text-white/90">무료 진단보고서</div>
            <div className="text-sm text-white/60">3일 이내 발송</div>
          </div>
        </div>
      </section>

      {/* 5. Pain Points Section */}
      <section className="bg-muted pt-24 pb-8 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl xl:max-w-[1100px] 2xl:max-w-[1300px] min-[1920px]:max-w-[1500px]">
          <div className="text-left mb-10 space-y-4">
            <p className="text-primary font-extrabold tracking-wide text-2xl mb-2">혹시 이런 고민이 있으신가요?</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary leading-tight">
              많은 기업들이 이 벽 앞에서<br className="hidden md:block" />
              포기합니다
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg break-keep leading-relaxed mt-6">
              제품의 품질도 중요하지만, 문제는 규제와 유통의 벽입니다.<br className="hidden md:block" />
              Yoon&amp;Partners는 그 벽이 어디에 있는지 정확히 알고 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted pb-24 px-4 md:px-6 relative">
        <div className="container mx-auto max-w-5xl xl:max-w-[1100px] 2xl:max-w-[1300px] min-[1920px]:max-w-[1500px]">
          <div className="grid grid-cols-1 md:grid-cols-3 min-[1600px]:grid-cols-6 gap-[1px] bg-border border border-border">
            {/* Card 1 */}
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-start">
              <div className="text-3xl mb-6">📋</div>
              <h3 className="font-bold text-xl text-secondary mb-4 leading-snug">일본 식품위생법이<br />너무 복잡합니다</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">원재료 하나하나의 일본 내 허용 여부, 첨가물 사용 기준, 잔류농약 기준... 어디서부터 확인해야 할지 모르겠습니다.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-start">
              <div className="text-3xl mb-6">🏪</div>
              <h3 className="font-bold text-xl text-secondary mb-4 leading-snug">바이어는 어떻게<br />찾아야 하나요?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">전시회에 나가도 명함만 교환하고 끝납니다. 분명 현장 반응은 좋았는데, 실제 거래로 이어지는 바이어 만나기가 어렵습니다.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-start">
              <div className="text-3xl mb-6">🚢</div>
              <h3 className="font-bold text-xl text-secondary mb-4 leading-snug">통관에서 자꾸<br />막힙니다</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">수입업체가 요구하는 서류는 다 준비해서 전달했다고 생각했는데 검역에서 반송됐습니다. 무엇이 문제인지조차 파악이 안 됩니다.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-start">
              <div className="text-3xl mb-6">🏷️</div>
              <h3 className="font-bold text-xl text-secondary mb-4 leading-snug">일본어 라벨은<br />어떻게 만드나요?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">일본 식품표시법에 맞는 라벨 제작이 까다롭습니다. 잘못 표기하면 리콜 위험까지 있습니다.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-start">
              <div className="text-3xl mb-6">💴</div>
              <h3 className="font-bold text-xl text-secondary mb-4 leading-snug">가격 경쟁력이<br />있는지 모릅니다</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">수출가격에 해상운임, 관세, 통관비용, 현지 배송료, 유통마진을 더하면 일본 시장에서 팔릴 수 있는 가격인지 계산이 안 됩니다.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white p-8 lg:p-10 flex flex-col justify-start relative">
              <div className="text-3xl mb-6">🤝</div>
              <h3 className="font-bold text-xl text-secondary mb-4 leading-snug">어디에 물어봐야<br />정확한 답을 얻나요?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed break-keep">AI도 못 믿겠고, 컨설팅업체도 업체마다 말이 다르고, 어디까지가 맞는 정보인지 판단하기 어렵습니다.</p>


            </div>
          </div>
        </div>
      </section>

      {/* 6. Differentiation Section  */}
      <section className="py-24 px-4 md:px-6 bg-secondary text-white relative overflow-hidden">
        {/* Background Watermark */}
        <div
          className="hidden lg:flex absolute right-0 md:right-10 top-0 bottom-0 items-center justify-center text-[100px] lg:text-[140px] font-black text-white/[0.02] tracking-[0.2em] pointer-events-none select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          O B J E C T I V E
        </div>

        <div className="container mx-auto xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Column */}
            <div className="lg:w-5/12 space-y-8 sticky top-24 self-start">
              <div className="space-y-4">
                <p className="text-primary font-bold tracking-widest text-2xl uppercase">왜 Yoon&amp;Partners인가</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-snug break-keep">
                  어느 한 쪽만이 아닌<br />
                  <span className="text-primary">객관적으로 보는 사람의</span><br />
                  시각은 다릅니다
                </h2>
                <p className="text-white/70 leading-relaxed break-keep mt-6">
                  26년간 공공기관에서 수출업체와 일본 바이어 양쪽의 현장을 지켜보았습니다. 특정 품목에 집중할 수밖에 없는 민간 영업직과는 달리 일본의 식품 시장 전체를 폭넓게 바라보고 해법을 찾습니다.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="bg-white/[0.03] border-l-2 border-primary p-6 md:p-8 rounded-sm mt-8">
                <p className="text-primary text-sm font-medium mb-4">핵심 차별점</p>
                <p className="text-white/90 leading-relaxed break-keep mb-6">
                  수출업체는 자기 제품의 장점만 보고,<br className="hidden md:block" />
                  바이어는 단점만 봅니다.
                </p>
                <p className="text-white/90 leading-relaxed break-keep">
                  저는 양쪽의 거래 현장을 수백 번 목도하며<br className="hidden md:block" />
                  거래가 성사되는 이유와 깨지는 이유를<br className="hidden md:block" />
                  <span className="text-primary font-bold">제3자의 눈으로 정확히 파악하고 있습니다.</span>
                </p>
              </div>
            </div>

            {/* Right Column (List) */}
            <div className="lg:w-7/12">
              <div className="flex flex-col">

                {/* Item 01 */}
                <div className="flex gap-6 py-10 border-b border-white/10 first:pt-0">
                  <div className="text-2xl font-light text-primary/70 shrink-0 mt-1">01</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white/90">수출업체 + 바이어 양측 현장 경험</h3>
                    <p className="text-white/60 leading-relaxed break-keep text-sm md:text-base">
                      단순히 수출 지원만 한 것이 아닙니다. 일본 대형 유통 바이어와 수입업체 간의 실제 상담에 직접 참여하고 경험했습니다. <span className="text-primary font-bold">거래가 성사되지 않는 진짜 이유</span>를 알고 있습니다.
                    </p>
                  </div>
                </div>

                {/* Item 02 */}
                <div className="flex gap-6 py-10 border-b border-white/10">
                  <div className="text-2xl font-light text-primary/70 shrink-0 mt-1">02</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white/90">공공기관 전문가의 중립적 시각</h3>
                    <p className="text-white/60 leading-relaxed break-keep text-sm md:text-base">
                      단기적으로 한 번 팔고 끝날 제품은 매력이 없습니다. <span className="text-primary font-bold">진짜 문제점을 냉정하게</span> 짚어드리고, 해당 제품이 일본 시장에서 롱런할 수 있도록 돕는 것이 저의 역할입니다. 좋은 제품도 준비가 안 되면 실패할 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* Item 03 */}
                <div className="flex gap-6 py-10 border-b border-white/10">
                  <div className="text-2xl font-light text-primary/70 shrink-0 mt-1">03</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white/90">일본 국가자격 통관사 자격 보유</h3>
                    <p className="text-white/60 leading-relaxed break-keep text-sm md:text-base">
                      식품에 정통한 통관사가 생각보다 많지 않습니다. <span className="text-primary font-bold">통관사 자격을 보유</span>하고 있기 때문에 규제 리스크 분석부터 실제 통관까지 직접 원스톱 대응이 가능합니다.
                    </p>
                  </div>
                </div>

                {/* Item 04 */}
                <div className="flex gap-6 py-10 border-b border-white/10 border-b-transparent">
                  <div className="text-2xl font-light text-primary/70 shrink-0 mt-1">04</div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white/90">26년간 구축된 바이어 네트워크 기반 거래 알선</h3>
                    <p className="text-white/60 leading-relaxed break-keep text-sm md:text-base">
                      <span className="text-primary font-bold">일본 대형 유통업체, 벤더, 수입업체 네트워크</span>를 활용합니다. 실질적으로 각 제품에 가장 적합한 바이어를 연결합니다. 그렇기 때문에, 바이어 거래알선은 수수료를 미리 받지 않습니다. 단, 저희 <span className="text-primary font-bold">Yoon&amp;Partners와 함께 소비자 검증과 통관까지 마친 제품에 한해서만</span> 거래알선을 지원해드립니다.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Step-by-Step Review Section */}
      <section className="py-24 px-4 md:px-6 bg-muted relative">
        <div className="container mx-auto xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px] relative z-10">
          <div className="text-center mb-20 space-y-4">
            <p className="text-primary font-bold tracking-widest text-sm md:text-base mb-2">각 단계에서 이런 것들을 검토합니다</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary">단계별 검토 내용</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              무료 진단부터 실행 지원까지,<br />
              각 단계에서 전문가가 직접 확인하는 항목들입니다.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-[1px] border-primary/30 z-0 border-solid border-t-2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">

              <div className="flex flex-col items-center justify-start h-full">
                <div className="mb-6 bg-background border border-border px-4 py-1.5 shadow-sm relative z-10">
                  <span className="text-xs lg:text-sm font-bold text-primary tracking-widest">STEP 01</span>
                </div>
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 lg:mb-8 ring-8 ring-muted border-[3px] border-primary z-10 shadow-lg">
                  <Search className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-secondary mb-4">무료 수출가능성 진단</h3>
                <div className="bg-primary/20 text-primary font-bold px-6 py-2 rounded-full text-sm mb-8 lg:mb-10">무료 · 3일 이내</div>
                <div className="bg-background rounded-lg p-6 lg:p-8 w-full shadow-sm flex-grow border border-border/50">
                  <ul className="text-muted-foreground text-sm space-y-4 text-left">
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> HS코드 분류 및 관세율 확인</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 식품위생법 적합성 검토</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 첨가물·검역 리스크 분석</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 가격 경쟁력 1차 검토</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center justify-start h-full">
                <div className="mb-6 bg-background border border-border px-4 py-1.5 shadow-sm relative z-10">
                  <span className="text-xs lg:text-sm font-bold text-primary tracking-widest">STEP 02</span>
                </div>
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 lg:mb-8 ring-8 ring-muted border-[3px] border-primary z-10 shadow-lg">
                  <FileCheck className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-secondary mb-4">맞춤 전략 수립</h3>
                <div className="bg-[#e2dac8] text-[#867657] font-bold px-6 py-2 rounded-full text-sm mb-8 lg:mb-10">상담 후 진행 · 유료</div>
                <div className="bg-background rounded-lg p-6 lg:p-8 w-full shadow-sm flex-grow border border-border/50">
                  <ul className="text-muted-foreground text-sm space-y-4 text-left">
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 해당 제품 시장동향 조사</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 식품위생법·약기법 등 규제 대응</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 성분 검증 및 식품표시라벨 작성 계획</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 시장적합성 검증 계획</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center justify-start h-full relative">
                <div className="mb-6 bg-background border border-border px-4 py-1.5 shadow-sm relative z-10">
                  <span className="text-xs lg:text-sm font-bold text-primary tracking-widest">STEP 03</span>
                </div>
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 lg:mb-8 ring-8 ring-muted border-[3px] border-primary z-10 shadow-lg">
                  <Map className="w-8 h-8 lg:w-10 lg:h-10 text-red-300" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-secondary mb-4">실행 지원</h3>
                <div className="bg-[#e2dac8] text-[#867657] font-bold px-6 py-2 rounded-full text-sm mb-8 lg:mb-10">단계별 진행 · 유료</div>
                <div className="bg-background rounded-lg p-6 lg:p-8 w-full shadow-sm flex-grow border border-border/50 relative">
                  <ul className="text-muted-foreground text-sm space-y-4 text-left">
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 성분 검토 및 식품표시라벨 작성</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 현지 소비자 검증 실시</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 샘플 디자인 제작 지원</li>
                    <li className="flex items-start gap-3 break-keep"><ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 샘플 발송 및 시험 통관</li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Target Audience Section */}
      <section className="py-24 px-4 md:px-6 bg-white overflow-hidden border-t border-border">
        <div className="container mx-auto max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 2xl:gap-24">
            
            {/* Left Column (Sticky Text & CTA) */}
            <div className="lg:w-1/3 xl:w-1/4 shrink-0 flex flex-col justify-start pt-4 lg:pr-4">
              <p className="text-primary font-bold tracking-widest text-sm lg:text-base mb-4">이런 분들께 맞습니다</p>
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-secondary leading-tight mb-8 break-keep">
                당신의 상황이<br />
                이 중 하나라면
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed break-keep mb-12">
                업력이나 규모는 상관없습니다.<br className="hidden md:block" />
                일본 시장에 진지하게 도전하고 싶다면 충분합니다.
              </p>
              
              <div className="bg-secondary p-8 lg:p-10 rounded-sm shadow-2xl mt-auto">
                <p className="text-white text-center leading-relaxed break-keep mb-8 text-sm lg:text-base font-bold">
                  지금 바로 무료 진단을 신청하시면<br />
                  3일 이내에 진단 보고서를 보내드립니다.
                </p>
                <Link href="/diagnosis/apply" className="block">
                  <Button className="w-full bg-[#c8a147] hover:bg-[#b08d3a] text-secondary font-bold text-sm md:text-base h-14 rounded-sm border-0 transition-colors">
                    무료 진단 신청하기 <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column (2x3 Grid) */}
            <div className="lg:w-2/3 xl:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white">
                
                {/* Item 1 */}
                <div className="bg-[#f9f8f4] p-8 lg:p-10 xl:p-14 flex flex-col items-start border border-white">
                  <div className="text-2xl lg:text-3xl mb-6">🌱</div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mb-4 leading-snug break-keep">일본 수출을 처음<br />시도하는 기업</h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep">어디서부터 시작해야 할지 막막한 분들. 처음부터 올바른 방향을 제시해 드립니다.</p>
                </div>
                
                {/* Item 2 */}
                <div className="bg-[#f9f8f4] p-8 lg:p-10 xl:p-14 flex flex-col items-start border border-white">
                  <div className="text-2xl lg:text-3xl mb-6">🚧</div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mb-4 leading-snug break-keep">통관·규제가<br />걱정되는 기업</h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep">서류를 준비했는데도 확신이 안서는 분들. 근본 원인을 찾아드립니다.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-[#f9f8f4] p-8 lg:p-10 xl:p-14 flex flex-col items-start border border-white">
                  <div className="text-2xl lg:text-3xl mb-6">🔍</div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mb-4 leading-snug break-keep">바이어 연결은 됐지만<br />계약이 안되는 기업</h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep">바이어를 만났지만 거래로 이어지지 않는 분들. 무엇이 부족한지 정확히 알려드립니다.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-[#f9f8f4] p-8 lg:p-10 xl:p-14 flex flex-col items-start border border-white">
                  <div className="text-2xl lg:text-3xl mb-6">💡</div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mb-4 leading-snug break-keep">좋은 제품이지만<br />시장성이 불확실한 기업</h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep">제품에 자신이 있지만 일본 시장에서 통할지 모르는 분들. 객관적으로 평가해 드립니다.</p>
                </div>

                {/* Item 5 */}
                <div className="bg-[#f9f8f4] p-8 lg:p-10 xl:p-14 flex flex-col items-start border border-white">
                  <div className="text-2xl lg:text-3xl mb-6">📉</div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mb-4 leading-snug break-keep">수출 비용을 줄이고<br />싶은 기업</h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep">현재 수출하고 있지만 통관·물류 비용이 과다한 분들. 구조적 개선 방안을 제시합니다.</p>
                </div>

                {/* Item 6 */}
                <div className="bg-[#f9f8f4] p-8 lg:p-10 xl:p-14 flex flex-col items-start border border-white">
                  <div className="text-2xl lg:text-3xl mb-6">🏢</div>
                  <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mb-4 leading-snug mx-w-full lg:max-w-md break-keep">일본 주류 대형유통업체에 입점을 했지만<br className="hidden md:block" />판매가 부진하여 추가 발주가 없는 기업</h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep">일본 대형유통업체에 지속 가능한 판매를 원하시는 분들. 실제 유통 현장의 바이어 의견을 토대로 대책을 마련합니다.</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 Free Diagnosis Teaser Section (Newly Added) */}
      <section className="py-24 px-4 md:px-6 bg-secondary text-white border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        
        <div className="container mx-auto max-w-6xl xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px] relative z-10 text-center">
          <div className="space-y-4 mb-16">
            <p className="text-primary font-bold tracking-widest text-sm md:text-base">무료 수출가능성 진단</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight break-keep">
              먼저 무료로 확인하세요<br />
              <span className="text-primary">내 제품, 일본에서 팔릴 수 있는가</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-4">
              제품 정보를 입력하시면 전문가 검토를 거쳐<br className="hidden md:block"/>
              3일 이내에 진단 보고서를 이메일로 발송해 드립니다.
            </p>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-12"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 max-w-5xl mx-auto mb-20 pt-8 text-center">
            {/* Item 1 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#22c55e] rounded-md flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">HS코드 & 관세율</h4>
                <p className="text-white/50 text-sm">내 제품의 일본 수입 세율</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-md flex items-center justify-center mx-auto">
                <div className="text-4xl text-[#ebc678]">⚖️</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">법규 리스크 분석</h4>
                <p className="text-white/50 text-sm">식품위생법·첨가물 기준</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-md flex items-center justify-center mx-auto">
                <div className="text-4xl">💵</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">가격 경쟁력 검토</h4>
                <p className="text-white/50 text-sm">일본 시장 내 포지셔닝</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-md flex items-center justify-center mx-auto">
                <div className="text-4xl">🎯</div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">종합 판정</h4>
                <p className="text-white/50 text-sm">수출가능 / 조건부 / 고위험</p>
              </div>
            </div>
          </div>

          <div className="inline-block">
            <Link href="/diagnosis/apply">
              <Button size="lg" className="bg-[#c8a147] hover:bg-[#b08d3a] text-secondary font-bold h-16 px-12 text-lg md:text-xl rounded-sm transition-transform hover:scale-105">
                무료 수출가능성 진단 신청하기
              </Button>
            </Link>
            <p className="text-white/40 text-sm mt-4">신청 후 3일 이내 보고서 발송 · 비용 없음</p>
          </div>
        </div>
      </section>

      {/* 9. Service Introduction Section */}
      <section className="py-24 px-4 md:px-6 bg-white relative z-10 border-t border-border">
        <div className="container mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] min-[1920px]:max-w-[1700px]">
          
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-black text-[#004d40] uppercase tracking-[0.1em] mb-2">
              SERVICE
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">서비스 소개</h3>
            <div className="w-10 h-1 bg-[#004d40]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1 */}
            <div className="relative bg-white border border-[#e5e7eb] p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-[#004d40] hover:border-[#004d40] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-[#f0f9f6] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-white/10">
                <Check className="w-8 h-8 text-[#004d40] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-secondary mb-6 break-keep transition-colors duration-300 group-hover:text-white">수출 가능성 진단</h4>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep transition-colors duration-300 group-hover:text-white/80">
                일본 시장의 현재 트렌드와 법규를 바탕으로 제품의 일본 시장진출 성공 가능성을 빠르게 진단해 드립니다.
              </p>
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'linear-gradient(135deg, transparent 50%, #d1d5db 50%)' }}></div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white border border-[#e5e7eb] p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-[#004d40] hover:border-[#004d40] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-[#f0f9f6] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-white/10">
                <FileText className="w-8 h-8 text-[#004d40] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-secondary mb-6 break-keep transition-colors duration-300 group-hover:text-white">성분 검토 및<br />식품표시라벨 작성</h4>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep transition-colors duration-300 group-hover:text-white/80">
                일본 식품위생법에 저촉되는 성분은 없는지 확인하고, 일본 현지 판매에 필수적인 식품표시 라벨을 완벽하게 설계합니다.
              </p>
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'linear-gradient(135deg, transparent 50%, #d1d5db 50%)' }}></div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white border border-[#e5e7eb] p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-[#004d40] hover:border-[#004d40] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-[#f0f9f6] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-white/10">
                <Users className="w-8 h-8 text-[#004d40] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-secondary mb-6 break-keep transition-colors duration-300 group-hover:text-white">소비자 및<br />시장적합성 검증</h4>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep transition-colors duration-300 group-hover:text-white/80">
                일본 현지 소비자들로부터 맛, 품질, 디자인, 가격 등에 대한 반응을 미리 체크하여 실패 없는 수출 전략을 수립합니다.
              </p>
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'linear-gradient(135deg, transparent 50%, #d1d5db 50%)' }}></div>
            </div>

            {/* Card 4 */}
            <div className="relative bg-white border border-[#e5e7eb] p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-[#004d40] hover:border-[#004d40] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-[#f0f9f6] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-white/10">
                <Truck className="w-8 h-8 text-[#004d40] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-secondary mb-6 break-keep transition-colors duration-300 group-hover:text-white">시험 통관</h4>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep transition-colors duration-300 group-hover:text-white/80">
                소량의 제품을 미리 일본 세관에 샘플 통관시켜 발생 가능한 모든 변수를 확인하고 사전 대응계획을 수립할 수 있습니다.
              </p>
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'linear-gradient(135deg, transparent 50%, #d1d5db 50%)' }}></div>
            </div>

            {/* Card 5 */}
            <div className="relative bg-white border border-[#e5e7eb] p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-[#004d40] hover:border-[#004d40] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-[#f0f9f6] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-white/10">
                <PlusSquare className="w-8 h-8 text-[#004d40] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-secondary mb-6 break-keep transition-colors duration-300 group-hover:text-white">일본 기능성표시식품<br />신고 지원</h4>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep transition-colors duration-300 group-hover:text-white/80">
                까다로운 소비자청 기능성 표시 신고 절차를 과학적 근거 확보에서 신고서 작성 대행까지 원스톱으로 지원합니다.
              </p>
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'linear-gradient(135deg, transparent 50%, #d1d5db 50%)' }}></div>
            </div>

            {/* Card 6 */}
            <div className="relative bg-white border border-[#e5e7eb] p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-[#004d40] hover:border-[#004d40] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div className="w-16 h-16 rounded-full bg-[#f0f9f6] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-white/10">
                <BadgeCheck className="w-8 h-8 text-[#004d40] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-secondary mb-6 break-keep transition-colors duration-300 group-hover:text-white">바이어 발굴 및<br />거래 매칭</h4>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed break-keep transition-colors duration-300 group-hover:text-white/80">
                단순한 명단 제공이 아닙니다. 제품을 실제로 잘 팔아줄 수 있는 진성 바이어를 찾아 실무 협상까지 지원합니다.
              </p>
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-20" style={{ background: 'linear-gradient(135deg, transparent 50%, #d1d5db 50%)' }}></div>
            </div>
          </div>

          <div className="mt-28 mb-12">
            <div className="bg-secondary p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center">
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <p className="text-white text-lg md:text-xl font-medium tracking-tight break-keep">
                    어떤 서비스가 필요한지 아직 모르셔도 괜찮습니다.
                  </p>
                  <p className="text-[#c8a147] text-xl md:text-2xl font-bold tracking-tight break-keep">
                    무료 진단보고서를 받으신 후, 해당 제품에 필요한 서비스와 견적을 함께 안내해 드립니다.
                  </p>
                  <p className="text-white text-lg md:text-xl font-medium tracking-tight break-keep">
                    필요한 것만, 필요한 만큼만 의뢰하실 수 있습니다.
                  </p>
                </div>

                <div className="pt-8">
                  <Link href="/diagnosis/apply">
                    <Button className="bg-[#c8a147] hover:bg-[#b08d3a] text-secondary font-bold h-16 px-12 text-xl md:text-2xl rounded-sm transition-transform hover:scale-105">
                      무료 진단 신청하기 <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                  </Link>
                  <p className="text-white/40 text-sm mt-6">신청 후 3일 이내 보고서 발송 · 비용 없음</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Spacer for Overlapping CTA */}
      <div className="h-32 bg-background relative z-0"></div>

      {/* 10. Blog / News Teaser */}
      <section className="py-24 px-4 md:px-6 bg-background border-t border-border">
        <div className="container mx-auto xl:max-w-[1400px] 2xl:max-w-[1600px] min-[1920px]:max-w-[1800px]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-secondary">일본 수출 가이드 & 뉴스</h2>
            <Link href="/community/guide" className="text-primary hover:text-primary-dark font-medium flex items-center">
              전체보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/community/guide" className="block group">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border rounded-lg bg-white hover:border-primary transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors mb-2">한국산 광어 수출 시 주의점 및 통관 절차 안내</h3>
                  <p className="text-sm text-muted-foreground">일본 현지 통관 사례를 중심으로 주의해야 할 항생제 검사 및 서류 요건을 정리했습니다.</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-sm text-muted-foreground">2026.03.11</div>
              </div>
            </Link>
            <Link href="/community/guide" className="block group">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border rounded-lg bg-white hover:border-primary transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors mb-2">2026년 일본 식품위생법 주요 개정사항 요약</h3>
                  <p className="text-sm text-muted-foreground">바뀌는 첨가물 기준 및 포장재 규격에 대한 빠른 대응 가이드를 전해드립니다.</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-sm text-muted-foreground">2026.03.05</div>
              </div>
            </Link>
            <Link href="/community/guide" className="block group">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border rounded-lg bg-white hover:border-primary transition-colors">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors mb-2">일본 대형 벤더사 미팅 시 꼭 준비해야 하는 3가지</h3>
                  <p className="text-sm text-muted-foreground">단순한 제품 소개서로는 부족합니다. 일본 바이어가 계약 전에 가장 까다롭게 확인하는 요소들을 공개합니다.</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-sm text-muted-foreground">2026.02.28</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
