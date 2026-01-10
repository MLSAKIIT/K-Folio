import mongoose, { Document, Schema } from "mongoose";
import {
  createActionSchema,
  updateActionSchema,
  type CreateActionInput,
  type UpdateActionInput,
} from "../validators/actionSchema";

export type ActionType = "comment" | "like";

export interface IAction extends Document {
  userid?: mongoose.Types.ObjectId;
  targetId?: mongoose.Types.ObjectId;
  action_type: ActionType;
  value: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const ActionSchema = new Schema<IAction>(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    action_type: {
      type: String,
      enum: ["comment", "like"],
      required: true,
    },

    value: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const ActionModel = mongoose.model<IAction>("Action", ActionSchema);

// Validation helpers using Zod
export const validateCreateAction = async (data: unknown) => {
  return createActionSchema.parseAsync(data);
};

export const validateUpdateAction = async (data: unknown) => {
  return updateActionSchema.parseAsync(data);
};

// Type exports
export type { CreateActionInput, UpdateActionInput };

export default ActionModel;
