import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="gradient-hero relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-khu-gold blur-3xl" />
      </div>
      <div className="container-narrow relative text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Join the Next Generation of Energy Research
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          We welcome passionate researchers at all levels. Explore open positions
          and become part of our collaborative, international research community.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/join-us" variant="primary" size="lg">
            Open Positions
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:border-white hover:bg-white hover:text-khu-navy"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
