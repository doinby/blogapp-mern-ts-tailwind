// import dateFn from 'date-fn';
import { IPostProps } from '../configs/interfaces';
import { AuthorLink, PrimaryBtn } from '../configs/stylingComponents';

export default function PostHero({ postData }: IPostProps) {
	const { title, desc, coverImg } = postData;

	// const newCreatedAt = new Date(createdAt);
	// const formattedCreatedAt = dateFn.date(newCreatedAt, 165).split(' ')[0];

	return (
		<article className='prose prose-p:m-0 prose-p:text-lg prose-headings:m-0 max-w-none col-span-2 flex flex-col gap-4'>
			<img
				src={coverImg}
				alt={`${title}'s Cover`}
				className='h-72 object-cover m-0'
			/>
			<div className='w-full grid grid-cols-7 gap-6'>
				<div className='col-span-2'>
					<h2>{title}</h2>
				</div>
				<div className='col-span-5 h-full flex flex-col gap-4'>
					<p>{desc}</p>
					<PrimaryBtn className='self-start'>Read More</PrimaryBtn>
				</div>
			</div>
		</article>
	);
}
