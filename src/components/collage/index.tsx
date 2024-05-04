import { FunctionComponent } from 'react';

export const Collage: FunctionComponent = () => {
	return (
		<div className='grid lg:grid-cols-3 text-2xl'>
			<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48'>
				<div>
					We are very proactive and work to make your product even better.
				</div>

				<div>Čokovoko</div>
			</div>

			<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48'>
				<div>The most experienced, specialized team across the industry.</div>

				<div>Work with us.</div>
			</div>

			<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48'>
				<div>
					We are very proactive and work to make your product even better.
				</div>

				<div>Design</div>
			</div>
		</div>
	);
};
