import { useCallback, useState } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';

export default function HomePage() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);

	return (
		<>
			<main className='container mx-auto'>
				<MobileMenu />

				<Header />

				<div className='bg-black'>
					<div className='border border-black flex flex-col text-left'>
						<div
							className='px-12 py-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content '
							style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
						>
							<div className='text-6xl lg:text-8xl font-bold'>
								Make
								<br className='inline' />
								something
								<br className='inline' />
								unique
							</div>

							<div className='flex gap-24 pt-72'>
								<button className='py-3 lg:px-24 px-12 bg-gradient-to-bl from-[#6717f2] to-white text-2xl rounded-3xl uppercase'>
									contact
								</button>
							</div>
						</div>
						<div className='grid lg:grid-cols-3 text-2xl'>
							<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48'>
								<div>
									We are very proactive and work to make your product even
									better.
								</div>

								<div>Čokovoko</div>
							</div>

							<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48'>
								<div>
									The most experienced, specialized team across the industry.
								</div>

								<div>Work with us.</div>
							</div>

							<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48'>
								<div>
									We are very proactive and work to make your product even
									better.
								</div>

								<div>Design</div>
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
