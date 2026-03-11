import Link from "next/link"
import { Button } from "@/components/common/Button"
import { Card, CardContent } from "@/components/common/Card"

// Mock data for initial UI (will be replaced by Supabase DB later)
const POSTS = [
  {
    id: 1,
    title: "성공적인 일본 식품 전시회 참가 전략: K-Food 바이어 상담 팁",
    category: "수출 가이드",
    date: "2026-03-01",
    author: "관리자",
    views: 345
  },
  {
    id: 2,
    title: "[공지] 2026년 일본 식품위생법 주요 개정 사항 안내",
    category: "뉴스",
    date: "2026-02-15",
    author: "관리자",
    views: 890
  },
  {
    id: 3,
    title: "농수산물 수출 시 필수 확인! 일본 검역 절차 총정리",
    category: "수출 가이드",
    date: "2026-01-20",
    author: "관리자",
    views: 512
  },
  {
    id: 4,
    title: "돈키호테 입점 성공 사례 분석: 패키징의 중요성",
    category: "성공 사례",
    date: "2025-12-10",
    author: "관리자",
    views: 1024
  }
]

export default function GuideAndNewsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-primary-dark mb-4">일본 수출 가이드 & 뉴스</h1>
        <p className="text-muted-foreground text-lg">
          푸드나비 통관 전문팀이 엄선한 최신 일본 시장 규제 동향과 성공 노하우를 확인하세요.
        </p>
      </div>
      
      <div className="space-y-4">
        {POSTS.map((post) => (
          <Link href={`#post-${post.id}`} key={post.id} className="block group">
            <Card className="hover:border-primary transition-colors cursor-pointer">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary/50">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    👤 {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    👁️ {post.views}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Button variant="outline" className="px-8">더보기</Button>
      </div>
    </div>
  )
}
