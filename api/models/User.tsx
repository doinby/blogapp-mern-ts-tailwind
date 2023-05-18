import { Schema, model } from 'mongoose';

interface UserInterface {
	username: string;
	password: string;
	firstName: string;
	lastName: string;
}

const UserSchema = new Schema<UserInterface>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
});

const User = model<UserInterface>('User', UserSchema);
export default User;
