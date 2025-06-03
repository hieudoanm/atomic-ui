import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export enum Language {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  German = 'de',
  Italian = 'it',
  Portuguese = 'pt',
  Russian = 'ru',
  ChineseSimplified = 'zh',
  ChineseTraditional = 'zh-TW',
  Japanese = 'ja',
  Korean = 'ko',
  Arabic = 'ar',
  Hindi = 'hi',
  Vietnamese = 'vi',
  Dutch = 'nl',
  Greek = 'el',
  Turkish = 'tr',
  Polish = 'pl',
  Hebrew = 'he',
  Swedish = 'sv',
  Danish = 'da',
  Norwegian = 'no',
  Finnish = 'fi',
  Thai = 'th',
  Indonesian = 'id',
  Malay = 'ms',
  Czech = 'cs',
  Hungarian = 'hu',
  Romanian = 'ro',
  Ukrainian = 'uk',
  Persian = 'fa',
}

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(Language.English);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
