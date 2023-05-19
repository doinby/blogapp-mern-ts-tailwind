import { PrimaryBtn } from '../configs/stylingComponents';

export default function About() {
	return (
		<article className='prose prose-p:m-0 flex flex-col place-content-center bg-violet-200 p-10'>
			<h1 className='m-0'>Discover topics on:</h1>
			<h3 className='text-center'>📟 Technology</h3>
			<h3 className='text-center'>🎨 Design</h3>
			<h3 className='text-center'>💰 Finance</h3>
			<h3 className='text-center mb-0'>
				<span className='font-normal text-base'>and</span> 📚 Books
			</h3>
			<div>
				<h3 className='text-left'>
					Wanna stay in the loop? Sign up for our newsletter! 👇
				</h3>
				<input
					type='email'
					placeholder='email@example.com'
					// value={username}
					// onChange={(e) => setUsername(e.target.value)}
					className='px-3 py-1'
				/>
				<PrimaryBtn>Submit</PrimaryBtn>
			</div>
		</article>
	);
}
