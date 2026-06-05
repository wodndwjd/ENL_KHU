import { Hero } from "@/components/home/Hero";
import { ResearchAreas } from "@/components/home/ResearchAreas";
import { FeaturedPublications } from "@/components/home/FeaturedPublications";
import { NewsSection } from "@/components/home/NewsSection";
import { FacultyProfile } from "@/components/home/FacultyProfile";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResearchAreas />
      <FeaturedPublications />
      <NewsSection />
      <FacultyProfile />
      <CTASection />
    </>
  );
}
