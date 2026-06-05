import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  const { address } = siteConfig;

  return (
    <footer className="bg-khu-navy text-white">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-khu-gold">
              {siteConfig.shortName}
            </p>
            <h3 className="mt-2 text-xl font-bold">{siteConfig.name}</h3>
            <p className="mt-1 text-sm text-white/70">{siteConfig.department}</p>
            <p className="mt-1 text-sm text-white/70">{siteConfig.university}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-khu-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-khu-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-khu-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-khu-gold" />
                <span>
                  {address.building}
                  <br />
                  {address.street}, {address.city}
                  <br />
                  {address.region} {address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-khu-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-khu-gold-light"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-khu-gold" />
                <span>{siteConfig.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name},{" "}
            {siteConfig.university}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
