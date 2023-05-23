import { Link } from 'react-router-dom';

import { IDefault, IAuthorLink, IInput, ISocialLink } from './interfaces';

export const PrimaryBtn = ({ className, children }: IDefault) => (
	<button
		className={`${className} uppercase bg-violet-500 text-white px-3 py-1`}>
		{children}
	</button>
);

export const AuthorLink = ({ className, children, id }: IAuthorLink) => (
	<Link to={`/${id}`} className={`${className} underline-offset-1`}>
		{children}
	</Link>
);

export const Main = ({ className, children }: IDefault) => (
	<main className={`${className} grow shrink-0 basis-auto py-12`}>
		{children}
	</main>
);

export const Input = ({
	className,
	type,
	placeholder,
	value,
	onChange,
}: IInput) => (
	<input
		type={type}
		className={`${className} border-b-2 border-slate-300 focus:border-violet-500 focus:outline-offset-4 hover:border-violet-500`}
		value={value}
		placeholder={placeholder}
		onChange={onChange}
	/>
);

export const SocialLinks = ({ url, children, className }: ISocialLink) => (
	<Link to={url} className={`${className} flex items-center gap-1.5 text-sm`}>
		{children}
	</Link>
);
