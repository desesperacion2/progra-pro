import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <div className="mt-3">
      <h2>{t('welcome')}</h2>
      <p>{t('homeMessage')}</p>
    </div>
  );
}

export default Home;
