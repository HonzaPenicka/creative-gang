import { FunctionComponent } from 'react';

type ButtonProps = {
	additionalClassName?: string;
	type?: 'submit' | 'reset' | 'button';
	children: React.ReactNode;
};

export const Button: FunctionComponent<ButtonProps> = ({
	additionalClassName,
	type,
	children,
}) => {
	return (
		<button
			className={`py-3 lg:px-24 px-12 text-2xl rounded-3xl uppercase ${additionalClassName}`}
			type={type}
		>
			{children}
		</button>
	);
};
