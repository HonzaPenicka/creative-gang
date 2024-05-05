import { FunctionComponent } from 'react';

export const Instagram: FunctionComponent<any> = (props) => {
	return (
		<svg
			viewBox='0 0 256 256'
			version='1.1'
			id='svg2'
			width='48'
			height='48'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<defs id='defs2' />
			<rect fill='none' height='256' width='256' id='rect1' x='0' y='0' />
			<circle
				cx='128'
				cy='128'
				fill='none'
				r='40'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='12'
				id='circle1'
			/>
			<rect
				fill='none'
				height='184'
				rx='48'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='12'
				width='184'
				x='36'
				y='36'
				id='rect2'
			/>
			<circle cx='180' cy='76' r='10' id='circle2' />
		</svg>
	);
};
