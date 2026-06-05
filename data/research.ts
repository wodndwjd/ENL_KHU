import {
  Atom,
  Brain,
  Cpu,
  Layers,
  Sun,
  type LucideIcon,
} from "lucide-react";

export interface ResearchArea {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  keywords: string[];
  color: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "perovskite-solar-cells",
    title: "Perovskite Solar Cells",
    shortDescription:
      "High-efficiency, stable perovskite photovoltaics for next-generation solar energy.",
    description:
      "We develop high-performance perovskite and tandem solar cells through interface engineering, defect passivation, and scalable fabrication processes. Our work targets both record efficiencies and long-term operational stability under real-world conditions.",
    icon: Sun,
    keywords: ["Tandem PV", "Interface Engineering", "Stability", "Scalable Fabrication"],
    color: "from-amber-500/20 to-orange-600/10",
  },
  {
    id: "perovskite-leds",
    title: "Perovskite Light-Emitting Diodes",
    shortDescription:
      "Efficient, tunable perovskite emitters for displays and solid-state lighting.",
    description:
      "Our group engineers perovskite nanocrystals and thin-film emitters for high-brightness LEDs with narrow emission linewidths. We explore quantum confinement, ion migration control, and device architectures for display and lighting applications.",
    icon: Layers,
    keywords: ["PeLEDs", "Quantum Dots", "Display Tech", "Color Purity"],
    color: "from-violet-500/20 to-purple-600/10",
  },
  {
    id: "neuromorphic-optics",
    title: "Reconfigurable Optical Neuromorphic Systems",
    shortDescription:
      "Light-based computing architectures inspired by biological neural networks.",
    description:
      "We design reconfigurable optical neuromorphic systems that process information using light-matter interactions in nanostructured materials. This research bridges photonics, machine learning, and energy-efficient computing paradigms.",
    icon: Brain,
    keywords: ["Optical Computing", "Neuromorphic", "Photonic AI", "Reconfigurable"],
    color: "from-cyan-500/20 to-blue-600/10",
  },
  {
    id: "soft-electronics",
    title: "Soft Electronics",
    shortDescription:
      "Flexible, stretchable electronic systems for wearable and implantable devices.",
    description:
      "We develop soft electronic platforms integrating perovskite and organic semiconductors on flexible substrates. Applications include wearable health monitors, soft robotics interfaces, and conformable energy harvesters.",
    icon: Cpu,
    keywords: ["Wearables", "Flexible Substrates", "Stretchable", "Bio-integrated"],
    color: "from-emerald-500/20 to-teal-600/10",
  },
  {
    id: "advanced-energy-materials",
    title: "Advanced Energy Materials",
    shortDescription:
      "Novel nanomaterials for energy conversion, storage, and sustainability.",
    description:
      "Our materials science program synthesizes and characterizes advanced nanomaterials for broad energy applications. We employ in-situ spectroscopy, machine-learning-guided discovery, and multi-scale modeling to accelerate materials development.",
    icon: Atom,
    keywords: ["Nanomaterials", "Energy Storage", "Spectroscopy", "ML-guided Discovery"],
    color: "from-rose-500/20 to-red-600/10",
  },
];
