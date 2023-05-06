import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Models
import { User } from './models/User';

dotenv.config({ path: './api/.env' });

const PORT = 4000;
const saltRounds = 10;
const secretToken = process.env.ACCESS_TOKEN_SECRET;

const app = express();

connectDB(process.env.CLOUD_URI);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/register', async (req, res) => {
	const { username, password: plainPass } = req.body;

	// Create hashed password to store in DB
	const hashedPass = await bcrypt.hash(plainPass, saltRounds);

	try {
		const userInfo = await User.create({ username, password: hashedPass });
		res.json(userInfo);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.post('/login', async (req, res) => {
	const { username, password } = req.body;

	try {
		const userInfo = await User.findOne({ username });
		const isMatched = await bcrypt.compare(password, userInfo?.password);

		if (!isMatched) res.status(400).json('Login Not Matched!');

		jwt.sign({ username }, secretToken, (err, accessToken) => {
			if (err) throw err;
			res.cookie('token', accessToken).json('ok');
		});
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.post('/welcome', async (req, res) => {
	const { token: accessToken } = req.cookies;

	if (accessToken)
		jwt.verify(accessToken, secretToken, {}, (err, data) => {
			if (err) throw err;
			res.json(data);
		});
});

app.post('/logout', async (req, res) => {
	res.clearCookie('token').json('ok');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
