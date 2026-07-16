"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    /* 1. min-h-[90vh](너무 넓음)를 min-h-[60vh]로 수정하여 높이를 슬림하게 조절했습니다. */
    <section className="relative flex min-h-[65vh] items-center overflow-hidden bg-slate-950 text-white">
      
      {/* 2. 배경 이미지 영역 (20% 투명도로 은은하게 노출 + 어두운 필터 겹치기) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Research Lab Background" 
          className="h-full w-full object-cover opacity-20" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* 그라데이션 필터 장막 */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* 3. 실제 콘텐츠 영역 (relative z-10 부여로 이미지 위로 띄움) */}
      <div className="container-narrow relative z-10 w-full px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
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
            className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Energy Nanomaterials
            <br />
            <span className="text-khu-gold-light">Laboratory</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
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
            <Button href="/join-us" variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:bg-white hover:text-khu-navy">
              Join Our Team
            </Button>
          </motion.div>
        </motion.div>

        {/* 4. 아래로 가기 스크롤 안내 (크기가 작아진 만큼 자연스럽게 아래쪽에 떠 있도록 유지) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-white/40" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
