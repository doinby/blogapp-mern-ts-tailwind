import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import SiteNav from './SiteNav';
import UserNav from './UserNav';
import { IUserContext } from '../configs/interfaces';

export default function Header() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { userData, setUserData }: IUserContext = useContext(UserContext);

	const navigate = useNavigate();

	async function logout() {
		const res = await fetch('http://localhost:4000/logout', {
			method: 'POST',
			credentials: 'include',
		});
		const data = await res.json();

		if (data.ok) {
			setIsLoggedIn(false);
			setUserData(undefined);
		}

		// Refresh page after logout
		navigate(0);
	}

	useEffect(() => {
		const getCredential = async () => {
			try {
				const res = await fetch('http://localhost:4000/welcome', {
					method: 'POST',
					credentials: 'include',
				});
				const json = await res.json();

				setIsLoggedIn(true);
				setUserData(json.data);
			} catch (err) {
				setIsLoggedIn(false);
			}
		};

		getCredential();
	}, []);

	return (
		<header className='container mx-auto pt-12 flex justify-between items-center'>
			<SiteNav />
			<UserNav isLoggedIn={isLoggedIn} logout={logout} />
		</header>
	);
}
