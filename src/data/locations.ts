export type Region =
  | "East Metro"
  | "Central"
  | "Northeast"
  | "Southeast"
  | "Northwest"
  | "North"
  | "Southwest";

export type Location = {
  slug: string;
  street: string;
  city: string;
  zip: string;
  neighborhood: string;
  region: Region;
  phone: string;
  mapUrl: string;
};

export const locations: Location[] = [
  {
    slug: "16017-se-happy-valley-town-center-dr",
    street: "16017 SE Happy Valley Town Center Dr",
    city: "Happy Valley",
    zip: "97086",
    neighborhood: "Happy Valley Town Center",
    region: "East Metro",
    phone: "971-535-3718",
    mapUrl: "https://maps.app.goo.gl/ukmYyvyoMq1u9egx5",
  },
];

export const shop = locations[0];

export const regions: Region[] = [
  "East Metro",
  "Central",
  "Northeast",
  "Southeast",
  "Northwest",
  "North",
  "Southwest",
];

export const areas: { name: string; region: Region; city: string }[] = [
  { name: "Happy Valley", region: "East Metro", city: "Happy Valley, OR" },
  { name: "Downtown", region: "Central", city: "Portland, OR" },
  { name: "Pearl District", region: "Central", city: "Portland, OR" },
  { name: "Lloyd District", region: "Central", city: "Portland, OR" },
  { name: "Alberta", region: "Northeast", city: "Portland, OR" },
  { name: "Hollywood", region: "Northeast", city: "Portland, OR" },
  { name: "Hawthorne", region: "Southeast", city: "Portland, OR" },
  { name: "Division", region: "Southeast", city: "Portland, OR" },
  { name: "Sellwood", region: "Southeast", city: "Portland, OR" },
  { name: "Nob Hill", region: "Northwest", city: "Portland, OR" },
  { name: "St. Johns", region: "North", city: "Portland, OR" },
  { name: "Kenton", region: "North", city: "Portland, OR" },
  { name: "Multnomah", region: "Southwest", city: "Portland, OR" },
  { name: "Hillsdale", region: "Southwest", city: "Portland, OR" },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function fullAddress(location: Location) {
  return `${location.street}, ${location.city}, OR ${location.zip}, United States`;
}

export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export function mapsEmbedSrc(location: Location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress(location))}&z=15&output=embed`;
}

export function nearbyLocations(slug: string, limit = 3) {
  const current = getLocation(slug);
  if (!current) return locations.slice(0, limit);

  const sameRegion = locations.filter(
    (location) => location.slug !== slug && location.region === current.region,
  );
  const rest = locations.filter(
    (location) => location.slug !== slug && location.region !== current.region,
  );

  return [...sameRegion, ...rest].slice(0, limit);
}
