import { useState, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

interface UserDataInterface {
	iat: number;
	id: string;
	username: string;
}

interface UserContextInterface {
	userData?: UserDataInterface | null;
	setUserData: (data: UserDataInterface | null) => void;
}

interface LogoutInterface {
	logout: () => void;
}

export default function UserMenu({ logout }: LogoutInterface) {
	const { userData, setUserData }: UserContextInterface =
		useContext(UserContext);

	const [isHidden, setHidden] = useState(true);

	return (
		<Popover className='relative'>
			{userData instanceof Object && (
				<Popover.Button
					onMouseEnter={() => setHidden(false)}
					onMouseLeave={() => setHidden(true)}
					className='px-4'>
					Welcome, {userData.username}
				</Popover.Button>
			)}

			<Transition
				show={!isHidden}
				onMouseEnter={() => setHidden(false)}
				onMouseLeave={() => setHidden(true)}>
				<Popover.Panel className='absolute top-[2rem] z-10 flex flex-col shadow-md w-full bg-white'>
					<Link className='px-4 py-3 hover:bg-violet-500 hover:text-white' to=''>
						My Profile
					</Link>
					<button
						className='px-4 py-3 hover:bg-violet-500 hover:text-white text-left'
						onClick={logout}>
						Logout
					</button>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
