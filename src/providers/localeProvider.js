import spanish from "../translations/spanish";
import englishMessages from "ra-language-english";
import polyglotI18nProvider from "ra-i18n-polyglot";
import {resolveBrowserLocale} from "react-admin";

const messages = {
  en: englishMessages,
  es: spanish,
};

const localeProvider = polyglotI18nProvider(
  (locale) => (messages[locale] ? messages[locale] : messages.en),
  resolveBrowserLocale()
);

export default localeProvider;
