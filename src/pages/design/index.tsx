import { useCallback, useState } from 'react';

import { BackgroundImage } from '@/components/background-image';
import { Collage } from '@/components/collage';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileMenu } from '@/components/mobile-menu';

export default function DesignPage() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);

	return (
		<>
			<main className='container mx-auto'>
				<MobileMenu />

				<Header />

				<div className='bg-black'>
					<div className='border border-black flex flex-col text-left'>
						<BackgroundImage />

						<Collage />
					</div>

					<Footer />
				</div>
			</main>
		</>
	);
}
