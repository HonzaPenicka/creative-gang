import { FunctionComponent } from 'react';

type ButtonProps = {
	additionalClassName?: string;
};

export const Button: FunctionComponent<ButtonProps> = (additionalClassName) => {
	return (
		<button
			className={`py-3 lg:px-24 px-12 from-[#6717f2] to-white bg-gradient-to-bl text-2xl rounded-3xl uppercase ${additionalClassName}`}
		>
			Contact
		</button>
	);
};
