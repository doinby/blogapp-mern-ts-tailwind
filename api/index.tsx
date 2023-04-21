import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './db';

// Models
import { User } from './models/User';

const PORT = 4000;
const app = express();

dotenv.config({ path: './api/.env' });
connectDB(process.env.CLOUD_URI);

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	try {
		const userInfo = await User.create({ username, password });
		res.json(userInfo);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
