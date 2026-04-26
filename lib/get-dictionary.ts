import { cookies } from 'next/headers';
import type enUsDict from '@/data/en_us.json';

export type Dictionary = typeof enUsDict;

const dictionaries = {
  en: () => import('@/data/en_us.json').then((module) => module.default),
  id: () => import('@/data/id_id.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = 'en';

export const getDictionary = async () => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value as Locale | undefined;
  const locale = localeCookie && dictionaries[localeCookie] ? localeCookie : defaultLocale;
  
  const dict = await dictionaries[locale]();
  return { dict, locale };
};
