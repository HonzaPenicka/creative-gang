import { useCallback, useState } from 'react';

import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeadLine } from '@/components/headline';
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

				<div className='bg-black'>
					<div className='border border-black flex flex-col text-left'>
						<div
							className='p-6 lg:p-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content '
							style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
						>
							<HeadLine additionalClassName='text-6xl, lg:text-7xl'>
								{['Make', ' ', 'something', ' ', 'unique']}
							</HeadLine>

							<div className='pt-72'>
								<Button additionalClassName='from-[#fdfc47] to-[#24fe41] bg-gradient-to-l'>
									contact us
								</Button>
							</div>
						</div>

						<div className='grid lg:grid-cols-2 text-2xl'>
							<div className='p-6 lg:p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-96'>
								<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

								<div>sklárny Harrachov</div>
							</div>

							<div className='p-6 lg:p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-96'>
								<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

								<div>sklárny Harrachov</div>
							</div>
						</div>

						<div className='bg-black rounded-3xl flex flex-col lg:grid lg:grid-cols-2'>
							<form
								className='flex flex-col gap-3 lg:gap-6 bg-white border rounded-3xl p-6 lg:p-12'
								method='POST'
								action='https://formspree.io/f/mvoelpny'
							>
								<div className='font-bold text-2xl'>Jméno a příjmení</div>

								<div className='bg-black'>
									<input
										type='name'
										name='Jméno a příjmení'
										required
										placeholder='Jméno a příjmení'
										id='name'
										className='border h-12 text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
									/>
								</div>

								<div className='font-bold text-2xl'>Telefonní číslo</div>

								<div className='bg-black'>
									<input
										type='tel'
										name='Telefonní číslo'
										required
										placeholder='Telefonní číslo'
										id='phone'
										className='border h-12 text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
									/>
								</div>

								<div className='font-bold text-2xl'>E-mail</div>

								<div className='bg-black'>
									<input
										type='email'
										name='E-mail'
										required
										placeholder='E-mailová adresa'
										id='email'
										className='border h-12 text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
									/>
								</div>

								<div className='font-bold text-2xl'>Zpráva</div>

								<div className='bg-black'>
									<textarea
										name='message'
										placeholder='Popište váš požadavek'
										required
										id='message'
										className='border h-full text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
									/>
								</div>

								<div className='pt-12'>
									<Button
										type='submit'
										additionalClassName='from-[#fdfc47] to-[#24fe41] bg-gradient-to-l'
									>
										Odeslat
									</Button>
								</div>
							</form>

							<div className='flex flex-col text-2xl'>
								<div className='p-6 lg:p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-96'>
									<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

									<div>sklárny Harrachov</div>
								</div>

								<div className='p-6 lg:p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-96'>
									<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

									<div>sklárny Harrachov</div>
								</div>
							</div>
						</div>

						<div className='grid lg:grid-cols-2 text-2xl'>
							<div className='p-6 lg:p-12 flex flex-col border rounded-3xl bg-white border-black gap-12 lg:gap-24'>
								<div className='font-bold text-4xl'>CREAGANG</div>

								<div className='grid md:grid-cols-2 gap-12'>
									<div className='flex flex-col gap-12 justify-between'>
										<div>
											<div className='font-bold'>E-mail</div>
											<div>info@creagang.cz</div>
										</div>

										<div>
											<div className='font-bold'>Telefon</div>
											<div>+420 605 088 050</div>
										</div>
									</div>

									<div className='flex flex-col gap-12 justify-between'>
										<div>
											<div className='font-bold'>Adresa</div>
											<div>Křišťanova 1678/20</div>
											<div>Praha 3 - Žižkov</div>
										</div>

										<div>
											<div className='font-bold'>Fakturační údaje</div>
											<div className='flex gap-1'>
												<div>IČO:</div>
												<div>14151057</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='flex flex-col border rounded-3xl bg-white border-black w-full h-auto'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10240.211479508469!2d14.44544768214728!3d50.08529699439395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b936952a69573%3A0x8c0309f38e0d2c7d!2zxb1pxb5rb3YsIDEzMCAwMCBQcmFoYSAz!5e0!3m2!1scs!2scz!4v1714943485680!5m2!1scs!2scz'
									width=''
									height='450'
									style={{ border: 0, borderRadius: '24px' }}
									loading='lazy'
								></iframe>
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
