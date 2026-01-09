import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatarUrl?: string;
  bio?: string;
  createdAt: Date;
  isDeleted?: boolean;
  followerCount: number;
  followingCount: number;
}

const UserSchema: Schema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarUrl: { type: String },
  bio: { 
    type: String,

   },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
   followerCount: {type: Number, default: 0,},
    followingCount:{type: Number,default: 0,},
});

export default mongoose.model<IUser>('User', UserSchema);

