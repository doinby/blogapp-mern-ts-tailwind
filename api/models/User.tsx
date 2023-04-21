import { Schema, model } from 'mongoose';

interface UserInterface {
	username: string;
	password: string;
	email?: string;
}

const userSchema = new Schema<UserInterface>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	email: { type: String, unique: true },
});

export const User = model<UserInterface>('User', userSchema);
