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
			<img src={coverImg} alt={`${title}'s thumbnail`} className='w-[350px]' />
			<div className='flex flex-col gap-6'>
				<h3>{title}</h3>
				<p>
					<b>{username}</b> <span>{formattedCreatedAt}</span>
				</p>
				<p>{desc}</p>
			</div>
		</article>
	);
}
