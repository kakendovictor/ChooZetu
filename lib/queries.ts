// GROQ queries for Sanity CMS in ChooZetu

export const ALL_TOILETS_QUERY = `*[_type == "toilet"] | order(dailyRateKSh desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  dailyRateKSh,
  capacity,
  features,
  "images": images[]{
    "url": asset->url,
    alt
  },
  isAvailable,
  internalVendorInfo
}`;

export const FEATURED_TOILETS_QUERY = `*[_type == "toilet" && isAvailable == true] | order(dailyRateKSh desc)[0...4] {
  _id,
  title,
  "slug": slug.current,
  category,
  dailyRateKSh,
  capacity,
  features,
  "images": images[]{
    "url": asset->url,
    alt
  },
  isAvailable
}`;

export const TOILETS_BY_CATEGORY_QUERY = `*[_type == "toilet" && category == $category] | order(dailyRateKSh desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  dailyRateKSh,
  capacity,
  features,
  "images": images[]{
    "url": asset->url,
    alt
  },
  isAvailable
}`;

export const TOILET_BY_SLUG_QUERY = `*[_type == "toilet" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  dailyRateKSh,
  capacity,
  features,
  "images": images[]{
    "url": asset->url,
    alt
  },
  isAvailable,
  internalVendorInfo
}`;

export const ALL_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": mainImage.alt
  }
}`;

export const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": mainImage.alt
  }
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  "mainImage": {
    "url": mainImage.asset->url,
    "alt": mainImage.alt
  },
  body
}`;
