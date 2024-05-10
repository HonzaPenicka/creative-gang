import { useCallback, useState } from 'react';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeadLine } from '@/components/headline';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

import { CarouselOfDEV, CarouselOfDEVMobile } from '@/components/carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function DevPage() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);

	return (
		<div className='bg-white'>
			<main className='container mx-auto h-auto p-3 text-black'>
				<MobileMenu />

				<Header />

				<div className='bg-black'>
					<div className='border border-black flex flex-col text-left'>
						<div className='lg:grid lg:grid-cols-2 flex flex-col'>
							<div
								className='p-6 lg:p-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content flex flex-col gap-36'
								style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
							>
								<HeadLine additionalClassName='text-4xl lg:text-6xl'>
									{['Nice', ' ', 'High speed', ' ', 'Website']}
								</HeadLine>

								<div className='text-2xl lg:text-4xl font-bold'>
									Small
									<br className='inline' />
									creative team
									<br className='inline' />
									with brilliant ideas
								</div>

								<div>
									<Button additionalClassName='from-[#6717f2] to-white bg-gradient-to-l'>
										contact us
									</Button>
								</div>
							</div>

							<div
								className='p-6 lg:p-12 border rounded-3xl md:text-right bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content flex flex-col gap-36'
								style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
							>
								<HeadLine additionalClassName='text-4xl lg:text-6xl'>
									{['Stay cool', ' ', 'Like a', ' ', 'Phoenix']}
								</HeadLine>

								<div className='text-2xl lg:text-4xl font-bold'>
									Small
									<br className='inline' />
									creative team
									<br className='inline' />
									with brilliant ideas
								</div>
							</div>
						</div>

						{/*<Collage />*/}

						<CarouselOfDEV />

						<CarouselOfDEVMobile />
					</div>
				</div>

				<Footer />
				<Analytics />
			</main>
		</div>
	);
}
