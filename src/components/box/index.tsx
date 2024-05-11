import { CSSProperties, FunctionComponent } from 'react';

type BoxProps = {
	background?: string;
	text?: string;
	title?: string;
	additionalClassName?: string;
};

export const Box: FunctionComponent<BoxProps> = ({
	background,
	text,
	title,
	additionalClassName,
}) => {
	const divStyle: CSSProperties = {
		backgroundImage: background ? `url(${background})` : 'none', // Set background image if provided, otherwise set to 'none'
		backgroundPosition: 'center', // Adjust background position if needed
		backgroundRepeat: 'no-repeat', // Adjust background repeat if needed
		backgroundSize: 'cover', // Adjust background size if needed
	};

	const combinedClassName = `p-6 lg:p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between ${additionalClassName}`;

	return (
		<div
			className={combinedClassName}
			style={divStyle} // Assign the CSSProperties object to the style attribute
		>
			<div className='mb-36 text-red-600 font-bold bg-white'>{text}</div>
			<div>{title}</div>
		</div>
	);
};
