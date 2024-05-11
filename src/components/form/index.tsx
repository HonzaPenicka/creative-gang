import { FunctionComponent } from 'react';
import { Button } from '../button';

export const Form: FunctionComponent = () => {
	return (
		<form
			className='flex flex-col gap-3 lg:gap-12 bg-white border rounded-3xl p-6 lg:p-12'
			method='POST'
			action='https://formspree.io/f/mvoelpny'
		>
			<div className='font-bold text-2xl'>Jméno a příjmení</div>

			<div className='bg-black'>
				<input
					type='name'
					name='Jméno a příjmení'
					required
					placeholder='Jméno a příjmení'
					id='name'
					className='border h-12 text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
				/>
			</div>

			<div className='font-bold text-2xl'>Telefonní číslo</div>

			<div className='bg-black'>
				<input
					type='tel'
					name='Telefonní číslo'
					required
					placeholder='Telefonní číslo'
					id='phone'
					className='border h-12 text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
				/>
			</div>

			<div className='font-bold text-2xl'>E-mail</div>

			<div className='bg-black'>
				<input
					type='email'
					name='E-mail'
					required
					placeholder='E-mailová adresa'
					id='email'
					className='border h-12 text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
				/>
			</div>

			<div className='font-bold text-2xl'>Zpráva</div>

			<div className='bg-black'>
				<textarea
					name='message'
					placeholder='Popište váš požadavek'
					required
					id='message'
					className='border h-full text-sm lg:text-xl p-3 border-black rounded-3xl w-full'
				/>
			</div>

			<div className='pt-12'>
				<Button
					type='submit'
					additionalClassName='from-[#fdfc47] to-[#24fe41] bg-gradient-to-l'
				>
					Odeslat
				</Button>
			</div>
		</form>
	);
};
