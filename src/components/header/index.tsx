'use client';

import { FunctionComponent } from 'react';

import Link from 'next/link';

export const Header: FunctionComponent = () => {
	return (
		<div className='text-2xl gap-12 justify-between font-semibold py-6 uppercase hidden lg:flex items-center'>
			<Link href='/' className='w-28 justify-center items-center text-center'>
				<img src='/pics/logo.svg' alt='logo' />
			</Link>

			<Link
				href='/design'
				className='hover:-translate-y-2 transition duration-300 delay-100 active:delay-100 hover:underline hover:underline-offset-4'
			>
				Graphic & Design
			</Link>

			<Link
				href='/development'
				className='hover:-translate-y-2 transition duration-300 delay-100 active:delay-100 hover:underline hover:underline-offset-4'
			>
				Web development && Applications
			</Link>

			<Link
				href='/about'
				className='hover:-translate-y-2 transition duration-300 delay-100 active:delay-100 hover:underline hover:underline-offset-4'
			>
				About
			</Link>

			<Link
				href='/contact'
				className='hover:-translate-y-2 transition duration-300 delay-100 active:delay-100 hover:underline hover:underline-offset-4'
			>
				Contact
			</Link>
		</div>
	);
};
