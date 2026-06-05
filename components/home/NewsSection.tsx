"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  categoryColors,
  categoryLabels,
  featuredNews,
} from "@/data/news";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function NewsSection() {
  return (
    <section className="section-padding bg-khu-surface">
      <div className="container-narrow">
        <SectionHeader
          label="News"
          title="Latest News & Achievements"
          description="Stay updated with our recent publications, awards, events, and announcements."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm card-hover"
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[item.category]}`}
                >
                  {categoryLabels[item.category]}
                </span>
                <span className="flex items-center gap-1 text-xs text-khu-slate">
                  <Calendar size={12} />
                  {formatDate(item.date)}
                </span>
              </div>
              <h3 className="text-lg font-bold leading-snug text-khu-navy">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-khu-slate">
                {item.summary}
              </p>
              <Link
                href="/news"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-khu-gold hover:text-khu-gold-light"
              >
                Read more
                <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/news" variant="outline">
            All News
          </Button>
        </div>
      </div>
    </section>
  );
}
