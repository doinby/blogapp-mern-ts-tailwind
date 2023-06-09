import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import multer from 'multer';

// Models
import User from './models/User';
import Post from './models/Post';

// Dotenv setup
dotenv.config({ path: './api/.env' });

const PORT = 4000;

// JWT setup
const saltRounds = 10;
const secretToken = process.env.ACCESS_TOKEN_SECRET;

// Multer setup
const storage = multer.diskStorage({
	// Save file to ./api/uploads folder
	destination: function (req, file, cb) {
		cb(null, 'api/uploads/');
	},
	// Save to db with OG file name and extension
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});
const uploadMiddleware = multer({ storage: storage });

const app = express();

connectDB(process.env.CLOUD_URI);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', async (req, res) => {
	try {
		const posts = await Post.find().populate('author', [
			'_id',
			'username',
			'firstName',
			'lastName',
		]);
		res.status(200).json({ success: true, data: posts });
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.get('/post/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		const post = await Post.findById(postId).populate('author', [
			'_id',
			'username',
			'firstName',
			'lastName',
		]);

		res.status(200).json(post);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.post('/register', async (req, res) => {
	const { username, password: plainPass, firstName, lastName } = req.body;

	// Create hashed password to store in DB
	const hashedPass = await bcrypt.hash(plainPass, saltRounds);

	try {
		const userInfo = await User.create({
			username,
			password: hashedPass,
			firstName,
			lastName,
		});
		res.json(userInfo);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.post('/login', async (req, res) => {
	const { username, password } = req.body;

	try {
		const userInfo = await User.findOne({ username });
		const isMatched =
			userInfo instanceof Object &&
			(await bcrypt.compare(password, userInfo.password));

		if (!isMatched) res.status(400).json('Login Not Matched!');

		jwt.sign(
			{ username, id: userInfo instanceof Object && userInfo._id },
			secretToken,
			(err: Error, accessToken: string) => {
				if (err) throw err;
				res
					.cookie('token', accessToken)
					.status(200)
					.json({ success: true, data: userInfo });
			}
		);
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.post('/welcome', async (req, res) => {
	const { token: accessToken } = req.cookies;

	if (accessToken)
		jwt.verify(accessToken, secretToken, {}, (err: Error, data: object) => {
			if (err) throw err;
			res.status(200).json({ success: true, data: data });
		});
});

app.post('/logout', async (req, res) => {
	res.clearCookie('token').json('ok');
});

app.post('/create', uploadMiddleware.single('coverImg'), async (req, res) => {
	const { title, desc, content } = req.body;
	const coverImg = req.file?.path;
	const { token: accessToken } = req.cookies;

	try {
		if (accessToken) {
			jwt.verify(
				accessToken,
				secretToken,
				{},
				async (err: Error, userInfo: { id: string }) => {
					if (err) throw err;
					const postInfo = await Post.create({
						title,
						desc,
						content,
						coverImg,
						author: userInfo.id,
					});
					res.status(200).json({ success: true, data: postInfo });
				}
			);
		}
	} catch (err) {
		res.status(400).json(err.message);
	}
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
