import { FunctionComponent } from 'react';

type CollageProps = {
	href?: string;
	text?: string;
	title?: string;
};

export const Collage: FunctionComponent<CollageProps> = ({
	href,
	text,
	title,
}) => {
	return (
		<div className='text-4xl lg:text-4xl'>
			<a href={href}>
				<div className='p-6 lg:p-12 flex flex-col border rounded-3xl aspect-square bg-white border-black gap-48 justify-between h-auto w-auto'>
					<div>{text}</div>

					<div>{title}</div>
				</div>
			</a>
		</div>
	);
};
