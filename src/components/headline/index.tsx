import { FunctionComponent } from 'react';

type HeadLineProps = {
	children?: string[];
	additionalClassName?: string;
};

export const HeadLine: FunctionComponent<HeadLineProps> = ({
	children,
	additionalClassName,
}) => {
	return (
		<div className={`font-bold text-4xl lg:text-7xl ${additionalClassName}`}>
			{children?.map((word, index) => (
				<div key={index}>{word}</div>
			))}
		</div>
	);
};
