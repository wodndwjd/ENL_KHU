import { CheckCircle, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { applicationSteps, positions } from "@/data/join-us";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Join Us",
};

const typeLabels = {
  phd: "Ph.D.",
  masters: "M.S.",
  postdoc: "Postdoc",
  undergraduate: "Undergraduate",
};

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        title="Join Us"
        subtitle="We are always looking for talented and motivated researchers to join our team."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="mb-16 rounded-2xl border border-khu-gold/30 bg-khu-gold/5 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-khu-navy sm:text-3xl">
              Open Positions Available
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-khu-slate">
              ENL welcomes applications from domestic and international students.
              Scholarships are available through KHU graduate programs, Korea
              Research Foundation (KRF), and Global Korea Scholarship (GKS).
            </p>
            <div className="mt-6">
              <Button
                href={`mailto:${siteConfig.email}?subject=ENL%20Application`}
                variant="primary"
              >
                <Mail size={18} />
                Apply Now
              </Button>
            </div>
          </div>

          <div className="space-y-10">
            {positions.map((position) => (
              <article
                key={position.id}
                className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold text-khu-navy">
                    {position.title}
                  </h2>
                  <span className="rounded-full bg-khu-navy px-3 py-1 text-xs font-semibold text-white">
                    {typeLabels[position.type]}
                  </span>
                  {position.open && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                      Open
                    </span>
                  )}
                </div>
                <p className="mt-4 leading-relaxed text-khu-slate">
                  {position.description}
                </p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-khu-slate">
                      Requirements
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {position.requirements.map((req) => (
                        <li
                          key={req}
                          className="flex items-start gap-2 text-sm text-khu-navy/80"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-khu-gold"
                          />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-khu-slate">
                      What We Offer
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {position.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-sm text-khu-navy/80"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-khu-navy">
              Application Process
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {applicationSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-khu-navy text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-bold text-khu-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-khu-slate">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
