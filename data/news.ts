export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "award" | "publication" | "event" | "achievement" | "announcement";
  summary: string;
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Nature Energy Paper on Tandem Perovskite/Silicon Cells Published",
    date: "2025-03-15",
    category: "publication",
    summary:
      "Our latest work on molecular interface passivation achieves record efficiency in monolithic tandem solar cells.",
    featured: true,
  },
  {
    id: "news-2",
    title: "Prof. Kim Receives Korea Research Foundation Young Scientist Award",
    date: "2025-02-28",
    category: "award",
    summary:
      "Recognition for outstanding contributions to perovskite optoelectronics and energy nanomaterials research.",
    featured: true,
  },
  {
    id: "news-3",
    title: "ENL Hosts International Workshop on Perovskite Optoelectronics",
    date: "2025-01-20",
    category: "event",
    summary:
      "Over 120 researchers from 15 countries gathered at Kyung Hee University for two days of talks and collaboration.",
    featured: true,
  },
  {
    id: "news-4",
    title: "Hyeon-Jun Lee Wins Best Poster Award at MRS Spring Meeting",
    date: "2024-11-08",
    category: "achievement",
    summary:
      "Ph.D. candidate recognized for work on scalable fabrication of perovskite tandem modules.",
    featured: false,
  },
  {
    id: "news-5",
    title: "New NSF-KRF Collaborative Grant on Neuromorphic Photonics",
    date: "2024-09-12",
    category: "announcement",
    summary:
      "Three-year international collaboration with Northwestern University on reconfigurable optical computing.",
    featured: false,
  },
  {
    id: "news-6",
    title: "Science Advances Paper on Optical Neuromorphic Metasurfaces",
    date: "2024-07-22",
    category: "publication",
    summary:
      "First demonstration of phase-change perovskite metasurfaces for in-situ reconfigurable optical synapses.",
    featured: false,
  },
];

export const featuredNews = newsItems.filter((n) => n.featured);

export const categoryLabels: Record<NewsItem["category"], string> = {
  award: "Award",
  publication: "Publication",
  event: "Event",
  achievement: "Achievement",
  announcement: "Announcement",
};

export const categoryColors: Record<NewsItem["category"], string> = {
  award: "bg-amber-100 text-amber-800",
  publication: "bg-blue-100 text-blue-800",
  event: "bg-purple-100 text-purple-800",
  achievement: "bg-emerald-100 text-emerald-800",
  announcement: "bg-slate-100 text-slate-800",
};
