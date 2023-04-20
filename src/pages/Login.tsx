export default function Login() {
	return (
		<main className='container mx-auto'>
			<form
				action=''
				className='h-full flex flex-col gap-6 justify-center items-center'>
				<input
					type='text'
					placeholder='username'
					className='px-4 py-2 border border-indigo-500 rounded-xl'
				/>
				<input
					type='password'
					placeholder='password'
					className='px-4 py-2 border border-indigo-500 rounded-xl'
				/>
				<button className='bg-indigo-500 text-white rounded-xl px-4 py-2'>
					Login
				</button>
			</form>
		</main>
	);
}
