// data/news.ts
export interface NewsItem {
  id: number;
  date: string;
  title: string;
  content?: string; // 상세 내용이 필요할 경우를 대비
}

export const labNews: NewsItem[] = [
  {
    id: 1,
    date: "2026.06",
    title: "Dr. Namita Ahir joined ENL as a Postdoctoral Researcher.",
  },
  {
    id: 2,
    date: "2026.05",
    title: "Sang-Hyun Oh (Alumnus) promoted to Ph.D. Candidate at UMN CEMS.",
  },
  {
    id: 3,
    date: "2025.10",
    title: "Ammarah Razzaq joined our lab for her Ph.D. program.",
  },
  // 앞으로 뉴스가 추가되면 여기에 계속 밑으로 받아 적으면 됩니다!
];
