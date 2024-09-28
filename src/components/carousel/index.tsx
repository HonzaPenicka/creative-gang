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
					<a
						href='http://www.securitynvd.cz'
						className='text-xl md:text-3xl font-medium hover:text-white'
					>
						www.securitynvd.cz
					</a>
					<div className='text-4xl md:text-6xl font-bold uppercase'>
						nvd facility
						<br />
						security
					</div>
					<div className='text-balance lg:pr-24 text-xl md:text-3xl font-light'>
						Webové stránky pro bezpečnostní agenturu v Praze a okolí.
					</div>
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
					<div className='grid lg:grid-cols-2 gap-0.5'>
						<div className='aspect-square rounded-xl justify-between flex flex-col p-3 lg:p-6 bg-gray-200 bg-cover bg-center'>
							<a
								href='http://www.securitynvd.cz'
								className='text-xl md:text-3xl font-medium hover:text-white'
							>
								www.securitynvd.cz
							</a>
							<div className='text-4xl md:text-6xl font-bold uppercase'>
								nvd facility
								<br />
								security
							</div>
							<div className='text-balance lg:pr-24 text-xl md:text-3xl font-light'>
								Webové stránky pro bezpečnostní agenturu v Praze a okolí.
							</div>
						</div>
						<div
							className='aspect-square rounded-xl justify-center flex items-center text-3xl lg:text-6xl text-center font-bold text-white bg-cover bg-center'
							style={{
								backgroundImage: 'url(/pics/dev/camera.jpg)',
							}}
						>
							<div className='text-4xl lg:text-6xl uppercase'>
								WEB & APP
								<br /> DEVELOPMENT
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='lg:grid lg:grid-cols-2 gap-0.5'>
						<div
							className='aspect-square rounded-xl justify-center flex items-center text-center font-bold text-white bg-cover bg-center'
							style={{
								backgroundImage: 'url(/pics/dev/clean.jpg)',
							}}
						>
							<div className='text-4xl lg:text-6xl uppercase'>
								GRAFIKA <br />& DESIGN
							</div>
						</div>
						<div className='aspect-square rounded-xl justify-between md:text-right flex flex-col p-3 lg:p-6 bg-gray-200 bg-cover bg-center'>
							<a
								href='http://www.uklidnvd.cz'
								className='text-xl md:text-3xl font-medium hover:text-white'
							>
								www.uklidnvd.cz
							</a>

							<div className='text-4xl md:text-6xl font-bold uppercase'>
								nvd facility
								<br />
								úklid
							</div>

							<div className='text-balance lg:pl-24 text-xl md:text-3xl'>
								Webové stránky pro úklidovou angenturu v Praze a okolí.
							</div>
						</div>
					</div>
				</SwiperSlide>
				...
			</Swiper>
		</div>
	);
}
