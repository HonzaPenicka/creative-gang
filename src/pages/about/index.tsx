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
		<div className='bg-white pt-24'>
			<main className='container mx-auto h-auto p-3 text-black'>
				<MobileMenu />

				<Header />

				<div className='bg-white'>
					<div className='grid'>
						<div className='flex flex-col gap-0.5'>
							<div
								className='aspect-square lg:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center'
								style={{
									backgroundImage: 'url(/pics/about/head.jpg)',
								}}
							>
								<div className='text-6xl lg:text-9xl font-bold text-white uppercase'>
									o nás
								</div>
							</div>
							<div className="relative p-12 lg:p-24 bg-gradient-to-r from-[#0D01CD] to-[#ffffff] text-white rounded-3xl shadow-xl overflow-hidden">
  {/* Abstraktní tvary v pozadí */}
  <div className="absolute inset-0 opacity-0">
    <svg className="w-full h-full" viewBox="0 0 800 600">
      <circle cx="200" cy="300" r="150" fill="rgba(255, 255, 0, 0.3)" />
      <circle cx="600" cy="400" r="100" fill="rgba(255, 0, 150, 0.4)" />
      <path d="M300,400 C400,300 600,500 700,400" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" fill="none"/>
    </svg>
  </div>

  {/* Obsah */}
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center justify-between">
    {/* Textová část */}
    <div className="text-left lg:col-span-1">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight animate-text-fade">
        Weby a design s dotykem abstrakce.
      </h1>
      <p className="mt-8 text-lg md:text-2xl font-light opacity-80 leading-relaxed max-w-md">
        Jsme Honza a Kuba, a vytváříme moderní, abstraktní webové stránky, které kombinují výjimečnou estetiku s funkčností a inovací.
      </p>
    </div>

    {/* Jména jako vizuální prvek */}
    <div className="lg:col-span-1 text-center lg:text-right">
      <p className="text-6xl md:text-8xl font-extrabold bg-clip-text bg-gradient-to-r from-white to-[#0D01CD] animate-slide-up">
        Honza <br/> & <br/> Kuba
      </p>
    </div>
  </div>

  {/* CTA Button */}
  <div className="relative z-10 mt-12 text-center">
    <Button additionalClassName="border-white bg-transparent hover:bg-yellow-500 hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg">
      <a href="/contact">Kontaktujte nás</a>
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
