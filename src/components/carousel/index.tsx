import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function CarouselOfDEV() {
	return (
		<div className='lg:flex text-2xl hidden'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>
					<a href='www.apsn.cz'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>
								Dva ambiciozní podnikatelé ve tvrdě útočí svým skromným webem ve
								světě financí.
							</div>

							<div>APSN - finační společnost</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>
								Ukázka krásy a elegance ve formě designu a smyslnosti, který je
								přenášený skrze obrovskou osobnost jménem Hellen.
							</div>

							<div>MAKE UP by HELLEN</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-12 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				...
			</Swiper>
		</div>
	);
}

export function CarouselOfDEVMobile() {
	return (
		<div className='flex text-2xl lg:hidden'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>
					<a href='www.apsn.cz'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full w-full'>
							<div>
								Dva ambiciozní podnikatelé ve tvrdě útočí svým skromným webem ve
								světě financí.
							</div>

							<div>APSN - finační společnost</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
							<div>
								Ukázka krásy a elegance ve formě designu a smyslnosti, který je
								přenášený skrze obrovskou osobnost jménem Hellen.
							</div>

							<div>MAKE UP by HELLEN</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a href='www.harrachov-glass.com'>
						<div className='p-6 flex flex-col border rounded-3xl bg-white border-black gap-48 justify-between h-full'>
							<div>Laciné cetky, mrdky, mercedesy a čardáš.</div>

							<div>sklárny Harrachov</div>
						</div>
					</a>
				</SwiperSlide>
				...
			</Swiper>
		</div>
	);
}
