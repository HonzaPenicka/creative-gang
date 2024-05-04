import { FunctionComponent, useCallback, useState } from 'react';

import { BurgerMenu } from '../../../public/icons/burger-menu';

export const MobileMenu: FunctionComponent = () => {
	const [openMobileServices, setOpenMobileServices] = useState(false);

	const toggleMobileServices = useCallback(() => {
		setOpenMobileServices((state) => !state);
	}, []);
	return (
		<nav>
			<div className='h-24 items-center flex justify-between lg:hidden'>
				<div className='w-28 justify-center items-center text-center'>
					<img src='/pics/logo.svg' alt='logo' />
				</div>

				<div className='justify-end flex'>
					<BurgerMenu />
				</div>
			</div>
		</nav>
	);
};
