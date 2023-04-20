import Post from '../components/Post';
import breakfastImg from '/images/breakfast.jpg';

export default function Home() {
	return (
		<main>
			<section className='container mx-auto'>
				<Post
					imgUrl={breakfastImg}
					title={`Hello I'm a title`}
					desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at semper quam. Curabitur sollicitudin enim ut nulla congue pulvinar. Nullam leo lectus, ultrices ut porta id, facilisis vel lorem. Curabitur sem mauris, varius quis tincidunt at, mattis quis enim.`}
					author='Bob Doe'
					date='2023-01-03'
				/>
			</section>
		</main>
	);
}
