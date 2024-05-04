import { Inter } from 'next/font/google';
import HomePage from './home-page';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='h-auto bg-white p-3 text-black'>
			<HomePage />

			<Analytics />
		</main>
	);
}
