import { useFetch } from 'usehooks-ts';
import { Link, useParams } from 'react-router-dom';
// import HtmlToReact from 'html-to-react';
import dateFn from 'date-fn';
import { Parser } from 'html-to-react';
import { IPost, IUser, IUserContext } from '../configs/interfaces';
import { AuthorLink, Main } from '../configs/stylingComponents';
import { ArrowLeft, Edit2, Edit3, User } from 'react-feather';
import spinner from '/spinner.svg';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Post() {
	const { postId } = useParams();
	const url = `http://localhost:4000/post/${postId}`;

	const { data: postData, error } = useFetch(url);
	const isLoading = postData === undefined;

	const { _id, title, coverImg, content, author, createdAt }: IPost =
		postData instanceof Object && postData;

	const {
		_id: authorId,
		firstName,
		lastName,
	}: IUser = author instanceof Object && author;

	const { userData }: IUserContext = useContext(UserContext);
	const { id: userId } = userData instanceof Object && userData;
	const isEditable = userId !== undefined && userId === authorId;

	const newCreatedAt = new Date(createdAt);
	const formattedCreatedAt = dateFn.date(newCreatedAt, 165).split(' ')[0];

	const htmlParser = new Parser();

	if (error instanceof Object) {
		return (
			<Main className='container mx-auto prose flex flex-col place-items-center place-content-center text-center'>
				<h2 className='text-red-500'>Uh oh... We are unable to retrieve post.</h2>
				<Link
					to='/'
					className='flex place-self-center place-content-center place-items-center gap-2 text-violet-500'>
					<ArrowLeft size='18' />
					Go back
				</Link>
			</Main>
		);
	}

	if (isLoading) {
		return (
			<Main className='container mx-auto prose flex flex-col place-items-center place-content-center text-center'>
				<img src={spinner} alt='Loading...' />
			</Main>
		);
	}

	return (
		<Main className='flex flex-col'>
			<img
				src={`/${coverImg}`}
				alt={`${title}'s cover image`}
				className='h-[400px] object-cover'
			/>
			<div className='container mx-auto prose'>
				<div>
					<h2>{title}</h2>
					<div className='flex flex-wrap justify-between items-baseline'>
						<div className='flex flex-wrap items-baseline gap-2'>
							<AuthorLink id={authorId}>{`${firstName} ${lastName}`}</AuthorLink>
							<p className='text-slate-500'>on {formattedCreatedAt}</p>
						</div>
						<Link
							to='/'
							className={`${
								isEditable ? 'flex' : 'hidden'
							} no-underline text-slate-500 gap-2 text-base`}>
							<Edit3 size='20' />
							Edit
						</Link>
					</div>
					{htmlParser.parse(content)}
				</div>
			</div>
		</Main>
	);
}
