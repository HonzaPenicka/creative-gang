import { FunctionComponent } from 'react';

type ButtonProps = {
	additionalClassName?: string;
};

export const Button: FunctionComponent<ButtonProps> = (additionalClassName) => {
	return (
		<div className='flex gap-24 pt-72'>
			<button
				className={`py-3 lg:px-24 px-12 bg-gradient-to-bl from-[#6717f2] to-white text-2xl rounded-3xl uppercase ${additionalClassName}`}
			>
				Contact
			</button>
		</div>
	);
};
