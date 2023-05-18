import fs from 'fs';
import dotenv from 'dotenv';
// import connectDB from './db';
import connectDB from './db';
import Post from './models/Post';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: './api/.env' });

// Connect to DB
connectDB(process.env.CLOUD_URI);

// Read JSON files
const posts = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/posts.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
	try {
		await Post.create(posts);

		console.log('Data Imported...');
		process.exit();
	} catch (err) {
		console.error(err);
	}
};

// Delete data
const deleteData = async () => {
	try {
		await Post.deleteMany();

		console.log('Data Destroyed...');
		process.exit();
	} catch (err) {
		console.error(err);
	}
};

// Execute import/delete functions when run command
// node seeder -i (or -d)

if (process.argv[2] === '-i') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
}
