import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationRU from "./locales/ru/translation.json"

// the translations
const resources = {
    en: {
        translation: translationEN,
    },

    ru: {
        translation: translationRU,
    },
}

i18n.use(detector)
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en", // use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
