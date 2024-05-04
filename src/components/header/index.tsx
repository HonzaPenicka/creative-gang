import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
	return (
		<div className='text-xl gap-12 justify-between font-semibold py-6 uppercase hidden lg:flex items-center'>
			<div className='w-28 justify-center items-center text-center'>
				<img src='/pics/logo.svg' alt='logo' />
			</div>

			<a href='/design'>Graphic & Design</a>

			<div>Web development && Applications</div>

			<div>About</div>

			<div>Contact</div>
		</div>
	);
};
