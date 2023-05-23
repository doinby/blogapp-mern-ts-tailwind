import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Main, PrimaryBtn } from '../configs/stylingComponents';

export default function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [message, setMessage] = useState('placeholder');
	const [msgColor, setMsgColor] = useState('');

	const navigate = useNavigate();

	const hasMsg = message !== 'placeholder' ? 'visible' : 'invisible';

	async function register(e: React.SyntheticEvent) {
		e.preventDefault();
		const res = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify({ username, password, firstName, lastName }),
			headers: { 'Content-Type': 'application/json' },
		});

		setMessage(res.statusText);

		if (res.ok) {
			// Redirect to Homepage
			navigate('/');
		} else setMsgColor('text-red-500');
	}

	return (
		<Main className='container mx-auto flex flex-col gap-10 place-items-center place-content-center'>
			<h2 className='text-violet-500 text-2xl'>Register</h2>
			<form onSubmit={register} className='grid gap-6'>
				<Input
					type='firstName'
					placeholder='First name'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<Input
					type='lastName'
					placeholder='Last name'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
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
