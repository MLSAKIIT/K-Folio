import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import { json, urlencoded } from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Basic health check
app.get('/', (req, res) => res.send('API running'));

export default app;

