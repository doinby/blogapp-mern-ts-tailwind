import { useEffect, useState } from 'react';
import PostSummary from '../components/PostSummary';
import PostHero from '../components/PostHero';
import About from '../components/About';
import { IPost } from '../configs/interfaces';

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
			<section className='container mx-auto grid grid-cols-3 gap-12'>
				{posts instanceof Array &&
					posts.map((post: IPost, idx: number) =>
						idx === 0 ? (
							<div key={post.title} className='col-span-3 grid grid-cols-3 gap-6'>
								<PostHero postData={post} />
								<About />
							</div>
						) : (
							<PostSummary key={post.title} postData={post} />
						)
					)}
			</section>
		</main>
	);
}
