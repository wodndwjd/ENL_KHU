export interface Position {
  id: string;
  title: string;
  type: "phd" | "masters" | "postdoc" | "undergraduate";
  description: string;
  requirements: string[];
  benefits: string[];
  open: boolean;
}

export const positions: Position[] = [
  {
    id: "phd-2025",
    title: "Ph.D. Students",
    type: "phd",
    description:
      "We are seeking motivated Ph.D. students to join our team in perovskite photovoltaics, light-emitting devices, or optical neuromorphic systems. Successful candidates will work on cutting-edge projects with opportunities for international collaboration.",
    requirements: [
      "M.S. degree in Materials Science, Physics, Electrical Engineering, or related field",
      "Strong academic record and research experience",
      "Proficiency in English (TOEFL/IELTS for international applicants)",
      "Passion for experimental materials science and device physics",
    ],
    benefits: [
      "Full tuition scholarship + monthly stipend (KRF/GKS eligible)",
      "Access to state-of-the-art fabrication and characterization facilities",
      "Opportunities for conference travel and international exchanges",
      "Collaborative environment with leading research groups worldwide",
    ],
    open: true,
  },
  {
    id: "ms-2025",
    title: "M.S. Students",
    type: "masters",
    description:
      "M.S. positions are available for students interested in gaining hands-on experience in nanomaterials synthesis, device fabrication, and characterization techniques.",
    requirements: [
      "B.S. degree in Engineering or Natural Sciences",
      "Basic laboratory experience preferred",
      "Strong motivation and teamwork skills",
    ],
    benefits: [
      "Tuition support and research assistantship",
      "Structured training in thin-film processing and spectroscopy",
      "Pathway to Ph.D. program for outstanding performers",
    ],
    open: true,
  },
  {
    id: "postdoc-2025",
    title: "Postdoctoral Researchers",
    type: "postdoc",
    description:
      "Postdoctoral positions are open for researchers with expertise in perovskite optoelectronics, photonics, or soft electronics. Candidates with a strong publication record are encouraged to apply.",
    requirements: [
      "Ph.D. in relevant field (completed within last 5 years)",
      "First-author publications in top-tier journals",
      "Experience with device fabrication or optical characterization",
    ],
    benefits: [
      "Competitive salary following university guidelines",
      "Independent project development opportunities",
      "Support for grant applications and career development",
    ],
    open: true,
  },
  {
    id: "ug-2025",
    title: "Undergraduate Research Interns",
    type: "undergraduate",
    description:
      "Undergraduate students at Kyung Hee University can join ENL for semester-long or summer research internships to explore academic research careers.",
    requirements: [
      "Currently enrolled KHU undergraduate student",
      "Minimum GPA 3.5/4.5",
      "Commitment of at least 10 hours per week",
    ],
    benefits: [
      "Mentorship from senior lab members",
      "Exposure to publication-quality research",
      "Credit for research practicum courses",
    ],
    open: true,
  },
];

export const applicationSteps = [
  {
    step: 1,
    title: "Prepare Your Application",
    description:
      "Email your CV, transcripts, and a brief statement of research interest (1 page) to the PI.",
  },
  {
    step: 2,
    title: "Initial Review",
    description:
      "Applications are reviewed on a rolling basis. Shortlisted candidates will be contacted within two weeks.",
  },
  {
    step: 3,
    title: "Interview",
    description:
      "Selected candidates will have an online or in-person interview to discuss research fit and lab culture.",
  },
  {
    step: 4,
    title: "Offer & Enrollment",
    description:
      "Successful candidates receive an offer letter and guidance on KHU graduate school admission procedures.",
  },
];
