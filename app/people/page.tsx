import { GraduationCap, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { people, roleLabels, type PersonRole } from "@/data/people";

export const metadata = {
  title: "People",
};

const roleOrder: PersonRole[] = [
  "faculty",
  "postdoc",
  "phd",
  "masters",
  "undergraduate",
  "alumni",
];

function PersonCard({ person }: { person: (typeof people)[0] }) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm card-hover">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
            person.role === "faculty"
              ? "bg-gradient-to-br from-khu-navy to-khu-blue text-white"
              : "bg-khu-cream text-khu-navy"
          }`}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-khu-navy">{person.name}</h3>
          <p className="text-sm font-medium text-khu-gold">{person.title}</p>
          {person.research && (
            <p className="mt-2 text-sm leading-relaxed text-khu-slate">
              {person.research}
            </p>
          )}
          {person.education && (
            <p className="mt-2 flex items-start gap-1.5 text-xs text-khu-slate">
              <GraduationCap size={14} className="mt-0.5 shrink-0" />
              {person.education}
            </p>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-khu-blue hover:text-khu-gold"
            >
              <Mail size={14} />
              {person.email}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PeoplePage() {
  return (
    <>
      <PageHero
        title="People"
        subtitle="Meet the researchers driving innovation at the Energy Nanomaterials Laboratory."
      />

      <section className="section-padding">
        <div className="container-narrow space-y-16">
          {roleOrder.map((role) => {
            const members = people.filter((p) => p.role === role);
            if (members.length === 0) return null;

            return (
              <div key={role}>
                <h2 className="mb-8 text-2xl font-bold text-khu-navy">
                  {roleLabels[role]}
                </h2>
                <div
                  className={`grid gap-6 ${
                    role === "faculty"
                      ? "md:grid-cols-1"
                      : "sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {members.map((person) => (
                    <PersonCard key={person.id} person={person} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
