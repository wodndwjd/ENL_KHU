import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-khu-gold">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-khu-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-khu-slate">{description}</p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-khu-gold",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
