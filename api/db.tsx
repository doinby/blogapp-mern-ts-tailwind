import mongoose from 'mongoose';

export default async function connectDB(uri) {
	const conn = await mongoose.connect(uri);

	// Display MongoDB host that is connected
	console.log(`MongoDB Connected: ${conn.connection.host}`);
}
