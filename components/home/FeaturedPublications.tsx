"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { featuredPublications } from "@/data/publications";

export function FeaturedPublications() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Publications"
          title="Featured Publications"
          description="Selected recent publications from our group in leading journals."
        />

        <div className="space-y-6">
          {featuredPublications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-khu-gold/30 hover:shadow-md sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <FileText size={18} className="text-khu-gold" />
                    <span className="text-sm font-semibold text-khu-blue">
                      {pub.journal}
                    </span>
                    <span className="text-sm text-khu-slate">· {pub.year}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-khu-navy sm:text-xl">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-khu-slate">{pub.authors}</p>
                  {pub.highlight && (
                    <p className="mt-3 rounded-lg bg-khu-cream px-4 py-2 text-sm italic text-khu-navy/80">
                      {pub.highlight}
                    </p>
                  )}
                </div>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-khu-gold transition-colors hover:text-khu-gold-light"
                  >
                    DOI
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/publications" variant="secondary">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
}
