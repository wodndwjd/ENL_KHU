"use client";

import { motion } from "framer-motion";
import { GraduationCap, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { faculty } from "@/data/people";

export function FacultyProfile() {
  const pi = faculty[0];

  if (!pi) return null;

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Principal Investigator"
          title="Meet Our Faculty"
          description="Led by experienced researchers dedicated to advancing energy nanomaterials science."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg"
        >
          <div className="grid lg:grid-cols-5">
            <div className="flex items-center justify-center bg-gradient-to-br from-khu-navy to-khu-blue p-12 lg:col-span-2">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-khu-gold/30 bg-white/10">
                <span className="text-6xl font-bold text-white/90">
                  {pi.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
            </div>

            <div className="p-8 lg:col-span-3 lg:p-12">
              <h3 className="text-2xl font-bold text-khu-navy sm:text-3xl">{pi.name}</h3>
              <p className="mt-1 text-lg font-medium text-khu-gold">{pi.title}</p>

              {pi.research && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-khu-slate">
                    Research Interests
                  </h4>
                  <p className="mt-2 leading-relaxed text-khu-navy/80">{pi.research}</p>
                </div>
              )}

              {pi.education && (
                <div className="mt-6 flex items-start gap-3">
                  <GraduationCap className="mt-0.5 shrink-0 text-khu-gold" size={20} />
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-khu-slate">
                      Education
                    </h4>
                    <p className="mt-1 text-khu-navy/80">{pi.education}</p>
                  </div>
                </div>
              )}

              {pi.email && (
                <a
                  href={`mailto:${pi.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-khu-blue hover:text-khu-gold"
                >
                  <Mail size={16} />
                  {pi.email}
                </a>
              )}

              <div className="mt-8">
                <Button href="/people" variant="secondary" size="sm">
                  View All Members
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
