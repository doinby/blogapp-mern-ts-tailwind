import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Input, Main, PrimaryBtn } from '../configs/stylingComponents';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('placeholder');
	const [msgColor, setMsgColor] = useState('');

	const { setUserData } = useContext(UserContext);

	const navigate = useNavigate();

	const hasMsg = message !== 'placeholder' ? 'visible' : 'invisible';

	async function login(e: React.SyntheticEvent) {
		e.preventDefault();
		const res = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});
		const data = await res.json();

		setMessage(res.statusText);

		if (res.ok) {
			setUserData(data);

			// Redirect to Homepage and refresh
			navigate('/');
			navigate(0);
		} else setMsgColor('text-red-500');
	}

	return (
		<Main className='container mx-auto flex flex-col gap-10 place-items-center place-content-center'>
			<h2 className='text-violet-500 text-2xl'>Login</h2>
			<form onSubmit={login} className='grid gap-6'>
				<Input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<PrimaryBtn className='place-self-center'>Submit</PrimaryBtn>
				<p className={`${msgColor} ${hasMsg} text-center`}>{message}</p>
			</form>
		</Main>
	);
}
