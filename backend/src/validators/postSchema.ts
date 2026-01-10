import { z } from "zod";

export const mediaSchema = z.object({
  url: z.string().url(),
  type: z.enum(["image", "video"]),
});

export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(300, "Title too long")
    .trim(),

  description: z
    .string()
    .max(2000, "Description too long")
    .trim()
    .optional(),

  tags: z.array(z.string().trim()).max(10).optional(),

  media: z.array(mediaSchema).max(10).optional(),
});

export const editPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(300, "Title too long")
    .trim()
    .optional(),

  description: z
    .string()
    .max(2000, "Description too long")
    .trim()
    .optional(),

  tags: z.array(z.string().trim()).max(10).optional(),

  media: z.array(mediaSchema).max(10).optional(),
}).refine(
  (data) => Object.values(data).some((value) => value !== undefined),
  {
    message: "At least one field must be provided for update",
  }
);

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type EditPostInput = z.infer<typeof editPostSchema>;