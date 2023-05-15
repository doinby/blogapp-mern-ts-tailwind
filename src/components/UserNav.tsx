import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import { Edit3 } from 'react-feather';

interface UserNavProps {
	isLoggedIn: boolean;
	logout: () => void;
}

export default function UserNav({ isLoggedIn, logout }: UserNavProps) {
	return (
		<nav className='flex items-center gap-6'>
			<ul className='prose-a:font-normal prose-li:p-0 prose-li:m-0 flex gap-6 p-0 m-0'>
				{isLoggedIn ? (
					<>
						<li>
							<UserMenu logout={logout} />
						</li>
						<li>
							<Link to='/create' className='flex items-center gap-1'>
								<Edit3 size='18' />
								Write a Story
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
