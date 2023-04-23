import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState<string | null>(null);

	useEffect(() => {
		const getCredential = async () => {
			const res = await fetch('http://localhost:4000/welcome', {
				method: 'POST',
				credentials: 'include',
			});
			const data = await res.json();

			if (res.ok) {
				setIsLoggedIn(true);
				setUsername(data.username);
			}
		};

		getCredential();
	}, []);

	return (
		<header className='flex justify-between items-center'>
			<h1>My Blog</h1>
			<ul className='flex gap-6'>
				<li>
					{isLoggedIn ? (
						<Link to='/profile'>Welcome, {username}</Link>
					) : (
						<Link to='/login'>Login</Link>
					)}
				</li>
				<li>
					{isLoggedIn ? (
						<Link to='/logout'>Logout</Link>
					) : (
						<Link to='/register'>Register</Link>
					)}
				</li>
			</ul>
		</header>
	);
}
