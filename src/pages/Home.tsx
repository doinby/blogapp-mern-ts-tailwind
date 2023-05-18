import { useEffect, useState } from 'react';
import PostSummary from '../components/PostSummary';
import PostHero from '../components/PostHero';
import About from '../components/About';

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
			<section className='container mx-auto grid grid-cols-3'>
				{posts instanceof Array &&
					posts.map((post: PostProps, idx: number) =>
						idx === 0 ? (
							<>
								<PostHero key={post.title} postData={post} />
								<About />
							</>
						) : (
							<PostSummary key={post.title} postData={post} />
						)
					)}
			</section>
		</main>
	);
}
