export default function HomePage() {
	return (
		<main className='container mx-auto bg-fuchsia-300'>
			<div className='text-xl flex gap-12 justify-between font-semibold py-6 uppercase'>
				<div>CreaGang</div>

				<div>Graphic & Design</div>

				<div>Web development && Applications</div>

				<div>About</div>

				<div>Contact</div>
			</div>

			<div className='bg-black'>
				<div className='border border-black flex flex-col text-left'>
					<div className='px-3 py-6 border rounded-lg bg-white'>
						<div>
							<div className='text-7xl font-bold'>
								Make
								<br className='inline' />
								something
								<br className='inline' />
								unique
							</div>

							<div className='flex gap-6'>
								<button className='py-3 px-6 text-lg bg-gradient-to-bl from-[#f217ad] to-white rounded-lg'>
									contact us
								</button>

								<div className='p-3 border rounded-full border-black'></div>
							</div>
						</div>
					</div>

					<div className='grid lg:grid-cols-3'>
						<div className='p-6 flex flex-col border rounded-lg bg-white'>
							<div>
								We are very proactive and work to make your product even better.
							</div>

							<div>Čokovoko</div>
						</div>

						<div className='p-6 flex flex-col border rounded-lg bg-white'>
							<div>
								The most experienced, specialized team across the industry.
							</div>

							<div>Work with us.</div>
						</div>

						<div className='p-6 flex flex-col border rounded-lg bg-white'>
							<div>Design</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
