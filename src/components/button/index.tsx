'use client';

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
			className={`py-3 lg:px-12 px-6 text-2xl lg:text-4xl rounded-full uppercase font-medium border-4 ${additionalClassName}`}
			type={type}
		>
			{children}
		</button>
	);
};
