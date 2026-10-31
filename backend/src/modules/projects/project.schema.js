const { z } = require('zod');

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  githubUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  liveUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  featured: z.boolean().optional().default(false),
  displayOrder: z.number().int().optional().default(0),
  status: z.enum(['draft', 'published']).optional().default('draft'),
});

module.exports = { projectSchema };
