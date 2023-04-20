import { Routes, Route } from 'react-router-dom';

import IndexLayout from './pages/IndexLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<IndexLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path='/login' element={<IndexLayout />}>
					<Route index element={<Login />} />
				</Route>
				<Route path='/register' element={<IndexLayout />}>
					<Route index element={<Register />} />
				</Route>
			</Routes>
		</>
	);
}
