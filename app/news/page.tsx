import { Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import {
  categoryColors,
  categoryLabels,
  newsItems,
} from "@/data/news";

export const metadata = {
  title: "News",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  const sorted = [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <PageHero
        title="News & Achievements"
        subtitle="Latest updates from our laboratory including publications, awards, and events."
      />

      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <div className="space-y-8">
            {sorted.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[item.category]}`}
                  >
                    {categoryLabels[item.category]}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-khu-slate">
                    <Calendar size={14} />
                    {formatDate(item.date)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-khu-navy sm:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-khu-slate">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
