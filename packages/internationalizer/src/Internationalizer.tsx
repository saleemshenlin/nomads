import React, { useState, useEffect, ReactNode } from 'react';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation as useTranslationHook, initReactI18next } from 'react-i18next';

export const useTranslation = useTranslationHook;

export const initialize = (config: object) => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(config);
  return i18n;
};

const Internationalizer = ({
  config = {
    fallbackLng: 'en',
    debug: false,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    nonExplicitWhitelist: true,
  },
  children,
}: {
  config?: object;
  children: ReactNode;
}) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initialize(config);
  }, []);

  i18n.on('initialized', () => setIsInitialized(true));

  if (isInitialized) {
    return <>{children}</>;
  }
  return null;
};

export default Internationalizer;
