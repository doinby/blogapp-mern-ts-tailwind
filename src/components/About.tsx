import { Send } from 'react-feather';
import { PrimaryBtn } from '../configs/stylingComponents';

export default function About() {
	return (
		<article className='prose prose-p:m-0 prose-headings:text-white flex flex-col place-content-center bg-violet-500 p-10'>
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
				<div className='flex'>
					<input
						type='email'
						placeholder='email@example.com'
						// value={username}
						// onChange={(e) => setUsername(e.target.value)}
						className='py-1 bg-transparent border-b-2 border-b-white grow'
					/>
					<PrimaryBtn className='flex items-center justify-center'>
						<Send className='p-0 m-0' />
					</PrimaryBtn>
				</div>
			</div>
		</article>
	);
}
