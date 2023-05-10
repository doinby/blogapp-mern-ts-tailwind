import { useEffect, useState } from 'react';
import PostSummary from '../components/PostSummary';
import breakfastImg from '/images/breakfast.jpg';

export default function Home() {
	const [posts, setPosts] = useState<object | null>(null);
	const [message, setMessage] = useState('placeholder');
	const [msgColor, setMsgColor] = useState('');

	const hasMsg = message !== 'placeholder' ? 'visible' : 'invisible';

	useEffect(() => {
		async function getPosts() {
			const res = await fetch('http://localhost:4000/', {
				method: 'GET',
			});
			const json = await res.json();

			if (res.ok) {
				setPosts(json.data);
			} else setMsgColor('text-red-500');
		}

		getPosts();
	}, []);
	return (
		<main>
			<section className='container mx-auto'>
				{/* <Post
					imgUrl={breakfastImg}
					title={`Hello I'm a title`}
					desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at semper quam. Curabitur sollicitudin enim ut nulla congue pulvinar. Nullam leo lectus, ultrices ut porta id, facilisis vel lorem. Curabitur sem mauris, varius quis tincidunt at, mattis quis enim.`}
					author='Bob Doe'
					date='2023-01-03'
				/> */}
				{posts?.map((post) => {
					const { coverImg, desc, title, updatedAt } = post;
					return (
						<PostSummary
							key={title}
							imgUrl={coverImg}
							title={title}
							desc={desc}
							date={updatedAt}
							author='unknown'
						/>
					);
				})}
			</section>
		</main>
	);
}
