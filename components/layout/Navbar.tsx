import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/common/Button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_bg.png"
            alt="Yoon&Partners Food Market Intelligence"
            width={180}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/services" className="text-[15px] font-semibold text-secondary/80 transition-all hover:text-primary hover:-translate-y-0.5">
            서비스 소개
          </Link>
          <Link href="/community/guide" className="text-[15px] font-semibold text-secondary/80 transition-all hover:text-primary hover:-translate-y-0.5">
            일본 수출 가이드 & 뉴스
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/diagnosis/apply">
            <Button className="bg-primary hover:bg-primary-dark text-secondary font-bold shadow-lg rounded-full px-6 py-6 border-[3px] border-background text-sm">
              ✦ 무료 수출진단 신청하기
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
