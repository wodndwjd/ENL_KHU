export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  featured?: boolean;
  highlight?: string;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title:
      "Efficient and Stable Perovskite/Silicon Tandem Solar Cells via Molecular Interface Passivation",
    authors: "Kim, J., Park, S., Lee, H., et al.",
    journal: "Nature Energy",
    year: 2025,
    volume: "10",
    pages: "412–421",
    doi: "10.1038/s41560-025-00001",
    featured: true,
    highlight: "Record tandem efficiency with enhanced moisture stability",
  },
  {
    id: "pub-2",
    title:
      "High-Brightness Perovskite Light-Emitting Diodes with Suppressed Ion Migration",
    authors: "Choi, Y., Han, M., Kim, J., et al.",
    journal: "Advanced Materials",
    year: 2025,
    volume: "37",
    pages: "2401234",
    doi: "10.1002/adma.202401234",
    featured: true,
    highlight: "External quantum efficiency exceeding 25% in green PeLEDs",
  },
  {
    id: "pub-3",
    title:
      "Reconfigurable Optical Neuromorphic Networks Using Phase-Change Perovskite Metasurfaces",
    authors: "Park, S., Jung, W., Kim, J., et al.",
    journal: "Science Advances",
    year: 2024,
    volume: "10",
    pages: "eadk5678",
    doi: "10.1126/sciadv.adk5678",
    featured: true,
    highlight: "First demonstration of in-situ reconfigurable optical synapses",
  },
  {
    id: "pub-4",
    title:
      "Stretchable Perovskite Photodetectors for Wearable Health Monitoring",
    authors: "Lee, H., Choi, Y., Park, S., et al.",
    journal: "ACS Nano",
    year: 2024,
    volume: "18",
    pages: "15678–15689",
    doi: "10.1021/acsnano.4c05678",
    featured: false,
  },
  {
    id: "pub-5",
    title:
      "Machine Learning-Guided Discovery of Lead-Free Perovskite Absorbers",
    authors: "Han, M., Jung, W., Kim, J., et al.",
    journal: "Joule",
    year: 2024,
    volume: "8",
    pages: "2891–2905",
    doi: "10.1016/j.joule.2024.08.012",
    featured: false,
  },
  {
    id: "pub-6",
    title:
      "Ultrathin Flexible Perovskite Solar Modules for Building-Integrated Photovoltaics",
    authors: "Kim, J., Lee, H., Choi, Y., et al.",
    journal: "Energy & Environmental Science",
    year: 2023,
    volume: "16",
    pages: "4521–4533",
    doi: "10.1039/d3ee02891a",
    featured: false,
  },
];

export const featuredPublications = publications.filter((p) => p.featured);
