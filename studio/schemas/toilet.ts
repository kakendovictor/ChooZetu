import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'toilet',
  title: 'Mobile Toilet Unit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Unit Title / Model Name',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100),
      description: 'E.g., "The Royal Suite 3-Station VIP Trailer" or "Executive Single Luxury Loo"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'VIP Luxury Trailer', value: 'VIP Luxury Trailer' },
          { title: 'Standard Construction Loo', value: 'Standard Construction Loo' },
          { title: 'Accessible VIP Unit', value: 'Accessible VIP Unit' },
          { title: 'Single Executive Loo', value: 'Single Executive Loo' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'dailyRateKSh',
      title: 'Daily Rate (KSh)',
      type: 'number',
      description: 'Rental rate per calendar day in Kenyan Shillings (KSh)',
      validation: (Rule: any) => Rule.required().positive(),
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity / Uses per Day',
      type: 'string',
      description: 'E.g., "Up to 350 guests / 1,200 flushes" or "Site crew of 20 workers"',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features & Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description:
        'E.g., "Air Conditioning", "Freshwater Foot-Pedal Flush", "LED Backlit Vanity", "Solar Lighting", "Bluetooth Sound System", "Eco-Friendly Deodorizer"',
    }),
    defineField({
      name: 'images',
      title: 'Unit Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text (SEO)',
              description: 'Describes the photo for accessibility and Google Image search.',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.min(1).error('At least one high-resolution photo is required.'),
    }),
    defineField({
      name: 'isAvailable',
      title: 'Availability Status',
      type: 'boolean',
      initialValue: true,
      description: 'Turn off when the unit is currently rented out or undergoing routine sanitation overhaul.',
    }),
    defineField({
      name: 'internalVendorInfo',
      title: 'Internal Vendor / Supplier Info',
      type: 'text',
      rows: 3,
      description:
        'Confidential supplier notes, maintenance schedule, yard location, or fleet logistics contact in Kenya.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      price: 'dailyRateKSh',
      media: 'images.0',
    },
    prepare(selection: any) {
      const { title, category, price, media } = selection;
      return {
        title,
        subtitle: `${category} · KSh ${Number(price || 0).toLocaleString()}/day`,
        media,
      };
    },
  },
});
