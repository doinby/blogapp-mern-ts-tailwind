import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [userData, setUserData] = useState<object | null>(null);

	const userValue = useContext(UserContext);
	const { userData: userDataContext, setUserData: SetUserDataContext } =
		userValue;

	const navigate = useNavigate();

	async function logout() {
		const res = await fetch('http://localhost:4000/logout', {
			method: 'POST',
			credentials: 'include',
		});
		const data = await res.json();

		if (data === 'ok') {
			setIsLoggedIn(false);
			SetUserDataContext(null);
		}

		// Refresh page after logout
		navigate(0);
	}

	useEffect(() => {
		const getCredential = async () => {
			const res = await fetch('http://localhost:4000/welcome', {
				method: 'POST',
				credentials: 'include',
			});
			const data = await res.json();

			if (res.ok) {
				setIsLoggedIn(true);
				SetUserDataContext(data);
			} else setIsLoggedIn(false);
		};

		getCredential();
	}, []);

	return (
		<header className='flex justify-between items-center'>
			<h1>My Blog</h1>
			<ul className='flex gap-6'>
				<li>
					{isLoggedIn && userDataContext ? (
						<ul className='flex gap-6'>
							<li>
								<Link to='/profile'>Welcome, {userDataContext.username}</Link>
							</li>
							<li>
								<Link to='/create'>Create Post</Link>
							</li>
						</ul>
					) : (
						<Link to='/login'>Login</Link>
					)}
				</li>
				<li>
					{isLoggedIn ? (
						<Link to='/logout' onClick={logout}>
							Logout
						</Link>
					) : (
						<Link to='/register'>Register</Link>
					)}
				</li>
			</ul>
		</header>
	);
}
