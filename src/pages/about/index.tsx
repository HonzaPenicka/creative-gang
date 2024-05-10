import { useCallback, useState } from 'react';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeadLine } from '@/components/headline';
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

				<div className='bg-black'>
					<div className='border border-black flex flex-col text-left'>
						<div
							className='p-6 lg:p-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-border flex flex-col gap-36'
							style={{ backgroundImage: 'url(/pics/skulls.png/)' }}
						>
							<HeadLine additionalClassName='text-6xl, lg:text-7xl'>
								{['We', ' ', 'Are here', ' ', 'For you & friends']}
							</HeadLine>

							<div className='lg:w-1/2 text-xl'>
								Vítejte ve světě CREAGANG, kde se setkává technologie s
								kreativitou a vznikají digitální divy!
								<br className='inline' />
								<br className='inline' />
								Jsme tým nadšenců, kteří milují vývoj a design webových stránek,
								aplikací, grafiky a všeho, co je spojené s digitálním světem. U
								nás není prostor pro nudu a stereotypy. Naopak, jsme tu pro
								všechny, kdo chtějí světu ukázat svou jedinečnou vizí
								prostřednictvím moderních technologií a kreativních konceptů.
								<br className='inline' />
								<br className='inline' />
								Ať už jste podnikatel hledající revoluční webové řešení, nebo
								jednoduše milovník designu toužící po originálním grafickém
								obsahu, máme pro vás to nejlepší. Společně proměníme vaše
								myšlenky a sny v digitální realitu, která oslní a bude bavit.
								<br className='inline' />
								<br className='inline' />
								Připojte se k CREAGANG a zažijte svět plný možností, kde se váš
								digitální příběh stává skutečností. Jsme tu pro vás, abychom vám
								pomohli objevovat nové digitální horizonty s lehkostí a stylem!
							</div>

							<div className=''>
								<Button additionalClassName='from-[#20bdff] to-[#a5fecb] bg-gradient-to-l'>
									contact us
								</Button>
							</div>
						</div>

						<div className='lg:grid lg:grid-cols-2 flex flex-col'>
							<div
								className='p-6 lg:p-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content flex flex-col gap-36'
								style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
							>
								<HeadLine additionalClassName='text-4xl lg:text-6xl'>
									{['Nice', ' ', 'High speed', ' ', 'Website']}
								</HeadLine>

								<div className='text-4xl font-bold'>
									Small
									<br className='inline' />
									creative team
									<br className='inline' />
									with brilliant ideas
								</div>
							</div>

							<div
								className='p-6 lg:p-12 border md:text-right rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content flex flex-col gap-36'
								style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
							>
								<HeadLine additionalClassName='text-4xl lg:text-6xl'>
									{['Stay cool', ' ', 'Like a', ' ', 'Phoenix']}
								</HeadLine>

								<div className='text-4xl font-bold'>
									Small
									<br className='inline' />
									creative team
									<br className='inline' />
									with brilliant ideas
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
