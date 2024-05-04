import { FunctionComponent } from 'react';
import { Facebook } from '../../../public/icons/facebook';
import { Instagram } from '../../../public/icons/instagram';
import { Email } from '../../../public/icons/mail';

export const Footer: FunctionComponent = () => {
	return (
		<div className='grid py-12 bg-white border-0'>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col lg:flex-row gap-6 justify-between items-center'>
					<div className='text-4xl font-bold w-28'>
						<img src='/pics/logo.svg' alt='logo' />
					</div>

					<div className='flex gap-12'>
						<Email />

						<Instagram />

						<Facebook />
					</div>
				</div>

				<div className='text-center'>Copyright © CREAGANG 2024</div>
			</div>
		</div>
	);
};
