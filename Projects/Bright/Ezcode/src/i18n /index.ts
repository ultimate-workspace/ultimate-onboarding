import 'react-i18next';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'dayjs/locale/en';

//English
import common from './en/common.json';
//Arabic
import common_ar from './ar/common.json';
//Russian
import common_ru from './ru/common.json';
//Vietnamese
import common_vi from './vi/common.json';
//Japanese
import common_ja from './ja/common.json';

export const defaultNS = 'common';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
    };
  }
}
const persistLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem('language', language);
  } catch (e) {
    console.error(e);
  }
};

const retrieveLanguage = async (): Promise<string> => {
  try {
    const language = await AsyncStorage.getItem('language');
    return language || 'en' || 'ar' || 'ru' || 'vi' || 'ja';
  } catch (e) {
    console.error(e);
    return 'en';
  }
};

export const resources = {
  en: {
    common: common,
  },
  ar: {
    common: common_ar,
  },
  vi: {
    common: common_vi,
  },
  ru: {
    common: common_ru,
  },
  ja: {
    common: common_ja,
  },
} as const;

const initCallback = async () => {
  const language = await retrieveLanguage();
  i18n.changeLanguage(language);
};

i18n.use(initReactI18next).init(
  {
    compatibilityJSON: 'v3',
    resources,
    defaultNS,
    fallbackLng: ['en', 'ar', 'ru', 'vi', 'ja'],
    nsSeparator: ':',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    load: 'languageOnly',
  },
  initCallback,
);

export const changeLanguage = async (language: string) => {
  persistLanguage(language);
  i18n.changeLanguage(language);
};

export default i18n;
