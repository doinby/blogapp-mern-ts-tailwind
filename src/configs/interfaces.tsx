export interface IBtn {
	className?: string;
	children: React.ReactNode;
}

export interface IAuthorLink extends IBtn {
	id: string;
}

export interface IPost {
	title: string;
	desc: string;
	coverImg: string;
	createdAt: Date;
	author: { _id: string; username: string; firstName: string; lastName: string };
}

export interface IPostProps {
	postData: IPost;
}
