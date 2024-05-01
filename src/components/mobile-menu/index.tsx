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
				<div className='text-6xl'>CREAGANG</div>
				<div className='justify-end flex'>
					<BurgerMenu />
				</div>
			</div>
		</nav>
	);
};
