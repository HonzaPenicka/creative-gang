import { useCallback, useState } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

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

				<div className='bg-white'>
					<div className='grid'>
						<div className='flex flex-col gap-0.5'>
							<div
								className='aspect-square lg:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/dev/head.jpg)',
								}}
							>
								<div className='text-4xl md:text-7xl lg:text-9xl font-bold text-white uppercase text-center'>
									web & app
									<br /> development
								</div>
							</div>

							<div className='grid lg:grid-cols-2 gap-0.5'>
								<div className='aspect-square rounded-xl justify-between flex flex-col p-3 lg:p-6 bg-gray-200 bg-cover bg-center  hover:drop-shadow-xl hover:ring-2 hover:ring-[#c82b51] hover:brightness-125'>
									<a
										href='http://www.securitynvd.cz'
										className='text-xl md:text-3xl font-medium hover:text-white'
									>
										www.securitynvd.cz
									</a>
									<div className='text-4xl md:text-6xl font-bold uppercase'>
										nvd facility
										<br />
										security
									</div>
									<div className='text-balance lg:pr-24 text-xl md:text-3xl font-light'>
										Webové stránky pro bezpečnostní agenturu v Praze a okolí.
									</div>
								</div>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-[#c82b51] hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/dev/camera.jpg)',
									}}
								>
									<div className='text-4xl lg:text-6xl uppercase'>
										WEB & APP
										<br /> DEVELOPMENT
									</div>
								</div>
							</div>

							<div className='lg:grid lg:grid-cols-2 gap-0.5 flex flex-col-reverse'>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-[#c82b51] hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/dev/clean.jpg)',
									}}
								>
									<div className='text-4xl lg:text-6xl uppercase'>
										GRAFIKA <br />& DESIGN
									</div>
								</div>
								<div className='aspect-square rounded-xl justify-between md:text-right flex flex-col p-3 lg:p-6 bg-gray-200 bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-[#c82b51] hover:brightness-125'>
									<a
										href='http://www.uklidnvd.cz'
										className='text-xl md:text-3xl font-medium hover:text-white'
									>
										www.uklidnvd.cz
									</a>

									<div className='text-4xl md:text-6xl font-bold uppercase'>
										nvd facility
										<br />
										úklid
									</div>

									<div className='text-balance lg:pl-24 text-xl md:text-3xl'>
										Webové stránky pro úklidovou angenturu v Praze a okolí.
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
