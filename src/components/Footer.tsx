import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';
import { SocialLinks } from '../configs/stylingComponents';

export default function Footer() {
	return (
		<footer className='bg-violet-500 py-6'>
			<div className='container mx-auto flex flex-wrap place-content-center gap-6 text-white'>
				<SocialLinks url='https://linkedin.com/in/doinby/'>
					<Linkedin size='18' /> doinby
				</SocialLinks>
				<SocialLinks url='https://github.com/doinby'>
					<GitHub size='18' /> @doinby
				</SocialLinks>
				<SocialLinks url='https://twitter.com/doinby/'>
					<Twitter size='18' /> @doinby
				</SocialLinks>
				<SocialLinks url='mailto:contact@doinby.co'>
					<Mail size='18' /> contact@doinby.co
				</SocialLinks>
			</div>
		</footer>
	);
}
