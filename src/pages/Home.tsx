import { useEffect, useState } from 'react';
import PostSummary from '../components/PostSummary';

interface PostProps {
	title: string;
	desc: string;
	coverImg: string;
	createdAt: Date;
	author: { username: string };
}

export default function Home() {
	const [posts, setPosts] = useState<object | null>(null);
	// const [message, setMessage] = useState('placeholder');
	// const [msgColor, setMsgColor] = useState('');

	// const hasMsg = message !== 'placeholder' ? 'visible' : 'invisible';

	useEffect(() => {
		async function getPosts() {
			const res = await fetch('http://localhost:4000/', {
				method: 'GET',
			});
			const json = await res.json();

			if (res.ok) {
				setPosts(json.data);
			}
		}

		getPosts();
	}, []);
	return (
		<main>
			<section className='container mx-auto'>
				{posts instanceof Array &&
					posts.map((post: PostProps) => {
						return <PostSummary key={post.title} postData={post} />;
					})}
			</section>
		</main>
	);
}
