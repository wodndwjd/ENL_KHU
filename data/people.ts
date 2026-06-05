export type PersonRole =
  | "faculty"
  | "postdoc"
  | "phd"
  | "masters"
  | "undergraduate"
  | "alumni";

export interface Person {
  id: string;
  name: string;
  role: PersonRole;
  title: string;
  email?: string;
  research?: string;
  education?: string;
  image?: string;
  featured?: boolean;
}

export const people: Person[] = [
  {
    id: "kim-j",
    name: "Prof. Jae-Won Kim",
    role: "faculty",
    title: "Principal Investigator · Associate Professor",
    email: "jaewon.kim@khu.ac.kr",
    research:
      "Perovskite photovoltaics, optoelectronic devices, and advanced energy nanomaterials",
    education:
      "Ph.D. in Materials Science, KAIST · Postdoc, MIT",
    featured: true,
  },
  {
    id: "park-s",
    name: "Dr. So-Yeon Park",
    role: "postdoc",
    title: "Postdoctoral Researcher",
    email: "soyeon.park@khu.ac.kr",
    research: "Perovskite LEDs and optical neuromorphic systems",
  },
  {
    id: "lee-h",
    name: "Hyeon-Jun Lee",
    role: "phd",
    title: "Ph.D. Candidate",
    email: "hyeonjun.lee@khu.ac.kr",
    research: "Tandem perovskite/silicon solar cells",
  },
  {
    id: "choi-y",
    name: "Yu-Jin Choi",
    role: "phd",
    title: "Ph.D. Candidate",
    email: "yujin.choi@khu.ac.kr",
    research: "Soft electronics and wearable photodetectors",
  },
  {
    id: "han-m",
    name: "Min-Su Han",
    role: "masters",
    title: "M.S. Student",
    email: "minsu.han@khu.ac.kr",
    research: "Machine learning-guided materials discovery",
  },
  {
    id: "jung-w",
    name: "Woo-Jin Jung",
    role: "masters",
    title: "M.S. Student",
    email: "woojin.jung@khu.ac.kr",
    research: "Reconfigurable optical metasurfaces",
  },
  {
    id: "alumni-1",
    name: "Dr. Ji-Hoon Kim",
    role: "alumni",
    title: "Alumni · Samsung Advanced Institute of Technology",
    research: "Perovskite solar cells (Ph.D. 2023)",
  },
];

export const faculty = people.filter((p) => p.role === "faculty");
export const currentMembers = people.filter((p) => p.role !== "alumni");
export const alumni = people.filter((p) => p.role === "alumni");

export const roleLabels: Record<PersonRole, string> = {
  faculty: "Faculty",
  postdoc: "Postdoctoral Researchers",
  phd: "Ph.D. Students",
  masters: "M.S. Students",
  undergraduate: "Undergraduate Researchers",
  alumni: "Alumni",
};
