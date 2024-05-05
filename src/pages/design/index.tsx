import { useCallback, useState } from 'react';

import { Button } from '@/components/button';
import { Collage } from '@/components/collage';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeadLine } from '@/components/headline';
import { MobileMenu } from '@/components/mobile-menu';
import { Analytics } from '@vercel/analytics/react';

export default function DesignPage() {
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
							className='px-12 py-12 border rounded-3xl bg-white border-black bg-cover bg-no-repeat bg-center bg-origin-content '
							style={{ backgroundImage: 'url(/pics/bgcreagang3.png/)' }}
						>
							<HeadLine additionalClassName='text-6xl, lg:text-7xl'>
								{['Make', ' ', 'something', ' ', 'unique']}
							</HeadLine>

							<div className='pt-72'>
								<Button />
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
