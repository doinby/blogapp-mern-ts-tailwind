// import dateFn from 'date-fn';
import { Link } from 'react-router-dom';
import { IPostProps } from '../configs/interfaces';
import { PrimaryBtn } from '../configs/stylingComponents';

export default function PostHero({ postData }: IPostProps) {
	const { _id: id, title, desc, coverImg } = postData;

	return (
		<article className='prose prose-p:m-0 prose-p:text-lg prose-headings:m-0 prose-a:no-underline md:max-w-none md:col-span-2 flex flex-col gap-4'>
			<img
				src={coverImg}
				alt={`${title}'s Cover`}
				className='h-72 object-cover m-0'
			/>
			<div className='w-full grid md:grid-cols-7 md:gap-6'>
				<div className='md:col-span-2'>
					<Link to={`/post/${id}`}>
						<h2>{title}</h2>
					</Link>
				</div>
				<div className='md:col-span-5 h-full flex flex-col gap-4 place-items-center'>
					<p>{desc}</p>
					<Link to={`/post/${id}`}>
						<PrimaryBtn className='self-start'>Read More</PrimaryBtn>
					</Link>
				</div>
			</div>
		</article>
	);
}
