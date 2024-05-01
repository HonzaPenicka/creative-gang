import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
	return (
		<div className='grid py-12 bg-white border-0'>
			<div className='flex flex-col gap-6'>
				<div className='flex justify-between items-center'>
					<div className='text-4xl font-bold'>CREAGANG</div>

					<div className='flex gap-12'>
						<div>E-mail</div>

						<div>Instagram</div>

						<div>Facebook</div>
					</div>
				</div>

				<div className='text-center'>Copyright © CREAGANG 2024</div>
			</div>
		</div>
	);
};
