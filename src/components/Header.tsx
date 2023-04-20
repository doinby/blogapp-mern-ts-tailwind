import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='flex justify-between items-center'>
			<h1>My Blog</h1>
			<ul className='flex gap-6'>
				<li className='list-none'>
					<Link to='/login'>Login</Link>
				</li>
				<li className='list-none'>
					<Link to='/register'>Register</Link>
				</li>
			</ul>
		</header>
	);
}
