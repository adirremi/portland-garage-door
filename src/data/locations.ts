export type Region =
  | "Central"
  | "Northeast"
  | "Southeast"
  | "Northwest"
  | "North"
  | "Southwest";

export type Location = {
  slug: string;
  street: string;
  zip: string;
  neighborhood: string;
  region: Region;
  phone: string;
  mapUrl: string;
};

/** Storefronts, phones, and map links go here when the client sends them. */
export const locations: Location[] = [];

export const regions: Region[] = [
  "Central",
  "Northeast",
  "Southeast",
  "Northwest",
  "North",
  "Southwest",
];

export const areas: { name: string; region: Region }[] = [
  { name: "Downtown", region: "Central" },
  { name: "Pearl District", region: "Central" },
  { name: "Lloyd District", region: "Central" },
  { name: "Alberta", region: "Northeast" },
  { name: "Hollywood", region: "Northeast" },
  { name: "Hawthorne", region: "Southeast" },
  { name: "Division", region: "Southeast" },
  { name: "Sellwood", region: "Southeast" },
  { name: "Nob Hill", region: "Northwest" },
  { name: "St. Johns", region: "North" },
  { name: "Kenton", region: "North" },
  { name: "Multnomah", region: "Southwest" },
  { name: "Hillsdale", region: "Southwest" },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function fullAddress(location: Location) {
  return `${location.street}, Portland, OR ${location.zip}, United States`;
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
