export interface IDefault {
	className?: string;
	children: React.ReactNode;
}

export interface IAuthorLink extends IDefault {
	id: string;
}

export interface ISocialLink extends IDefault {
	url: string;
}

export interface KonvaTextEventTarget extends EventTarget {
	index: number;
	value: string;
}

export interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
	target: KonvaTextEventTarget;
}

export interface IInput {
	className?: string;
	type?: string | 'text';
	placeholder: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	onChange?: (e: KonvaMouseEvent) => void;
}

export interface IPost {
	_id: string;
	title: string;
	desc: string;
	content: string;
	coverImg: string;
	createdAt: Date;
	author: { _id: string; username: string; firstName: string; lastName: string };
}

export interface IUser {
	iat: number;
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
}

export interface IUserContext {
	userData: IUser | undefined;
	setUserData: (data: IUser | undefined) => void;
}

export interface IPostProps {
	postData: IPost;
}
