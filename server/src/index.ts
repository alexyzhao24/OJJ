import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/', (req: Request, res: Response) => {
  res.send('Venture API is sprinting! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});