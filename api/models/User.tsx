import { Schema, model } from 'mongoose';

interface UserInterface {
	username: string;
	password: string;
}

const userSchema = new Schema<UserInterface>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

export const User = model<UserInterface>('User', userSchema);
