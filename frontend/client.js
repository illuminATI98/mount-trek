import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "u6yzmo26",
  dataset: "production",
  apiVersion: "2024-08-15",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}