import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post (SEO Guide)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Headline',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(120),
      description: 'E.g., "Mobile Toilet Rental Cost in Nairobi (2026 Price Guide)"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Path)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Descriptive text for accessibility and search indexing.',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary / Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(250),
      description: 'Concise summary for search results and social sharing cards.',
    }),
    defineField({
      name: 'body',
      title: 'Article Content (Portable Text)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { title, date, media } = selection;
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString('en-KE', { dateStyle: 'medium' }) : 'Draft',
        media,
      };
    },
  },
});
