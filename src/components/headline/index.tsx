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
		<div className={`font-bold ${additionalClassName}`}>
			{children?.map((word, index) => (
				<div key={index}>{word}</div>
			))}
		</div>
	);
};
