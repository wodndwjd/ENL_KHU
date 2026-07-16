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
        <Link href="/" className="group flex flex-col">
          {/* 위쪽: Kyung Hee University (금색, 작은 폰트 유지) */}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-khu-gold">
            {siteConfig.university}
          </span>
          {/* 아래쪽: 풀네임 직접 입력 및 폰트 크기 한 단계 상향 (text-sm -> text-base / sm:text-base -> sm:text-lg) */}
          <span className="text-base font-bold text-white transition-colors group-hover:text-khu-gold-light sm:text-lg">
            Energy Nanomaterials Lab.
          </span>
        </Link>

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

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
