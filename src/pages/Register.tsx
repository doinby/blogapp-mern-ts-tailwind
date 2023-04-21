import { useState } from 'react';

export default function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(' ');

	const register = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		response.status !== 200 ? setError('Registration Failed!') : {};
	};

	return (
		<main className='container mx-auto'>
			<form
				onSubmit={register}
				className='h-full flex flex-col gap-6 justify-center items-center'>
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
					Register
				</button>
				<p className='text-red-500'>{error}</p>
			</form>
		</main>
	);
}
