/*import 'server-only';

const dictionaries = {
	en: () => import('./locales/en.json').then((module) => module.default),
	cs: () => import('./locales/cs.json').then((module) => module.default),
	vi: () => import('./locales/vi.json').then((module) => module.default),
	sk: () => import('./locales/sk.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) =>
	dictionaries[locale as 'en' | 'cs' | 'vi' | 'sk']();
*/
