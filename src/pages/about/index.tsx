import { useCallback, useState } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';
import { Button } from '@/components/button';

export default function AboutPage() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);

	return (
		<div className='bg-white'>
			<MobileMenu />

			<main className='container mx-auto h-auto px-3 text-black'>
				<Header />

				<div className='bg-white pt-28 md:pt-36'>
					<div className='grid'>
						<div className='flex flex-col gap-0.5'>
							<div
								className='aspect-square lg:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/about/head.jpg)',
								}}
							>
								<div className='text-4xl md:text-7xl lg:text-9xl font-bold text-white uppercase text-center'>
									o nás
								</div>
							</div>
							<div className='aspect-square  lg:aspect-video relative p-4 md:p-12 lg:p-24 bg-gray-200 hover:ring-2 hover:ring-[#0009bc] text-black rounded-3xl shadow-xl overflow-hidden'>

								{/* Obsah */}
								<div className='grid lg:grid-cols-2 gap-4 md:gap-16 lg:gap-24 items-center justify-between'>
									{/* Textová část */}
									<div className='text-center lg:col-span-1'>
										<h1 className='text-2xl md:text-4xl lg:text-6xl font-bold pb-8 lg:pb-0'>
											Weby a design s dotykem abstrakce.
										</h1>
										<p className='md:mt-8 text-md md:text-lg lg:text-2xl font-light opacity-80'>
											Jsme Honza a Kuba, a vytváříme moderní, abstraktní webové
											stránky, které kombinují výjimečnou estetiku s funkčností
											a inovací.
										</p>
									</div>

									{/* Jména jako vizuální prvek */}
									<div className='lg:col-span-1 text-center lg:text-right md:mt-12 lg:mt-0'>
										<p className='text-2xl md:text-6xl lg:text-8xl font-bold'>
											Honza <br className='hidden lg:block' /> &{' '}
											<br className='hidden lg:block' /> Kuba
										</p>
									</div>
								</div>

								{/* CTA Button */}
								<div className='relative z-10 mt-4 md:mt-24 text-center'>
									<Button additionalClassName='border-transparent bg-white hover:bg-[#0009bc] hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg'>
										<a href='/contact'>Kontaktujte nás</a>
									</Button>
								</div>
							</div>

							<div
								className='aspect-square lg:aspect-video rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/about/mountain.jpg)',
								}}
							></div>
						</div>
					</div>
				</div>

				<Footer />
				<Analytics />
			</main>
		</div>
	);
}
