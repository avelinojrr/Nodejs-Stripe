import { config } from 'dotenv';

config();

export const PORT = 7090;

export const STRIPE_APY_SECRET = process.env.STRIPE_APY_SECRET; 