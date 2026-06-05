"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const { address } = siteConfig;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in touch with the Energy Nanomaterials Laboratory."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-khu-navy">Contact Information</h2>
              <p className="mt-4 leading-relaxed text-khu-slate">
                We welcome inquiries about research collaborations, graduate
                admissions, and media requests.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-khu-cream">
                    <MapPin className="text-khu-navy" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-khu-navy">Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-khu-slate">
                      {siteConfig.name}
                      <br />
                      {siteConfig.department}
                      <br />
                      {siteConfig.university}
                      <br />
                      {address.building}
                      <br />
                      {address.street}, {address.city}
                      <br />
                      {address.region} {address.postalCode}, {address.country}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-khu-cream">
                    <Mail className="text-khu-navy" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-khu-navy">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 text-sm text-khu-blue hover:text-khu-gold"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-khu-cream">
                    <Phone className="text-khu-navy" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-khu-navy">Phone</h3>
                    <p className="mt-1 text-sm text-khu-slate">{siteConfig.phone}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-khu-cream">
                <div className="flex h-64 flex-col items-center justify-center p-8 text-center sm:h-80">
                  <MapPin className="mb-4 text-khu-gold" size={40} />
                  <p className="font-semibold text-khu-navy">Map Placeholder</p>
                  <p className="mt-2 text-sm text-khu-slate">
                    Kyung Hee University, Global Campus
                    <br />
                    Yongin-si, Gyeonggi-do, South Korea
                  </p>
                  <p className="mt-4 text-xs text-khu-slate">
                    Embed Google Maps or Naver Map here
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-khu-navy">Send a Message</h2>
              <p className="mt-2 text-sm text-khu-slate">
                Fill out the form below and we will respond as soon as possible.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl bg-emerald-50 p-6 text-center">
                  <p className="font-semibold text-emerald-800">
                    Thank you for your message!
                  </p>
                  <p className="mt-2 text-sm text-emerald-700">
                    We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-khu-navy"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-khu-gold focus:ring-2 focus:ring-khu-gold/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-khu-navy"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-khu-gold focus:ring-2 focus:ring-khu-gold/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-khu-navy"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-khu-gold focus:ring-2 focus:ring-khu-gold/20"
                    >
                      <option>Research Collaboration</option>
                      <option>Graduate Admission</option>
                      <option>Media Inquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-khu-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-khu-gold focus:ring-2 focus:ring-khu-gold/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-khu-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-khu-blue sm:w-auto"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
