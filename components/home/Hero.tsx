"use client";

import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";

// 가상의 최신 연구실 뉴스 데이터 (언제든 수정 가능)
const heroNews = [
  {
    id: 1,
    date: "2026.06",
    title: "Dr. Namita Ahir joined ENL as a Postdoctoral Researcher.",
  },
  {
    id: 2,
    date: "2026.05",
    title: "Sang-Hyun Oh (Alumnus) promoted to Ph.D. Candidate at UMN CEMS.",
  },
  {
    id: 3,
    date: "2025.10",
    title: "Ammarah Razzaq joined our lab for her Ph.D. program.",
  },
];

export function Hero() {
  return (
    <section 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900 text-white pt-24"
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      {/* 1. 💡 배경 이미지 영역 (올바른 파일명 /hero-bg.jpg 및 선명도 90% 완벽 복구) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="ENL Laboratory background"
          className="h-full w-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* 우측 뉴스 카드와 글자가 붕 뜨지 않고 세련되게 얹히도록 은은한 그라데이션 레이어 유지 */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40" />
      </div>

      {/* 2. 실 콘텐츠 영역: 2단 레이아웃 (데스크톱 기준 좌우 배치) */}
      <div className="container-narrow relative z-10 w-full px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* 왼쪽 영역 (소개글) - 12칸 중 7칸 차지 */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-khu-gold/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-khu-gold-light">
              Kyung Hee University
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
              Energy <span className="text-khu-gold-light">Nanomaterials</span> Lab.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white drop-shadow-md">
              Welcome to the Energy Nanomaterials Laboratory (ENL) at Kyung Hee University. 
              Our group focuses on developing high-performance nanomaterials for next-generation 
              sustainable energy technologies, including perovskite solar cells, LEDs, and 
              AI-based processing of semiconductor materials.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center justify-center rounded-md bg-khu-gold px-6 py-3 text-sm font-semibold text-khu-navy transition-colors hover:bg-khu-gold-light shadow-md"
              >
                Our Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center justify-center rounded-md border border-white/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 shadow-md"
              >
                Publications
              </Link>
            </div>
          </div>

          {/* 오른쪽 영역 (최신 뉴스 보드판) - 12칸 중 5칸 차지 */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <Bell className="h-5 w-5 text-khu-gold" />
                  Latest News
                </h3>
                <Link 
                  href="/news" 
                  className="text-xs font-semibold text-khu-gold-light hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="mt-4 space-y-4">
                {heroNews.map((news) => (
                  <div 
                    key={news.id} 
                    className="group rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
                  >
                    <span className="text-xs font-semibold text-khu-gold-light">
                      {news.date}
                    </span>
                    <p className="mt-1 text-sm text-white/95 line-clamp-2 leading-snug group-hover:text-white">
                      {news.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
