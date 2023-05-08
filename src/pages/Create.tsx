import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['link', 'image'],
		['clean'],
	],
};

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
];

export default function Create() {
	const [title, setTitle] = useState<string>('');
	const [desc, setDesc] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [file, setFile] = useState<File>();

	async function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
		e.preventDefault();
		const data = new FormData();
		data.set('title', title);
		data.set('desc', desc);
		data.set('content', content);
		data.set('file', file);
		const res = await fetch('http://localhost:4000/create', {
			method: 'POST',
			body: data,
			credentials: 'include',
		});

		const json = await res.json();
		console.log('json:', json);
	}

	return (
		<main className='container mx-auto flex flex-col gap-10 place-items-center place-content-center'>
			<h2 className='text-indigo-500 text-2xl'>Create Post</h2>
			<form className='flex flex-col gap-6' onSubmit={handleSubmit}>
				<input
					type='title'
					placeholder='Title...'
					value={title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
				/>
				<input
					type='description'
					placeholder='Description...'
					value={desc}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDesc(e.target.value)
					}
				/>
				<input
					type='file'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setFile(e.target.files?.[0])
					}
				/>
				<ReactQuill
					// className='h-[150px]'
					theme='snow'
					modules={modules}
					formats={formats}
					value={content}
					onChange={setContent}></ReactQuill>
				{/* <p className={`${msgColor} ${hasMsg} text-center`}>{message}</p> */}
				<button
					className='bg-indigo-500 text-white rounded-xl px-4 py-2'
					type='submit'>
					Submit
				</button>
			</form>
		</main>
	);
}
