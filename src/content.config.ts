import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Stubbed content collections so Turathi can add entries himself later as
// markdown files, without touching layout code. Not surfaced on any page yet.

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    year: z.number().optional(),
    cover: z.string().optional(),
  }),
});

const octagon = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/octagon" }),
  schema: z.object({
    title: z.string(),
    tier: z.string().optional(),
    order: z.number().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { projects, octagon };
