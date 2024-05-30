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
									kontakt
								</div>
							</div>
							<div className='grid lg:grid-cols-2 gap-0.5'>
								<form
									action='https://formspree.io/f/mvoelpny'
									method='POST'
									className=''
								>
									<div className='aspect-square rounded-xl p-3 lg:p-6 bg-gray-300 text-black flex flex-col gap-3 justify-between'>
										<div className='flex gap-3 md:gap-6'>
											<div className='text-2xl md:text-6xl font-bold'>
												napište nám
											</div>
											<Button
												type='submit'
												additionalClassName='hover:border-blue-300'
											>
												Potvrdit
											</Button>
										</div>

										<div>
											<div className='text-base md:text-2xl font-semibold pb-1 lg:pb-3'>
												jméno a příjmení
											</div>

											<div className='w-auto'>
												<input
													type='name'
													name='Jméno a příjmení'
													required
													placeholder='Jméno a příjmení'
													id='name'
													className='py-0.5 p-3 lg:w-1/2 rounded-xl md:py-3 lg:text-xl outline-none border-black border hover:border-white bg-transparent'
												/>
											</div>
										</div>

										<div>
											<div className='text-base md:text-2xl font-semibold pb-1 lg:pb-3'>
												e-mail
											</div>

											<div className='w-auto'>
												<input
													type='email'
													name='E-mail'
													required
													placeholder='E-mailová adresa'
													id='email'
													className='py-0.5 p-3 lg:w-1/2 rounded-xl md:py-3 md:text-xl outline-none border-black border hover:border-white bg-transparent'
												/>
											</div>
										</div>

										<div>
											<div className='text-base md:text-2xl font-semibold pb-1 lg:pb-3'>
												telefonní číslo
											</div>

											<div className='w-auto'>
												<input
													type='tel'
													name='Telefonní číslo'
													required
													placeholder='Telefonní číslo'
													id='phone'
													className='py-0.5 p-3 lg:w-1/2 rounded-xl md:py-3 md:text-xl outline-none border-black border hover:border-white bg-transparent'
												/>
											</div>
										</div>

										<div>
											<div className='text-base md:text-2xl font-semibold pb-1 lg:pb-3'>
												vaše zpráva
											</div>

											<div className='w-auto'>
												<textarea
													name='message'
													placeholder='Popište váš požadavek'
													required
													id='message'
													className='py-0.5 p-3 w-full lg:w-full rounded-xl md:py-3 lg:text-xl outline-none bg-transparent border-black border hover:border-white'
												/>
											</div>
										</div>
									</div>
								</form>

								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								></div>
							</div>

							<div className='lg:grid lg:grid-cols-2 gap-0.5 flex flex-col-reverse text-black'>
								<div
									className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold bg-cover bg-center'
									style={{
										backgroundImage: 'url(/pics/home/face.png)',
									}}
								></div>
								<div className='aspect-square rounded-xl justify-around text-right flex flex-col p-3 lg:p-6 bg-gray-300 bg-cover bg-center'>
									<div>
										<div className='text-base md:text-2xl font-light'>
											e-mail
										</div>
										<a
											href='mailto:info@creagang.cz'
											className='text-base md:text-2xl font-semibold'
										>
											info@creagang.cz
										</a>
									</div>
									<div>
										<div className='text-base md:text-2xl font-light'>
											telefon
										</div>

										<a
											href='tel:+420605088050'
											className='text-base md:text-2xl font-semibold'
										>
											+420 605 088 050
										</a>
									</div>

									<div>
										<div className='text-base md:text-2xl font-light'>
											adresa
										</div>

										<div className='text-base md:text-2xl font-semibold'>
											Křišťanova 1678/20
											<br /> Praha 3 - Žižkov
											<br /> 130 00
										</div>
									</div>

									<div>
										<div className='text-base md:text-2xl font-light'>
											fakturační údaje
										</div>

										<div className='text-base md:text-2xl font-semibold'>
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
