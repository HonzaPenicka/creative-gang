import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
	return (
		<div className='text-xl gap-12 justify-between font-semibold py-12 uppercase hidden lg:flex'>
			<div className='text-4xl'>CreaGang</div>

			<div>Graphic & Design</div>

			<div>Web development && Applications</div>

			<div>About</div>

			<div>Contact</div>
		</div>
	);
};
