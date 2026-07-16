// data/news.ts

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: 'news' | 'academic' | 'notice';
  summary?: string; // 👈 55번 줄 빌드 에러를 방지하기 위해 summary 타입을 추가합니다!
}

// 1. 통합 뉴스 데이터 리스트
// (원하신다면 summary 내용을 자유롭게 한 줄씩 작성해 주세요!)
export const labNews: NewsItem[] = [
  {
    id: 1,
    date: "2026.07",
    title: "Applied Surface Science paper is highlighted Perovskite Info.",
    category: "news",
    summary: "ENL welcomes Dr. Namita Ahir, who has joined our research group as a Postdoctoral Researcher.",
  },
  {
    id: 2,
    date: "2026.06",
    title: "Jae Hyeok's polystyrene-perovksite paper is published in Applied Surface Science.",
    category: "news",
    summary: "Our proud alumnus Sang-Hyun Oh has been officially promoted to Ph.D. Candidate at UMN CEMS.",
  },
  {
    id: 3,
    date: "2025.10",
    title: "Ammarah Razzaq joined our lab for her Ph.D. program.",
    category: "academic",
    summary: "Ammarah Razzaq joined the Energy Nanomaterials Laboratory as a new Ph.D. candidate.",
  },
];

export const newsItems: NewsItem[] = labNews;
export const featuredNews: NewsItem[] = labNews.slice(0, 3);

export const categoryColors = {
  news: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  academic: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  notice: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export const categoryLabels = {
  news: "News",
  academic: "Academic",
  notice: "Notice",
};
