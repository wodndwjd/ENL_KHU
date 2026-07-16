export const siteConfig = {
  name: "Energy Nanomaterials Laboratory",
  shortName: "ENL",
  university: "Kyung Hee University",
  department: "Department of Electronic Engineering",
  tagline: "Pioneering next-generation energy and optoelectronic nanomaterials",
  description:
    "The Energy Nanomaterials Laboratory at Kyung Hee University advances perovskite photovoltaics, light-emitting devices, neuromorphic optics, and soft electronics for sustainable energy technologies.",
  email: "enl@khu.ac.kr",
  phone: "+82-31-201-2989",
  address: {
    building: "Engineering Building, #472/Engineering Experimental Building, #116",
    street: "1732 Deogyeong-daero",
    city: "Yongin-si",
    region: "Gyeonggi-do",
    postalCode: "17104",
    country: "Republic of Korea",
  },
  social: {
    googleScholar: "https://scholar.google.com",
    researchGate: "https://www.researchgate.net",
    linkedin: "https://www.linkedin.com",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "Members" }, // 👈 href는 기존 /people 페이지를 유지하며, 라벨을 Members로 변경했습니다!
  { href: "/publications", label: "Publications" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
] as const;
