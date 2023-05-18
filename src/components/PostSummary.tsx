import dateFn from 'date-fn';
import { AuthorLink } from '../configs/stylingComponents';
import { IPostProps } from '../configs/interfaces';
import { Link } from 'react-router-dom';

export default function PostSummary({ postData }: IPostProps) {
	const {
		title,
		desc,
		coverImg,
		createdAt,
		author: { _id: id, firstName, lastName },
	} = postData;
	const newCreatedAt = new Date(createdAt);
	const formattedCreatedAt = dateFn.date(newCreatedAt, 165).split(' ')[0];
	const trimmedTitle =
		desc.split(' ').length > 7 ? desc.split(' ').slice(0, 7).join(' ') : desc;
	const trimmedDesc =
		desc.split(' ').length > 9
			? desc.split(' ').slice(0, 9).join(' ') + '...'
			: desc;

	return (
		<article className='flex gap-6'>
			<img
				src={coverImg}
				alt={`${title}'s thumbnail`}
				className='w-32 h-auto object-cover'
			/>
			<div className='prose prose-p:m-0 prose-headings:m-0 flex flex-col'>
				<h4>{trimmedTitle}</h4>
				{/* <AuthorLink id={id}>{`${firstName} ${lastName}`}</AuthorLink> */}
				{/* <p>{formattedCreatedAt}</p> */}
				<p>
					{trimmedDesc}
					<span className='ml-1'>
						<Link to='/'>Read more</Link>
					</span>
				</p>
			</div>
		</article>
	);
}
