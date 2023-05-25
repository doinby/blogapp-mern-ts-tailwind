import { createContext, useState } from 'react';
import { IUser, IUserContext } from './configs/interfaces';

type ChildrenProps = {
	children: React.ReactNode;
};

export const UserContext = createContext<IUserContext | null>(null);

export function UserContextProvider({ children }: ChildrenProps) {
	const [userData, setUserData] = useState<IUser>();

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
	);
}
