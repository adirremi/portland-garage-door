export const photos = {
  hero: {
    src: "/images/hero-door.jpg",
    alt: "Sectional steel garage door on a Portland house",
  },
  repair: {
    src: "/images/service-repair.jpg",
    alt: "Garage door tracks, rollers, and lift hardware",
  },
  springs: {
    src: "/images/service-springs.jpg",
    alt: "Torsion springs on a shaft above a garage door",
  },
  opener: {
    src: "/images/service-opener.jpg",
    alt: "Ceiling-mounted garage door opener and rail",
  },
  panels: {
    src: "/images/service-panels.jpg",
    alt: "Insulated steel garage door panels and weather seal",
  },
  texture: {
    src: "/images/texture-steel.jpg",
    alt: "",
  },
} as const;

export const services = [
  {
    title: "Garage door repair",
    text: "Doors that stick, sit crooked, reverse, or stop partway through the opening.",
    image: photos.repair,
    points: [
      "Residential and commercial sectional doors",
      "Tracks, rollers, hinges, and cables",
      "Doors that bind, shake, or will not finish a cycle",
    ],
  },
  {
    title: "Springs and cables",
    text: "Torsion and extension springs, plus the lift cables that travel with them.",
    image: photos.springs,
    points: [
      "Torsion springs on the shaft above the door",
      "Extension springs along the horizontal tracks",
      "Lift cables replaced in matched sets",
    ],
  },
  {
    title: "Openers",
    text: "Chain, belt, and wall-mount units that hum, click, or move the door only partway.",
    image: photos.opener,
    points: [
      "Opener motors and logic boards",
      "Safety sensors at the floor",
      "Remotes and wall controls",
    ],
  },
  {
    title: "Doors and panels",
    text: "Dented sections, full door installs, and weather seals on the opening.",
    image: photos.panels,
    points: [
      "Single-section panel swaps where the model is available",
      "Full door replacement on a measured opening",
      "Bottom seals and perimeter weatherstrip",
    ],
  },
] as const;
