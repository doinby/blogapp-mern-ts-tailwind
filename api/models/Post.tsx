import { Schema, model } from 'mongoose';
interface PostInterface {
	title: string;
	desc: string;
	content: string;
	coverImg: string;
	author: object;
}

const PostSchema = new Schema<PostInterface>(
	{
		title: { type: String, required: true, unique: true },
		author: { type: Schema.Types.ObjectId, ref: 'User' },
		desc: { type: String, required: true },
		content: { type: String, required: true },
		coverImg: { type: String },
	},
	{ timestamps: true }
);

const Post = model<PostInterface>('Post', PostSchema);
export default Post;
