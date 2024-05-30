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
								className='aspect-square md:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/home/face.png)',
								}}
							>
								<div className='text-6xl md:text-9xl font-bold text-white uppercase'>
									crea
									<br /> gang
								</div>
							</div>
							<div className='aspect-square md:aspect-video rounded-xl text-center p-6 md:p-12 flex flex-col bg-gray-200 gap-6 md:gap-24'>
								<div className='text-base md:text-3xl lg:px-64 font-bold text-balance'>
									WEBOVÉ STRÁNKY | BRANDING | LOGA | VIZITKY | PLAKÁTY | BANERY
									| LETÁKY | UX/UI | SEO | SITE
								</div>
								<div>
									<div className='text-sm md:text-xl lg:px-48 text-justify'>
										Specializujeme se na vytváření jedinečných webových stránek,
										kreativního grafického designu a profesionálního brandingu.
										Naše práce se zaměřuje na inovativní a moderní řešení, která
										přesně odpovídají potřebám našich klientů.
										<p className='hidden md:flex'>
											Prohlédněte si naše portfolio a přesvědčte se sami.
											Specializujeme se na vytváření jedinečných webových
											stránek, kreativního grafického designu a profesionálního
											brandingu. Naše práce se zaměřuje na inovativní a moderní
											řešení, která přesně odpovídají potřebám našich klientů.
											Prohlédněte si naše portfolio a přesvědčte se sami.
										</p>
									</div>
								</div>
								<div className='pt-6 md:pt-24'>
									<Button additionalClassName='border-green-300 hover:border-white'>
										<a href='/contact'>napište nám</a>
									</Button>
								</div>
							</div>

							<div className='grid md:grid-cols-2 gap-0.5'>
								<Link
									href='/design'
									className='aspect-square rounded-xl justify-center flex items-center text-3xl md:text-4xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-green-300 hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								>
									<div>
										GRAFIKA <br /> & DESIGN
									</div>
								</Link>
								<Link
									href='/development'
									className='aspect-square rounded-xl justify-center flex items-center text-3xl md:text-4xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-green-300 hover:brightness-125'
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
