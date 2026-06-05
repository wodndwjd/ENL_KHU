"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { researchAreas } from "@/data/research";

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research"
        subtitle="Fundamental and applied research in energy nanomaterials, optoelectronics, and sustainable technologies."
      />

      <section className="section-padding">
        <div className="container-narrow space-y-20">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="scroll-mt-24"
              >
                <div className="grid items-start gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${area.color}`}
                    >
                      <Icon className="h-8 w-8 text-khu-navy" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-khu-navy sm:text-3xl">
                      {area.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {area.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full bg-khu-cream px-3 py-1 text-xs font-medium text-khu-navy"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-lg leading-relaxed text-khu-slate">
                      {area.description}
                    </p>
                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-khu-cream/50 p-8 text-center">
                      <p className="text-sm text-khu-slate">
                        Research images and representative data figures can be added here.
                      </p>
                    </div>
                  </div>
                </div>
                {index < researchAreas.length - 1 && (
                  <hr className="mt-20 border-slate-200" />
                )}
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
