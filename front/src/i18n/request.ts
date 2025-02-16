import { getRequestConfig } from 'next-intl/server';
import { routing } from './_routing';
import { getCurrentLanguage } from './language';

export default getRequestConfig(async () => {
    const locale = await getCurrentLanguage();

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
})