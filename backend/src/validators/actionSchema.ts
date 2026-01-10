import { z } from "zod";

const mongoIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid MongoDB ObjectId");


const baseActionSchema = z.object({
  actor: mongoIdSchema.optional(),
  targetId: mongoIdSchema,
  action_type: z.enum(["comment", "like"]),
  value: z.string().trim().nullable().optional(),
});


export const createActionSchema = baseActionSchema.superRefine(
  (data, ctx) => {
    if (data.action_type === "comment") {
      if (!data.value || data.value.length === 0) {
        ctx.addIssue({
          path: ["value"],
          message: "Comment text is required for comment action",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  }
);


export const updateActionSchema = baseActionSchema.partial();


export const actionDocumentSchema = createActionSchema.extend({
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CreateActionInput = z.infer<typeof createActionSchema>;
export type UpdateActionInput = z.infer<typeof updateActionSchema>;
export type ActionDocument = z.infer<typeof actionDocumentSchema>;
