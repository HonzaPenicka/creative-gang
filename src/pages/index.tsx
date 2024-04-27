import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomePage from './home-page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='h-screen bg-white p-3 text-black '>
			<HomePage />
		</main>
	);
}
