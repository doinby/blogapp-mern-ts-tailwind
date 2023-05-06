import { createContext, useState } from 'react';

type ChildrenProps = {
	children: React.ReactNode;
};

export const UserContext = createContext({});

export function UserContextProvider({ children }: ChildrenProps) {
	const [userData, setUserData] = useState({});
	const userValue = {
		userData,
		setUserData,
	};

	return (
		<UserContext.Provider value={userValue}>{children}</UserContext.Provider>
	);
}
