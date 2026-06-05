import { PageHero } from "@/components/layout/PageHero";
import { facilities } from "@/data/facilities";

export const metadata = {
  title: "Facilities",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Facilities"
        subtitle="State-of-the-art equipment and infrastructure supporting our research programs."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-8 lg:grid-cols-2">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <article
                  key={facility.id}
                  className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm card-hover"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-khu-cream">
                    <Icon className="h-7 w-7 text-khu-navy" />
                  </div>
                  <h2 className="text-xl font-bold text-khu-navy">{facility.name}</h2>
                  <p className="mt-3 leading-relaxed text-khu-slate">
                    {facility.description}
                  </p>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-khu-slate">
                    Key Equipment
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {facility.equipment.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-khu-navy/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-khu-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-khu-cream/50 p-12 text-center">
            <p className="text-khu-slate">
              Facility photos and virtual lab tour can be added here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
