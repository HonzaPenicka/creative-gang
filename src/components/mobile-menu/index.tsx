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
		<nav>
			<div className='h-24 items-center flex justify-between lg:hidden'>
				<Link href='/' className='w-28 justify-center items-center text-center'>
					<img src='/pics/logo.svg' alt='logo' />
				</Link>

				<div className='justify-end flex' onClick={toggleOpenMobileMenu}>
					<BurgerMenu />
				</div>
				{openMobileMenu && (
					<div className='text-2xl gap-12 font-bold py-8 uppercase flex mt-24 text-right px-6 absolute top-0 flex-col z-20 bg-white'>
						<Link
							href='/design'
							className='hover:-translate-x-10 transition duration-300 delay-200 hover:delay-200 active:underline hover:underline-offset-4 hover:underline'
						>
							Graphic & Design
						</Link>

						<Link
							href='/development'
							className='hover:-translate-x-10 transition duration-300 delay-200 hover:delay-200 active:underline hover:underline-offset-4 hover:underline'
						>
							Web development && Applications
						</Link>

						<Link
							href='/about'
							className='hover:-translate-x-10 transition duration-300 delay-200 hover:delay-200 active:underline hover:underline-offset-4 hover:underline'
						>
							About
						</Link>

						<Link
							href='/contact'
							className='hover:-translate-x-10 transition duration-300 delay-200 hover:delay-200 active:underline hover:underline-offset-4 hover:underline'
						>
							Contact
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
