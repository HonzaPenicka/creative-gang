import { useCallback, useState } from 'react';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

export default function ContactPage() {
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
								className='aspect-square lg:aspect-video rounded-xl items-center justify-center flex bg-cover bg-center hover:ring-2 hover:ring-[#c4ec00]'
								style={{
									backgroundImage: 'url(/pics/contact/head.jpg)',
								}}
							>
								<div className='text-4xl md:text-7xl lg:text-9xl font-bold text-white uppercase text-center'>
								kontakt
								</div>
							</div>
							<div className='grid lg:grid-cols-2 gap-0.5'>
								{/* Formulář */}
								<form
									action='https://formspree.io/f/mvoelpny'
									method='POST'
									className='aspect-square bg-gray-200 overflow-auto shadow-lg rounded-xl p-4 flex flex-col gap-2 justify-between hover:ring-2 hover:ring-[#c4ec00]'
								>
									<div className='flex justify-between items-center'>
										<div className='text-3xl md:text-5xl font-extrabold'>
											Napište <br /> nám
										</div>
										<div>
											<Button
												type='submit'
												additionalClassName='border-transparent bg-white hover:bg-[#c4ec00] text-black font-bold px-6 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg'
											>
												Odeslat
											</Button>
										</div>
									</div>

									{/* Jméno a příjmení */}
									<div>
										<label className='text-lg md:text-2xl font-semibold pb-2 grid'>
											Jméno a příjmení
										</label>
										<input
											type='text'
											name='Jméno a příjmení'
											required
											placeholder='Zadejte své jméno'
											className='w-full p-2 md:p-4 rounded-lg outline-none border-2 border-gray-300 focus:border-[#c4ec00] transition-all duration-300'
										/>
									</div>

									{/* E-mail */}
									<div>
										<label className='text-lg md:text-2xl font-semibold pb-2 block'>
											E-mail
										</label>
										<input
											type='email'
											name='E-mail'
											required
											placeholder='Zadejte svůj e-mail'
											className='w-full p-2 md:p-4 rounded-lg outline-none border-2 border-gray-300 focus:border-[#c4ec00] transition-all duration-300'
										/>
									</div>

									{/* Telefonní číslo */}
									<div>
										<label className='text-lg md:text-2xl font-semibold pb-2 block'>
											Telefonní číslo
										</label>
										<input
											type='tel'
											name='Telefonní číslo'
											required
											placeholder='Zadejte své telefonní číslo'
											className='w-full p-2 md:p-4 rounded-lg outline-none border-2 border-gray-300 focus:border-[#c4ec00] transition-all duration-300'
										/>
									</div>

									{/* Zpráva */}
									<div>
										<label className='text-lg md:text-2xl font-semibold pb-2 block'>
											Vaše zpráva
										</label>
										<textarea
											name='message'
											required
											placeholder='Popište váš požadavek'
											className='w-full p-2 md:p-4 rounded-lg outline-none border-2 border-gray-300 focus:border-[#c4ec00] transition-all duration-300'
											rows={Number('2')}
										></textarea>
									</div>
								</form>

								{/* Obrázek vedle formuláře */}
								<div
									className='aspect-square rounded-xl bg-cover bg-center flex items-center justify-center shadow-lg hover:ring-2 hover:ring-[#c4ec00]'
									style={{
										backgroundImage: "url('/pics/contact/first.jpg')",
									}}
								></div>
							</div>

							<div className='lg:grid lg:grid-cols-2 gap-0.5 flex flex-col-reverse text-black'>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold bg-cover bg-center hover:ring-2 hover:ring-[#c4ec00]'
									style={{
										backgroundImage: 'url(/pics/contact/sec.jpg)',
									}}
								></div>
								<div className='aspect-square rounded-xl flex flex-col justify-around text-right p-6 bg-gray-200 shadow-lg  hover:ring-2 hover:ring-[#c4ec00]'>
									<div>
										<div className='text-lg md:text-xl font-medium text-gray-600'>
											E-mail
										</div>
										<a
											href='mailto:info@creagang.cz'
											className='text-lg md:text-2xl font-semibold text-gray-900 hover:text-[#c4ec00] transition-colors duration-300'
										>
											info@creagang.cz
										</a>
									</div>

									<div>
										<div className='text-lg md:text-xl font-medium text-gray-600'>
											Telefon
										</div>
										<a
											href='tel:+420605088050'
											className='text-lg md:text-2xl font-semibold text-gray-900 hover:text-[#c4ec00] transition-colors duration-300'
										>
											+420 605 088 050
										</a>
									</div>

									<div>
										<div className='text-lg md:text-xl font-medium text-gray-600'>
											Adresa
										</div>
										<div className='text-lg md:text-2xl font-semibold text-gray-900'>
											Křišťanova 1678/20
											<br /> Praha 3 - Žižkov
											<br /> 130 00
										</div>
									</div>

									<div>
										<div className='text-lg md:text-xl font-medium text-gray-600'>
											Fakturační údaje
										</div>
										<div className='text-lg md:text-2xl font-semibold text-gray-900'>
											IČO: 14151057
										</div>
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
