import { Routes, Route, Navigate } from 'react-router-dom';

import IndexLayout from './pages/IndexLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContextProvider } from './UserContext';

export default function App() {
	return (
		<>
			<UserContextProvider>
				<Routes>
					<Route path='/' element={<IndexLayout />}>
						<Route index element={<Home />} />
					</Route>
					<Route path='/login' element={<IndexLayout />}>
						<Route index element={<Login />} />
					</Route>
					<Route path='/logout' element={<Navigate to='/' />} />
					<Route path='/register' element={<IndexLayout />}>
						<Route index element={<Register />} />
					</Route>
				</Routes>
			</UserContextProvider>
		</>
	);
}
