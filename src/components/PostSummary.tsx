interface PostProps {
	imgUrl: string;
	title: string;
	desc: string;
	author: string;
	date: string;
}

export default function PostSummary({
	imgUrl,
	title,
	desc,
	author,
	date,
}: PostProps) {
	return (
		<article className='flex gap-6'>
			<img src={imgUrl} alt={`${title}'s thumbnail`} className='w-[350px]' />
			<div className='flex flex-col gap-6'>
				<h3>{title}</h3>
				<p>
					{author} <span>{date}</span>
				</p>
				<p>{desc}</p>
			</div>
		</article>
	);
}
