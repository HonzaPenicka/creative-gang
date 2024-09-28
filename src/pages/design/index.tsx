import { useCallback, useState } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

export default function DesignPage() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);

	return (
		<div className='bg-white'>
			<main className='container mx-auto h-auto p-3 text-black'>
				<MobileMenu />

				<Header />

				<div className='bg-white pt-28'>
					<div className='grid'>
						<div className='flex flex-col gap-0.5'>
							<div
								className='aspect-square lg:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/home/face.jpg)',
								}}
							>
								<div className='text-3xl lg:text-9xl font-bold uppercase text-white'>
									grafika
									<br /> & design
								</div>
							</div>

							<div className='grid lg:grid-cols-2 gap-0.5'>
								<div className='aspect-square rounded-xl justify-between flex flex-col p-3 lg:p-6 bg-gray-300 bg-cover bg-center'>
									<a
										href='http://www.pizzaspeed.cz'
										className='text-base md:text-xl hover:text-white'
									>
										www.pizzaspeed.cz
									</a>
									<div className='text-2xl lg:text-6xl font-bold'>
										GRAFIKA & DESIGN
									</div>
									<div className='text-balance lg:pr-24 text-base md:text-xl'>
										Specializujeme se na vytváření jedinečných webových stránek,
										grafického designu a brandingu.
									</div>
								</div>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
									style={{
										backgroundImage: 'url(/pics/home/face.jpg)',
									}}
								>
									<div>WEB & APP DEVELOPMENT</div>
								</div>
							</div>

							<div className='lg:grid lg:grid-cols-2 gap-0.5 flex flex-col-reverse'>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-2xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
									style={{
										backgroundImage: 'url(/pics/home/face.jpg)',
									}}
								>
									<div>GRAFIKA & DESIGN</div>
								</div>
								<div className='aspect-square rounded-xl justify-between text-right flex flex-col p-3 lg:p-6 bg-gray-300 bg-cover bg-center'>
									<a
										href='http://www.pizzaspeed.cz'
										className='text-base md:text-xl hover:text-white'
									>
										www.pizzaspeed.cz
									</a>
									<div className='text-2xl lg:text-6xl font-bold'>
										GRAFIKA & DESIGN
									</div>
									<div className='text-balance lg:pl-24 text-base md:text-xl'>
										Specializujeme se na vytváření jedinečných webových stránek,
										grafického designu a brandingu.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
				<Analytics />
			</main>
		</div>
	);
}
