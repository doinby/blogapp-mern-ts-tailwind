import { Routes, Route, Navigate } from 'react-router-dom';

import IndexLayout from './pages/IndexLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import Post from './components/Post';
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
					<Route path='/create' element={<IndexLayout />}>
						<Route index element={<Create />} />
					</Route>
					<Route path='/logout' element={<Navigate to='/' />} />
					<Route path='/register' element={<IndexLayout />}>
						<Route index element={<Register />} />
					</Route>
					<Route path='/post/:postId' element={<IndexLayout />}>
						<Route index element={<Post />} />
					</Route>
				</Routes>
			</UserContextProvider>
		</>
	);
}
