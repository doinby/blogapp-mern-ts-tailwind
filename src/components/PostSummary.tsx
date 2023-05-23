import { IPostProps } from '../configs/interfaces';
import { Link } from 'react-router-dom';

export default function PostSummary({ postData }: IPostProps) {
	const { _id: id, title, desc, coverImg } = postData;
	const trimmedDesc =
		desc.split(' ').length > 9
			? desc.split(' ').slice(0, 9).join(' ') + '...'
			: desc;

	return (
		<article className='flex gap-2'>
			<img
				src={coverImg}
				alt={`${title}'s thumbnail`}
				className='w-32 h-auto object-cover'
			/>
			<div className='prose prose-p:m-0 prose-p:text-sm prose-headings:m-0 flex flex-col gap-2'>
				<Link to={`/post/${id}`} className='text-violet-500 no-underline'>
					<h4>{title}</h4>
				</Link>
				<p>
					{trimmedDesc}
					<span className='ml-1'>
						<Link to={`/post/${id}`} className='text-violet-500'>
							Read more
						</Link>
					</span>
				</p>
			</div>
		</article>
	);
}
