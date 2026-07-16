"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-khu-navy/95 backdrop-blur-md">
      <div className="container-narrow flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* 1. 왼쪽 영역: [연구실 로고] + [텍스트 이름] */}
        <Link href="/" className="group flex items-center gap-3">
          {/* ENL 연구실 로고 (소문자 파일명 반영) */}
          <div className="relative h-10 w-auto flex items-center">
            <img 
              src="/enl_logo.png" 
              alt="ENL Lab Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }} // 이미지 로드 실패 시 자연스럽게 숨김
            />
          </div>
          
          {/* 텍스트 타이틀 */}
          <div className="flex flex-col">
            {/* 위쪽: Kyung Hee University */}
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-khu-gold">
              {siteConfig.university}
            </span>
            {/* 아래쪽: Energy Nanomaterials Lab. */}
            <span className="text-base font-bold text-white transition-colors group-hover:text-khu-gold-light sm:text-lg">
              Energy Nanomaterials Lab.
            </span>
          </div>
        </Link>

        {/* 2. 오른쪽 영역: [메뉴 버튼들] + [학교 로고] */}
        <div className="flex items-center gap-6">
          {/* PC용 상단 네비게이션 메뉴 */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/10 text-khu-gold-light"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 경희대학교 로고 (소문자 파일명 반영) */}
          <div className="relative h-10 w-auto flex items-center border-l border-white/20 pl-4 sm:pl-6">
            <img 
              src="/khu_logo.png" 
              alt="Kyung Hee University Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* 모바일용 햄버거 메뉴 버튼 */}
          <button
            type="button"
            className="rounded-md p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 화면에서 열리는 전체 메뉴창 */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-khu-navy px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/10 text-khu-gold-light"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
