import { Inter } from 'next/font/google';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

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
								className='aspect-square lg:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/home/face.png)',
								}}
							>
								<div className='text-6xl lg:text-9xl font-bold text-white uppercase'>
									crea
									<br /> gang
								</div>
							</div>
							<div className='aspect-square lg:aspect-video rounded-xl text-center p-6 lg:p-12 flex flex-col bg-gray-200 gap-12 lg:gap-24'>
								<div className='text-xl lg:pt-24 lg:px-64 font-bold text-balance'>
									WEBOVÉ STRÁNKY | BRANDING | LOGA | VIZITKY PLAKÁTY | BANERY |
									LETÁKY | UX/UI | SEO | SITE
								</div>
								<div>
									<div className='text-sm lg:text-xl lg:px-48 text-justify text-balance'>
										Specializujeme se na vytváření jedinečných webových stránek,
										grafického designu a brandingu. Naše práce je zaměřena na
										inovativní a moderní řešení, která přesně odpovídají
										potřebám našich klientů.
									</div>
									<div className='hidden lg:flex lg:text-xl lg:px-48 text-justify text-balance'>
										Prohlédněte si naše portfolio a přesvědčte se sami.
										Specializujeme se na vytváření jedinečných webových stránek,
										grafického designu a brandingu. Naše práce je zaměřena na
										inovativní a moderní řešení, která přesně odpovídají
										potřebám našich klientů. Prohlédněte si naše portfolio a
										přesvědčte se sami.
									</div>
								</div>
								<div className='lg:pt-24'>
									<Button additionalClassName='border-green-300 hover:border-white'>
										napište nám
									</Button>
								</div>
							</div>

							<div className='grid lg:grid-cols-2 gap-0.5'>
								<Link
									href='/design'
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-green-300 hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								>
									<div>GRAFIKA & DESIGN</div>
								</Link>
								<Link
									href='/development'
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-green-300 hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								>
									<div className=''>
										WEB & APP
										<br /> DEVELOPMENT
									</div>
								</Link>
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
