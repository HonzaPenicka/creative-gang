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
			className={` px-4 py-2 md:px-8 md:py-č text-2xl lg:text-4xl rounded-full uppercase font-medium border-4 ${additionalClassName}`}
			type={type}
		>
			{children}
		</button>
	);
};
