import { FunctionComponent } from 'react';

type ButtonProps = {
	additionalClassName?: string;
	type?: 'submit' | 'reset' | 'button';
};

export const Button: FunctionComponent<ButtonProps> = (
	additionalClassName,
	type,
) => {
	return (
		<button
			className={`py-3 lg:px-24 px-12 from-[#6717f2] to-white bg-gradient-to-bl text-2xl rounded-3xl uppercase ${additionalClassName}`}
			type={type}
		>
			Contact
		</button>
	);
};
