export const photos = {
  logo: {
    src: "/images/logo.png",
    alt: "HighGuard Garage Door Repair",
  },
  hero: {
    src: "/images/hero-cover.jpg",
    alt: "HighGuard technician at a sectional garage door in Happy Valley",
  },
  repair: {
    src: "/images/service-repair.jpg",
    alt: "Technician checking a garage door jamb and hardware",
  },
  springs: {
    src: "/images/service-springs.jpg",
    alt: "Torsion spring on a shaft above a garage door",
  },
  opener: {
    src: "/images/service-opener.jpg",
    alt: "Garage door opener and rail in an open residential garage",
  },
  panels: {
    src: "/images/service-panels.jpg",
    alt: "Raised-panel garage door on a stone house",
  },
  house: {
    src: "/images/gallery-house.jpg",
    alt: "White sectional garage door on a gray house",
  },
  texture: {
    src: "/images/texture-steel.jpg",
    alt: "",
  },
} as const;

export const issues = [
  "Door reverses before it reaches the floor",
  "Grinding, scraping, or a loud pop from the door",
  "One side of the door sits lower than the other",
  "Door opens a few inches and stops",
  "Remote and wall button both unresponsive",
  "Visible gap in a torsion spring coil",
  "Door binds at the same spot every cycle",
  "Roller out of the track",
];

export const faqs = [
  {
    q: "Where is the shop?",
    a: "16017 SE Happy Valley Town Center Dr, Happy Valley, OR 97086, United States.",
  },
  {
    q: "What number do I call?",
    a: "971-535-3718. The same number is on every page.",
  },
  {
    q: "What work is listed?",
    a: "Garage door repair, springs and cables, openers, and doors and panels. Residential and commercial sectional doors.",
  },
  {
    q: "Do you work in Portland?",
    a: "The shop is in Happy Valley. Portland neighborhoods are listed on the locations page.",
  },
  {
    q: "How is a job quoted?",
    a: "Call the shop with the address and what the door is doing. Pricing is quoted per job.",
  },
];

export const services = [
  {
    slug: "garage-door-repair",
    title: "Garage door repair",
    text: "Doors that stick, sit crooked, reverse, or stop partway through the opening.",
    image: photos.repair,
    points: [
      "Residential and commercial sectional doors",
      "Tracks, rollers, hinges, and cables",
      "Doors that bind, shake, or will not finish a cycle",
      "Off-track doors and bent track sections",
    ],
    issues: [
      "Door reverses before it reaches the floor",
      "Door binds at the same spot every cycle",
      "One side of the door sits lower than the other",
      "Roller out of the track",
    ],
  },
  {
    slug: "springs-and-cables",
    title: "Springs and cables",
    text: "Torsion and extension springs, plus the lift cables that travel with them.",
    image: photos.springs,
    points: [
      "Torsion springs on the shaft above the door",
      "Extension springs along the horizontal tracks",
      "Lift cables replaced in matched sets",
      "Drums and bearings checked with the spring",
    ],
    issues: [
      "Visible gap in a torsion spring coil",
      "Door feels heavy when lifted by hand",
      "Loud pop from the garage, then the door will not lift",
      "Cable hanging loose after the spring let go",
    ],
  },
  {
    slug: "openers",
    title: "Openers",
    text: "Chain, belt, and wall-mount units that hum, click, or move the door only partway.",
    image: photos.opener,
    points: [
      "Opener motors and logic boards",
      "Safety sensors at the floor",
      "Remotes and wall controls",
      "Chain, belt, and wall-mount units",
    ],
    issues: [
      "Remote and wall button both unresponsive",
      "Motor runs but the door does not move",
      "Door closes, touches the floor, and reverses",
      "Opener light blinks and the door will not close",
    ],
  },
  {
    slug: "doors-and-panels",
    title: "Doors and panels",
    text: "Dented sections, full door installs, and weather seals on the opening.",
    image: photos.panels,
    points: [
      "Single-section panel swaps where the model is available",
      "Full door replacement on a measured opening",
      "Bottom seals and perimeter weatherstrip",
      "Raised-panel, flush, and carriage-style doors as options",
    ],
    issues: [
      "Dented section from a vehicle bump",
      "Rust along the bottom section",
      "Bowed panel that no longer meets the floor",
      "Hinge torn out of a damaged section",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function siblingServices(slug: string, limit = 2) {
  const rest = services.filter((service) => service.slug !== slug);
  return rest.slice(0, limit);
}

export const gallery = [
  photos.hero,
  photos.repair,
  photos.springs,
  photos.opener,
  photos.panels,
  photos.house,
] as const;
