// data/news.ts

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: 'news' | 'academic' | 'notice';
}

// 1. 통합 뉴스 데이터 리스트 (앞으로 최신 뉴스를 맨 위에 추가하시면 됩니다)
export const labNews: NewsItem[] = [
  {
    id: 1,
    date: "2026.06",
    title: "Dr. Namita Ahir joined ENL as a Postdoctoral Researcher.",
    category: "news",
  },
  {
    id: 2,
    date: "2026.05",
    title: "Sang-Hyun Oh (Alumnus) promoted to Ph.D. Candidate at UMN CEMS.",
    category: "news",
  },
  {
    id: 3,
    date: "2025.10",
    title: "Ammarah Razzaq joined our lab for her Ph.D. program.",
    category: "academic",
  },
];

// 2. 다른 페이지(app/news/page.tsx 및 NewsSection.tsx)에서 참조하는 별칭 정의
export const newsItems: NewsItem[] = labNews;
export const featuredNews: NewsItem[] = labNews.slice(0, 3);

// 3. 빌드 에러를 내던 카테고리 스타일 맵 정보 정의
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
