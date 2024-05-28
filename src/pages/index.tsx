import { Inter } from 'next/font/google';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className='bg-white'>
			<main className='container mx-auto h-auto p-3 text-black'>
				<MobileMenu />

				<Header />

				<div className='bg-white'>
					<div className='grid'>
						<div className='flex flex-col gap-0.5'>
							<div
								className='aspect-video bg-blue-300 rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/home/face.png)',
								}}
							>
								<div className='text-6xl lg:text-9xl font-bold text-white'>
									crea gang
								</div>
							</div>
							<div className='aspect-video bg-gray-300 rounded-xl text-center p-6 lg:p-12 flex flex-col gap-12 lg:gap-24'>
								<div className='text-3xl lg:pt-24 lg:px-64 font-bold'>
									WEBOVÉ STRÁNKY | BRANDING | LOGA | VIZITKY PLAKÁTY | BANERY |
									LETÁKY | UX/UI | SEO | SITE
								</div>
								<div className='text-xl lg:px-48'>
									Specializujeme se na vytváření jedinečných webových stránek,
									grafického designu a brandingu. Naše práce je zaměřena na
									inovativní a moderní řešení, která přesně odpovídají potřebám
									našich klientů. Prohlédněte si naše portfolio a přesvědčte se
									sami. Specializujeme se na vytváření jedinečných webových
									stránek, grafického designu a brandingu. Naše práce je
									zaměřena na inovativní a moderní řešení, která přesně
									odpovídají potřebám našich klientů. Prohlédněte si naše
									portfolio a přesvědčte se sami.
								</div>
								<div className='lg:pt-24'>
									<Button additionalClassName='border-green-300 hover:border-white'>
										napište nám
									</Button>
								</div>
							</div>

							<div className='grid lg:grid-cols-2 gap-0.5'>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								>
									<div>GRAFIKA & DESIGN</div>
								</div>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								>
									<div>WEB & APP DEVELOPMENT</div>
								</div>
							</div>
						</div>
					</div>
					{/*<div className='flex flex-col text-left gap-1'>
						<div
							className='p-24 lg:p-96 border rounded-3xl justify-center flex items-center bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-conten h-96'
							style={{
								backgroundImage: 'url(/pics/bgcreagang3.png/)',
							}}
						>
							<div>
								<HeadLine>{['CREA', ' ', 'GANG']}</HeadLine>
							</div>
						</div>

						<div
							className='p-6 lg:p-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content '
							style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
						>
							<div className='lg:text-center gap-6 lg:gap-12 flex flex-col'>
								<div className='flex flex-col pt-12 lg:pt-48'>
									<div className='uppercase font-bold text-2xl lg:text-4xl'>
										webové stránky | branding | loga | vizitky
									</div>

									<div className='uppercase font-bold text-2xl lg:text-4xl'>
										plakáty | bannery | ilustrace | sociální sítě
									</div>
								</div>

								<div className='text-lg lg:text-xl'>
									Specializujeme se na vytváření jedinečných webových stránek,
									grafického designu a brandingu. Naše práce je zaměřena na
									inovativní a moderní řešení, která přesně odpovídají potřebám
									našich klientů. Prohlédněte si naše portfolio a přesvědčte se
									sami.
								</div>

								<div className='py-12'>
									<Button>Napiště nám</Button>
								</div>
							</div>
						</div>

						<div className='grid lg:grid-cols-2 gap-1'>
							<Collage title='design & branding' />

							<Collage title='web & app development' />
						</div>
					</div>*/}
				</div>

				<Footer />
				<Analytics />
			</main>
		</div>
	);
}
