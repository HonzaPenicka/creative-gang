'use client';

import { Carousel } from 'flowbite-react';

export function CarouselOfProject() {
	return (
		<div className='h-80 sm:h-64 xl:h-80 2xl:h-96'>
			<Carousel slideInterval={5000}>
				<div className='p-12 h-full relative flex flex-col border rounded-3xl bg-white border-black gap-24'>
					<div>
						We are very proactive and work to make your product even better.
					</div>

					<div>Čokovoko</div>
				</div>
				<div className='p-12 h-full flex flex-col border rounded-3xl bg-white border-black gap-24'>
					<div>
						We are very proactive and work to make your product even better.
					</div>

					<div>Čokovoko</div>
				</div>
				<div className='p-12 h-full flex flex-col border rounded-3xl bg-white border-black gap-24'>
					<div>
						We are very proactive and work to make your product even better.
					</div>

					<div>Čokovoko</div>
				</div>
				<div className='p-12 h-full flex flex-col border rounded-3xl bg-white border-black gap-24'>
					<div>
						We are very proactive and work to make your product even better.
					</div>

					<div>Čokovoko</div>
				</div>
				<div className='p-12 h-full flex flex-col border rounded-3xl bg-white border-black gap-24'>
					<div>
						We are very proactive and work to make your product even better.
					</div>

					<div>Čokovoko</div>
				</div>
			</Carousel>
		</div>
	);
}
