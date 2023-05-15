import { createContext, useState } from 'react';

type ChildrenProps = {
	children: React.ReactNode;
};

interface UserDataInterface {
	iat: number;
	id: string;
	username: string;
}

interface UserContextInterface {
	userData?: UserDataInterface | null;
	setUserData: (data: UserDataInterface) => void;
}

export const UserContext = createContext<UserContextInterface | null>(null);

export function UserContextProvider({ children }: ChildrenProps) {
	const [userData, setUserData] = useState<UserDataInterface | null>(null);

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
	);
}
