"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { researchAreas } from "@/data/research";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ResearchAreas() {
  return (
    <section className="section-padding bg-khu-surface">
      <div className="container-narrow">
        <SectionHeader
          label="Research"
          title="Our Research Areas"
          description="We pursue fundamental and applied research at the intersection of nanomaterials, optoelectronics, and energy science."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div key={area.id} variants={cardVariants}>
                <Link
                  href={`/research#${area.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm card-hover"
                >
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${area.color}`}
                  >
                    <Icon className="h-7 w-7 text-khu-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-khu-navy group-hover:text-khu-blue">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-khu-slate">
                    {area.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {area.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-khu-cream px-3 py-1 text-xs font-medium text-khu-navy"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-khu-gold transition-colors group-hover:text-khu-gold-light">
                    Learn more
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
