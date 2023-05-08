export default function Create() {
	return (
		<main className='container mx-auto flex flex-col gap-10 place-items-center place-content-center'>
			<h2 className='text-indigo-500 text-2xl'>Create Post</h2>
			<form className='grid gap-6'>
				<input type='title' placeholder='Title' />
				<input type='description' placeholder='Description' />
				<input type='file' />
				<textarea name='' id='' cols='30'></textarea>
			</form>
		</main>
	);
}
