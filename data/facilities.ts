import {
  FlaskConical,
  Microscope,
  Monitor,
  Sun,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Facility {
  id: string;
  name: string;
  description: string;
  equipment: string[];
  icon: LucideIcon;
}

export const facilities: Facility[] = [
  {
    id: "cleanroom",
    name: "Nanofabrication Cleanroom",
    description:
      "Class 1000 cleanroom equipped for thin-film deposition, lithography, and device fabrication of perovskite and organic optoelectronic devices.",
    equipment: [
      "Spin coater & blade coater",
      "Thermal & e-beam evaporators",
      "UV ozone treatment system",
      "Glove box integration (N₂ atmosphere)",
    ],
    icon: FlaskConical,
  },
  {
    id: "spectroscopy",
    name: "Spectroscopy & Characterization Lab",
    description:
      "Comprehensive suite for optical, structural, and electronic characterization of nanomaterials and thin-film devices.",
    equipment: [
      "UV-Vis-NIR spectrophotometer",
      "Photoluminescence spectrometer",
      "XRD (powder & thin-film)",
      "AFM & profilometer",
    ],
    icon: Microscope,
  },
  {
    id: "solar-simulator",
    name: "Solar Cell Testing Facility",
    description:
      "AM 1.5G solar simulator and environmental chambers for photovoltaic device characterization under controlled conditions.",
    equipment: [
      "Class AAA solar simulator",
      "QE measurement system",
      "MPPT & stability testing chamber",
      "ISOS-L protocol compliance setup",
    ],
    icon: Sun,
  },
  {
    id: "led-testing",
    name: "Optoelectronic Device Lab",
    description:
      "Integrated setup for LED, photodetector, and neuromorphic device testing with calibrated photometric and electrical analysis.",
    equipment: [
      "Integrating sphere (EQE measurement)",
      "Low-noise source-measure units",
      "Cryogenic probe station",
      "Optical microscope with CCD",
    ],
    icon: Monitor,
  },
  {
    id: "soft-electronics",
    name: "Soft Electronics Workshop",
    description:
      "Dedicated space for flexible substrate processing, transfer printing, and mechanical testing of stretchable electronic systems.",
    equipment: [
      "Laser cutter & plotter",
      "Universal testing machine",
      "Humidity-controlled lamination",
      "3D printer (conductive inks)",
    ],
    icon: Zap,
  },
];
