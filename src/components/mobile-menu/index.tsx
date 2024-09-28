'use client';

import { FunctionComponent, useCallback, useState } from 'react';

import Link from 'next/link';
import { BurgerMenu } from '../../../public/icons/burger-menu';

export const MobileMenu: FunctionComponent = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleOpenMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);
	return (
		<nav className='fixed justify-between w-screen bg-white z-40 px-3 md:px-10'>
			<div className='h-24 md:h-36 items-center flex justify-between lg:hidden'>
				<Link
					href='/'
					className='w-28 md:w-36 justify-center items-center text-center'
				>
					<img src='/pics/logo.svg' alt='logo' />
				</Link>

				<div className='justify-end flex' onClick={toggleOpenMobileMenu}>
					<BurgerMenu />
				</div>
				{openMobileMenu && (
					<div className='text-2xl md:text-3xl gap-12 font-bold py-8 uppercase flex mt-24 text-right w-screen top-0 left-0 right-0 absolute px-6 flex-col z-20 bg-white text-black'>
						<Link
							href='/design'
							className='active:-translate-x-10 transition duration-300 delay-200 active:delay-200 active:underline active:underline-offset-4'
						>
							Graphic & Design
						</Link>

						<Link
							href='/development'
							className='active:-translate-x-10 transition duration-300 delay-200 active:delay-200 active:underline active:underline-offset-4'
						>
							Web development && Applications
						</Link>

						<Link
							href='/about'
							className='active:-translate-x-10 transition duration-300 delay-200 active:delay-200 active:underline active:underline-offset-4'
						>
							About
						</Link>

						<Link
							href='/contact'
							className='active:-translate-x-10 transition duration-300 delay-200 active:delay-200 active:underline active:underline-offset-4'
						>
							Contact
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
