"use client";

import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";

// 최신 뉴스 데이터
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
      /* 💡 높이를 min-h-[50vh]로 줄여 한눈에 쏙 들어오게 맞췄습니다. */
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-slate-900 text-white pt-28 pb-10"
      style={{
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      {/* 배경 이미지 영역 (선명도는 살리고, 어두운 그라데이션 필터는 30% 수준으로 확 낮춤) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="ENL Laboratory background"
          className="h-full w-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* 💡 어두운 그림자 장막의 투명도를 opacity-30으로 옅게 주어 배경 사진이 아주 환하게 보입니다. */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 opacity-30" />
      </div>

      {/* 메인 콘텐츠 영역 (좌소개 / 우뉴스 2단 배치) */}
      <div className="container-narrow relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* [좌측 영역] 연구실 헤드라인 및 소개 */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-khu-gold/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-khu-gold-light">
              Kyung Hee University
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl drop-shadow-lg">
              Energy <span className="text-khu-gold-light">Nanomaterials</span> Lab.
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white drop-shadow-md">
              Welcome to the Energy Nanomaterials Laboratory (ENL) at Kyung Hee University. 
              Our group focuses on developing high-performance nanomaterials for next-generation 
              sustainable energy technologies, including perovskite solar cells, LEDs, and 
              AI-based processing of semiconductor materials.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="inline-flex items-center justify-center rounded-md bg-khu-gold px-5 py-2.5 text-xs md:text-sm font-semibold text-khu-navy transition-colors hover:bg-khu-gold-light shadow-md"
              >
                Our Research
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/publications"
                className="inline-flex items-center justify-center rounded-md border border-white/50 bg-white/5 px-5 py-2.5 text-xs md:text-sm font-semibold text-white transition-colors hover:bg-white/10 shadow-md"
              >
                Publications
              </Link>
            </div>
          </div>

          {/* [우측 영역] 가로폭이 70% 수준으로 슬림해진 최신 뉴스 미니 보드 */}
          <div className="flex justify-start lg:col-span-5 lg:justify-end">
            {/* 💡 lg:max-w-[75%] 설정을 추가하여 기존보다 가로폭이 한층 더 콤팩트하고 얄쌍하게 떨어집니다. */}
            <div className="w-full rounded-xl border border-white/10 bg-black/45 p-5 backdrop-blur-sm shadow-2xl lg:max-w-[75%]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="flex items-center gap-2 text-base font-bold text-white">
                  <Bell className="h-4 w-4 text-khu-gold" />
                  Latest News
                </h3>
                <Link 
                  href="/news" 
                  className="text-xs font-semibold text-khu-gold-light hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="mt-3 space-y-3">
                {heroNews.map((news) => (
                  <div 
                    key={news.id} 
                    className="group rounded-md bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                  >
                    <span className="text-[11px] font-semibold text-khu-gold-light">
                      {news.date}
                    </span>
                    <p className="mt-1 text-xs md:text-sm text-white/95 line-clamp-1 leading-snug group-hover:text-white">
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
