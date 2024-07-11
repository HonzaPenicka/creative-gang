import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'cs', 'sk', 'vi'];
const defaultLocale = 'cs';

function getLocale(request: NextRequest): string {
	const headers = {
		'accept-language': request.headers.get('accept-language') || '',
	};
	const languages = new Negotiator({ headers }).languages();
	return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return NextResponse.next();

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${request.nextUrl}`;
}

export const config = {
	matcher: ['/((?!_next).*'],
};
