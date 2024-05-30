import { useCallback, useState } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

export default function AboutPage() {
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
									backgroundImage: 'url(/pics/about/head.png)',
								}}
							>
								<div className='text-6xl lg:text-9xl font-bold text-white uppercase'>
									o nás
								</div>
							</div>
							<div className='aspect-square lg:aspect-video rounded-xl justify-between text-center p-6 md:p-12 lg:p-24 flex flex-col bg-gray-200 gap-12 lg:gap-24'>
								<div className='text-sm md:text-2xl text-justify font-light md:font-normal'>
									Specializujeme se na vytváření jedinečných webových stránek,
									grafického designu a brandingu. Naše práce je zaměřena na
									inovativní a moderní řešení, která přesně odpovídají potřebám
									našich klientů. Prohlédněte si naše portfolio a přesvědčte se
									sami. Specializujeme se na vytváření jedinečných webových
									stránek, grafického designu a brandingu. Naše práce je
									zaměřena na inovativní a moderní řešení, která přesně
									odpovídají potřebám našich klientů. Prohlédněte si naše
									portfolio a přesvědčte se sami.
									<br />
									<br />
								</div>
								<div className='justify-center flex text-base md:text-5xl'>
									Honza a Kuba
								</div>
							</div>

							<div
								className='aspect-square lg:aspect-video rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/about/mountain.png)',
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
