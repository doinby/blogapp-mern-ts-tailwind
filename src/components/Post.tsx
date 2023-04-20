interface PostProps {
	imgUrl: string;
	title: string;
	desc: string;
	author: string;
	date: string;
}

export default function Post({ imgUrl, title, desc, author, date }: PostProps) {
	return (
		<article className='flex'>
			<img src={imgUrl} alt={`${title}'s thumbnail`} className='w-[350px]' />
			<div>
				<h3>{title}</h3>
				<div>
					<p>{author}</p>
					<p>{date}</p>
				</div>
				<p>{desc}</p>
			</div>
		</article>
	);
}
