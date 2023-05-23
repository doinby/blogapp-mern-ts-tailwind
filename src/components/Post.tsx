import { useFetch } from 'usehooks-ts';
import { IPost, IUser } from '../configs/interfaces';
import { Link, useParams } from 'react-router-dom';
// import HtmlToReact from 'html-to-react';
import { Parser } from 'html-to-react';
import { AuthorLink, Main } from '../configs/stylingComponents';
import { ArrowLeft } from 'react-feather';

export default function Post() {
	const { postId } = useParams();
	const url = `http://localhost:4000/post/${postId}`;

	const { data: postData, error } = useFetch(url);
	console.log('error:', typeof error);

	const { title, coverImg, content, author }: IPost =
		postData instanceof Object && postData;

	const {
		_id: id,
		firstName,
		lastName,
	}: IUser = author instanceof Object && author;

	const htmlParser = new Parser();

	return (
		<Main className='flex flex-col'>
			{error instanceof Object ? (
				<div className='container mx-auto prose place-self-center text-center'>
					<h2 className='text-red-500'>Unable to retrieve post!</h2>
					<Link
						to='/'
						className='flex place-self-center place-content-center place-items-center gap-2 text-violet-500'>
						<ArrowLeft size='18' />
						Go back
					</Link>
				</div>
			) : (
				<>
					<img
						src={`/${coverImg}`}
						alt={`${title}'s cover image`}
						className='h-[300px] object-contain'
					/>
					<div className='container mx-auto prose'>
						<div>
							<h2>{title}</h2>
							<AuthorLink id={id}>{`${firstName} ${lastName}`}</AuthorLink>
							{htmlParser.parse(content)}
						</div>
					</div>
				</>
			)}
		</Main>
	);
}
