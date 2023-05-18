import dateFn from 'date-fn';
interface PostProps {
	postData: {
		title: string;
		desc: string;
		coverImg: string;
		createdAt: Date;
		author: { username: string };
	};
}

export default function PostSummary({ postData }: PostProps) {
	const {
		title,
		desc,
		coverImg,
		createdAt,
		author: { username },
	} = postData;
	const newCreatedAt = new Date(createdAt);
	const formattedCreatedAt = dateFn.date(newCreatedAt, 165).split(' ')[0];

	return (
		<article className='flex gap-6'>
			<img
				src={coverImg}
				alt={`${title}'s thumbnail`}
				className='w-24 h-auto object-cover'
			/>
			<div className='prose prose-p:m-0 flex flex-col'>
				<h3>{title}</h3>
				<p>{username}</p>
				<p>{formattedCreatedAt}</p>
				<p>{desc}</p>
			</div>
		</article>
	);
}
