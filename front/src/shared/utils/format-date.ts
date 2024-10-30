interface DateFormatOptions {
    locale?: 'ru' | 'en' | 'it'
    capitalize?: boolean
}

export function formatDate(dateString: string | Date, options: DateFormatOptions = {}): string {
    const {
        locale = 'it',
        capitalize = false
    } = options;

    try {
        const date = new Date(dateString);

        // Проверка валидности даты
        if (isNaN(date.getTime())) {
            throw new Error('Invalid timestamp');
        }

        const months: Record<'ru' | 'en' | 'it', string[]> = {
            ru: [
                'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
            ],
            en: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            it: [
                'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
                'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
            ]
        };

        const day = date.getDate().toString().padStart(2, '0');
        let month = months[locale][date.getMonth()];
        
        if (capitalize) {
            month = month.charAt(0).toUpperCase() + month.slice(1);
        }
        
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date';
    }
}