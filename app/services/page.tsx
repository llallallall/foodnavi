import Link from "next/link"
import { Button } from "@/components/common/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card"

const SERVICES = [
  {
    id: 1,
    title: "수출 가능성 진단 (무료)",
    description: "본격적인 수출 준비 전, 해당 품목이 일본 식품위생법 등 관련 규제를 통과할 수 있는지 사전 진단합니다.",
    link: "/diagnosis/apply"
  },
  {
    id: 2,
    title: "성분 검토 및 식품표시라벨 작성",
    description: "첨가물 허용 기준 검토 및 합법적인 일본어 라벨을 작성하여 통관 보류 리스크를 제거합니다.",
    link: "#"
  },
  {
    id: 3,
    title: "소비자 및 시장적합성 검증",
    description: "제품의 맛, 패키징, 가격 경쟁력이 일본 소비자에게 어필할 수 있는지 객관적으로 분석합니다.",
    link: "#"
  },
  {
    id: 4,
    title: "시험 통관",
    description: "대량 수출 전 소량 샘플을 통해 실제 세관 통과 여부를 테스트하고 물류 프로세스를 점검합니다.",
    link: "#"
  },
  {
    id: 5,
    title: "일본 기능성표시식품 신고 지원",
    description: "건강기능식품 등의 과학적 근거 자료를 바탕으로 일본 소비자청에 기능성 표시를 등록 대행합니다.",
    link: "#"
  },
  {
    id: 6,
    title: "바이어 발굴 및 거래 매칭",
    description: "Yoon&Partners의 26년 현지 네트워크를 활용해 검증된 제품을 유효 바이어와 다이렉트로 연결합니다.",
    link: "#"
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary-dark">
          Yoon&Partners 서비스 소개
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          제품 진단부터 현지 바이어 매칭까지, 일본 수출의 전 과정을 원스톱으로 지원합니다.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {SERVICES.map((service) => (
          <Card key={service.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <Link href={service.link}>
                <Button variant={service.id === 1 ? "default" : "outline"} className="w-full">
                  {service.id === 1 ? "무료로 진단 받기" : "자세히 알아보기"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-20 text-center bg-muted p-8 rounded-2xl max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">어디서부터 시작해야 할지 모르겠다면?</h3>
        <p className="text-muted-foreground mb-6">수출 가능성 진단부터 시작해 보세요. 일본 현지 통관사의 정확한 피드백을 무료로 받아볼 수 있습니다.</p>
        <Link href="/diagnosis/apply">
          <Button size="lg" className="px-8 font-bold text-lg h-14">무료 수출진단 바로가기</Button>
        </Link>
      </div>
    </div>
  )
}
