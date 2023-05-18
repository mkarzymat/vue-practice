import { createI18n } from "vue-i18n";
import en from './en.json'
import ru from './ru.json'

export default createI18n({
    locale: 'ru',
    fallbackLocale: 'en ',
    legacy: false,
    messages: { en,ru }
})