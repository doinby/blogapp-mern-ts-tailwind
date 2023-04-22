import { useState } from 'react';

export default function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('placeholder');
	const hasError = error !== 'placeholder' ? 'visible' : 'invisible';

	const register = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		response.status !== 200 ? setError('Login Failed!') : {};
	};

	return (
		<main className='container mx-auto flex flex-col gap-10 place-items-center place-content-center'>
			<h2 className='text-indigo-500 text-2xl'>Register</h2>
			<form onSubmit={register} className='grid gap-6'>
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
				<p className={`${hasError} text-red-500 text-center`}>{error}</p>
			</form>
		</main>
	);
}
