import { Link } from 'react-router-dom';

import { IBtn, IAuthorLink } from './interfaces';

export const PrimaryBtn = ({ className, children }: IBtn) => (
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
