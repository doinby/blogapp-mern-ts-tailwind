import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('placeholder');
	const [msgColor, setMsgColor] = useState('');

	const navigate = useNavigate();

	const hasMsg = message !== 'placeholder' ? 'visible' : 'invisible';

	const login = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const res = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});

		setMessage(res.statusText);

		if (res.ok) {
			// Redirect to Homepage
			navigate('/');
		} else setMsgColor('text-red-500');
	};

	return (
		<main className='container mx-auto flex flex-col gap-10 place-items-center place-content-center'>
			<h2 className='text-indigo-500 text-2xl'>Login</h2>
			<form onSubmit={login} className='grid gap-6'>
				<input
					type='text'
					placeholder='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='px-4 py-2 border border-indigo-500 rounded-xl'
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='px-4 py-2 border border-indigo-500 rounded-xl'
				/>
				<button className='bg-indigo-500 text-white rounded-xl px-4 py-2'>
					Submit
				</button>
				<p className={`${msgColor} ${hasMsg} text-center`}>{message}</p>
			</form>
		</main>
	);
}
