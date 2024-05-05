import { FunctionComponent } from 'react';

export const Collage: FunctionComponent = () => {
	return (
		<div className='grid lg:grid-cols-3 text-2xl'>
			<a href='www.apsn.cz'>
				<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
					<div>
						Dva ambiciozní podnikatelé ve tvrdě útočí svým skromným webem ve
						světě financí.
					</div>

					<div>APSN - finační společnost</div>
				</div>
			</a>

			<a href='www.harrachov-glass.com'>
				<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
					<div>
						Ukázka krásy a elegance ve formě designu a smyslnosti, který je
						přenášený skrze obrovskou osobnost jménem Hellen.
					</div>

					<div>MAKE UP by HELLEN</div>
				</div>
			</a>

			<a href='www.harrachov-glass.com'>
				<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
					<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

					<div>sklárny Harrachov</div>
				</div>
			</a>
		</div>
	);
};
