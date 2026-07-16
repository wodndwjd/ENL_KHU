export const siteConfig = {
  name: "Energy Nanomaterials Laboratory",
  shortName: "Kyung Hee University",
  university: ENL",
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
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/people", label: "People" },
  { href: "/news", label: "News" },
  { href: "/facilities", label: "Facilities" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
] as const;
