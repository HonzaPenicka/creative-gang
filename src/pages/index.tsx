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

				<div className='bg-white pt-28'>
					<div className='grid'>
						<div className='flex flex-col gap-0.5'>
							<div
								className='aspect-square md:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/home/face.jpg)',
								}}
							>
								<div className='text-6xl md:text-9xl font-bold text-white uppercase'>
									crea
									<br /> gang
								</div>
							</div>
							<div className="relative rounded-3xl p-8 md:p-16 bg-gradient-to-r from-[#EEEE57] to-[#F8C65A] shadow-lg text-white overflow-hidden">
								<div className="absolute inset-0 opacity-80 pointer-events-none rounded-3xl"></div>
									<div className="relative z-10 flex flex-col gap-8 md:gap-16 items-center text-center">
										<div className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide animate-text">
											WEB DESIGN | BRANDING | DEVELOPMENT | UX/UI | SEO
										</div>

										<div className="text-base md:text-xl lg:text-2xl max-w-4xl leading-relaxed">
										Vytvářím jedinečné webové stránky a vizuální identity, které oživí vaše nápady a zaujmou vaše zákazníky. Od inovativního grafického designu po moderní vývoj webových aplikací – mám řešení přesně na míru vašim potřebám.
										</div>

										<div className="text-sm md:text-lg lg:text-xl hidden md:flex mt-6 opacity-80">
										Prohlédněte si mé portfolio, kde najdete ukázky prací zahrnující kreativní návrhy a inovativní řešení na míru.
										</div>

										<div className="pt-6 md:pt-12">
										<Button additionalClassName="border-transparent bg-white text-purple-600 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 shadow-lg">
											<a href="/contact">Napište mi</a>
										</Button>
									</div>
								</div>
							</div>


							<div className='grid md:grid-cols-2 gap-0.5'>
								<Link
									href='/design'
									className='aspect-square rounded-xl justify-center flex items-center text-3xl md:text-4xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-[#F8F85A] hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/home/face.jpg)',
									}}
								>
									<div>
										GRAFIKA <br /> & DESIGN
									</div>
								</Link>
								<Link
									href='/development'
									className='aspect-square rounded-xl justify-center flex items-center text-3xl md:text-4xl lg:text-6xl text-center font-bold text-white bg-cover bg-center hover:drop-shadow-xl hover:ring-2 hover:ring-[#F8F85A] hover:brightness-125'
									style={{
										backgroundImage: 'url(/pics/home/face.jpg)',
									}}
								>
									<div>
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
