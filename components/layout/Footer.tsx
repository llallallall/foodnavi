import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">FoodNavi</h3>
            <p className="text-sm text-muted-foreground">
              실패 없는 일본 수출의 시작점. <br />
              일본 국가자격 통관사가 직접 검증하는 법적/기술적 데이터를 제공합니다.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/diagnosis/apply" className="hover:text-primary">무료 수출진단</Link></li>
              <li><Link href="/services" className="hover:text-primary">성분 검토 및 라벨링</Link></li>
              <li><Link href="/services" className="hover:text-primary">바이어 매칭</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>상호: Yoon&Partners 주식회사</li>
              <li>주소: 東京都新宿区000 0-00-00</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>전화: +81-00-0000-0000</li>
              <li>이메일: foodnavi.export@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yoon&Partners. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
