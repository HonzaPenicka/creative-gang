import { FunctionComponent } from 'react';

import Link from 'next/link';

export const Header: FunctionComponent = () => {
	return (
		<div className='text-xl gap-12 justify-between font-semibold py-6 uppercase hidden lg:flex items-center'>
			<Link href='/' className='w-28 justify-center items-center text-center'>
				<img src='/pics/logo.svg' alt='logo' />
			</Link>

			<Link href='/design'>Graphic & Design</Link>

			<Link href='/development'>Web development && Applications</Link>

			<Link href='/about'>About</Link>

			<Link href='/contact'>Contact</Link>
		</div>
	);
};
