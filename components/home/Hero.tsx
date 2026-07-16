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
    /* 💡 bg-khu-navy/95를 제거하고 bg-transparent(투명)로 설정하여 뒤쪽 배경 이미지가 보이게 만듭니다. */
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-white/5 bg-transparent">
      <div className="container-narrow flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* 1. 왼쪽 영역: [연구실 로고] + [텍스트 이름] */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-auto flex items-center">
            <img 
              src="/enl_logo.png" 
              alt="ENL Lab Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-khu-gold">
              {siteConfig.university}
            </span>
            <span className="text-base font-bold text-white transition-colors group-hover:text-khu-gold-light sm:text-lg">
              Energy Nanomaterials Lab.
            </span>
          </div>
        </Link>

        {/* 2. 오른쪽 영역: [메뉴 버튼들] + [학교 로고] */}
        <div className="flex items-center gap-6">
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

          <div className="relative h-10 w-auto flex items-center border-l border-white/20 pl-4 sm:pl-6">
            <img 
              src="/khu_logo.png" 
              alt="Kyung Hee University Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

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

      {/* 모바일 화면 메뉴창 열렸을 때는 단색 배경 적용 */}
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
