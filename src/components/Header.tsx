import { useEffect, useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [userData, setUserData] = useState<object | null>(null);

	const userValue = useContext(UserContext);
	const { userData: userDataContext, setUserData: SetUserDataContext } =
		userValue;

	async function logout() {
		const res = await fetch('http://localhost:4000/logout', {
			method: 'POST',
			credentials: 'include',
		});
		const data = await res.json();

		if (data === 'ok') {
			setIsLoggedIn(false);
			// setUserData(null);
			SetUserDataContext(null);
		}
		<Navigate to='/' replace={true} />;
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
				// setUserData(data);
				SetUserDataContext(data);
				// console.log(isLoggedIn, userDataContext);
			} else setIsLoggedIn(false);
		};

		getCredential();
	}, [userDataContext, SetUserDataContext]);

	return (
		<header className='flex justify-between items-center'>
			<h1>My Blog</h1>
			<ul className='flex gap-6'>
				<li>
					{isLoggedIn && userDataContext ? (
						<Link to='/profile'>Welcome, {userDataContext.username}</Link>
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
