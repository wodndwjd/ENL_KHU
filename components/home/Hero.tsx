"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

// 💡 page.tsx의 `import { Hero }`와 완벽히 호환되도록 명명된 내보내기(Named Export)를 사용합니다.
export function Hero() {
  return (
    /* pt-32, md:pt-40 여백을 주어 글자들이 투명 헤더(Header) 아래쪽에 알맞게 배치되도록 설정합니다. */
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-slate-900 text-white pt-32 pb-16 md:pt-40 md:pb-24">
      
      {/* 1. 배경 이미지 영역 (선명도 90% 버전) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Research Lab Background" 
          className="h-full w-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* 밝은 이미지 배경 위에서도 글자가 잘 읽히도록 위아래에 미세한 어두운 그라데이션 필터를 넣었습니다. */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40" />
      </div>

      {/* 2. 실제 콘텐츠 영역 */}
      <div className="container-narrow relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-khu-gold drop-shadow"
          >
            {siteConfig.university}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
          >
            Energy Nanomaterials
            <br />
            <span className="text-khu-gold-light">Laboratory</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white drop-shadow-md sm:text-lg"
          >
            {siteConfig.tagline}. Advancing perovskite photovoltaics, light-emitting
            devices, neuromorphic optics, and soft electronics for a sustainable
            energy future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/research" variant="primary" size="lg">
              Explore Research
              <ArrowRight size={20} className="ml-1" />
            </Button>
            <Button href="/join-us" variant="outline" size="lg" className="border-white/50 text-white hover:border-white hover:bg-white hover:text-khu-navy drop-shadow-md">
              Join Our Team
            </Button>
          </motion.div>
        </motion.div>

        {/* 3. 아래로 가기 스크롤 안내 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-white/80 filter drop-shadow" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
