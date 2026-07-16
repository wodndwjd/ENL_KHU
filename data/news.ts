// data/news.ts

// 1. 뉴스 아이템 타입 정의
export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category?: 'news' | 'academic' | 'notice'; // 기존 뉴스 페이지에 정의된 카테고리 타입이 있을 경우 대응
}

// 2. [Hero.tsx]와 뉴스 페이지 전체에서 쓸 통합 뉴스 데이터 목록
// (앞으로 뉴스를 추가하실 때는 이 'labNews' 배열 가장 윗줄에 새 뉴스를 넣으시면 됩니다!)
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

// 3. 기존 뉴스 전용 페이지(/news/page.tsx) 및 컴포넌트(NewsSection.tsx)들과의 호환을 위한 매핑 변수들
export const newsItems = labNews; // newsItems 이름으로도 데이터를 연동할 수 있도록 매핑
export const featuredNews = labNews.slice(0, 3); // 메인 추천용 뉴스

// 카테고리별 디자인 색상 맵 (빌드 에러를 내던 범인들을 안전하게 정의해 줍니다)
export const categoryColors = {
  news: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  academic: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  notice: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

// 카테고리 노출 라벨 맵
export const categoryLabels = {
  news: "News",
  academic: "Academic",
  notice: "Notice",
};
