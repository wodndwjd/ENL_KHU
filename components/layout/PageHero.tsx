import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "gradient-hero relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
        className
      )}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-khu-gold blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
      </div>
      <div className="container-narrow relative">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 sm:text-xl">{subtitle}</p>
        )}
        <div className="mt-6 h-1 w-20 rounded-full bg-khu-gold" />
      </div>
    </section>
  );
}
