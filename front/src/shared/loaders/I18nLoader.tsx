import { getMessages, getLocale } from 'next-intl/server';
import { IntlProvider } from '@/shared/providers/IntlProvider';

type Props = {
    children: React.ReactNode;
};

export default async function I18nLoader({ children }: Props) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <IntlProvider locale={locale} messages={messages}>
            {children}
        </IntlProvider>
    )
}