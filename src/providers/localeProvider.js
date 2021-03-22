import spanish from "../translations/spanish";
import english from "../translations/english";
import polyglotI18nProvider from "ra-i18n-polyglot";
import {resolveBrowserLocale} from "react-admin";

const messages = {
  en: english,
  es: spanish,
};

const localeProvider = polyglotI18nProvider(
  (locale) => (messages[locale] ? messages[locale] : messages.en),
  resolveBrowserLocale()
);

export default localeProvider;
