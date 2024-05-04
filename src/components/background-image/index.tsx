import { FunctionComponent } from 'react';

import { Button } from '../button';
import { HeadLine } from '../headline';

export const BackgroundImage: FunctionComponent = () => {
	return (
		<div
			className='px-12 py-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content '
			style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
		>
			<HeadLine />

			<Button />
		</div>
	);
};
