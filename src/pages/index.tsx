import { Inter } from 'next/font/google';

import { Button } from '@/components/button';
import { Collage } from '@/components/collage';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeadLine } from '@/components/headline';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
							<HeadLine>{['Make', ' ', 'something', ' ', 'unique']}</HeadLine>

							<div className='pt-72'>
								<Button additionalClassName='' />
							</div>
						</div>

						<Collage />
					</div>
				</div>

				<Footer />
				<Analytics />
			</main>
		</div>
	);
}
