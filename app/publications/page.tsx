import { ExternalLink, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { publications } from "@/data/publications";

export const metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  const byYear = publications.reduce<Record<number, typeof publications>>(
    (acc, pub) => {
      if (!acc[pub.year]) acc[pub.year] = [];
      acc[pub.year].push(pub);
      return acc;
    },
    {}
  );

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <PageHero
        title="Publications"
        subtitle="Peer-reviewed journal articles from the Energy Nanomaterials Laboratory."
      />

      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-khu-navy">
                <span className="h-8 w-1 rounded-full bg-khu-gold" />
                {year}
              </h2>
              <ol className="space-y-6">
                {byYear[year].map((pub, index) => (
                  <li
                    key={pub.id}
                    className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-khu-navy text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-bold leading-snug text-khu-navy">
                          {pub.title}
                        </h3>
                        <p className="mt-2 text-sm text-khu-slate">{pub.authors}</p>
                        <p className="mt-1 flex items-center gap-2 text-sm font-medium text-khu-blue">
                          <FileText size={14} />
                          <em>{pub.journal}</em>
                          {pub.volume && (
                            <span className="text-khu-slate">
                              {pub.volume}
                              {pub.pages && `, ${pub.pages}`}
                            </span>
                          )}
                        </p>
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-khu-gold hover:text-khu-gold-light"
                          >
                            doi:{pub.doi}
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
