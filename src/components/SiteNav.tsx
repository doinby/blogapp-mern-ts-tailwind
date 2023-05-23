import { Link } from 'react-router-dom';
import { Input } from '../configs/stylingComponents';

export default function SiteNav() {
	return (
		<nav className='prose prose-a:no-underline prose-li:list-none max-w-none flex items-center gap-6'>
			<Link to='/'>
				<h1 className='m-0'>
					<span className='text-violet-500'>Do</span>inby.
				</h1>
			</Link>
			{/* <ul className='prose-li:p-0 prose-li:m-0 flex gap-6 pl-6 py-0 m-0 border-l-2 border-violet-500'>
				<li>
					<Link to=''>Stories</Link>
				</li>
				<li>
					<Link to=''>Creators</Link>
				</li>
				<li>
					<Link to=''>Community</Link>
				</li>
				<li>
					<Link to=''>Subscribe</Link>
				</li>
			</ul> */}
			{/* <div className='prose-li:p-0 prose-li:m-0 flex gap-6 pl-7 py-0 m-0 border-l-2 border-violet-500'>
				<Input placeholder='Search post...' />
			</div> */}
		</nav>
	);
}
