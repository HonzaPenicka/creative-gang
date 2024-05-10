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

				<div className='flex flex-col text-left'>
					<div
						className='p-6 lg:p-12 border rounded-3xl bg-white border-black bg-contain bg-no-repeat bg-bottom bg-origin-content'
						style={{ backgroundImage: 'url(/pics/bobrkuba.jpeg/)' }}
					>
						<HeadLine additionalClassName='text-6xl, lg:text-7xl'>
							{['Kuba', ' ', 'špinavá', ' ', 'prdel']}
						</HeadLine>

						<div className='pt-72'>
							<Button
								type='button'
								additionalClassName='from-[#f3f520] to-[#ff0099] bg-gradient-to-l'
							>
								Napiš mi
							</Button>
						</div>
					</div>

					<Collage />
				</div>

				<Footer />
				<Analytics />
			</main>
		</div>
	);
}
