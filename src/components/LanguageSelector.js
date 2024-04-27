import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';


function LanguageSelector() {
  const { t } = useTranslation(); // Access translation function

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Usa i18n desde el contexto
  };

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en"> {t('language.english')} </option>
        <option value="es"> {t('language.spanish')} </option>
      </select>
    </div>
  );
}

export default LanguageSelector;
