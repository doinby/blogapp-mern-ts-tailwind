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

export default function PostHero({ postData }: PostProps) {
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
		<article className='prose prose-p:m-0 col-span-2'>
			<img
				src={coverImg}
				alt={`${title}'s Cover`}
				className='h-72 w-full object-cover'
			/>
			<div className='w-full flex'>
				<div>
					<h3 className='grow'>{title}</h3>
					<p>{username}</p>
				</div>
				<div className='grow'>
					<p>{desc}</p>
					<button className='uppercase bg-violet-500 text-white px-3 py-1'>
						Read More
					</button>
				</div>
			</div>
		</article>
	);
}
