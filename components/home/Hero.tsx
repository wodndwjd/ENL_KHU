"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    /* 💡 pt-32, md:pt-40(위쪽 여백)을 줘서 이미지는 최고 꼭대기까지 뻗되, 글자들은 투명 헤더 아래에서 딱 시작하게 맞췄습니다. */
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-slate-900 text-white pt-32 pb-16 md:pt-40 md:pb-24">
      
      {/* 1. 배경 이미지 영역 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Research Lab Background" 
          /* 💡 opacity-75로 설정하여 이미지를 훨씬 더 밝고 원본에 가깝게 표출합니다. */
          className="h-full w-full object-cover opacity-75"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* 💡 가독성을 위한 최소한의 하단/상단 어두운 섀도우 그라데이션만 얹고 중앙은 이미지 그대로 투명하게 노출합니다. */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/70" />
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
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-khu-gold"
          >
            {siteConfig.university}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            /* 💡 글자가 배경에 묻히지 않도록 드롭 섀도우(shadow-sm) 효과를 글씨에 추가했습니다. */
            className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl"
          >
            Energy Nanomaterials
            <br />
            <span className="text-khu-gold-light">Laboratory</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white drop-shadow-sm sm:text-lg"
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
            <Button href="/join-us" variant="outline" size="lg" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-khu-navy">
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
          <ChevronDown className="animate-bounce text-white/60" size={24} />
        </motion.div>
      </div>
    </section>
  );
}

// 빌드 에러 이중 방어막
export default Hero;
