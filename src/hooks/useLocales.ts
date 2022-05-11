import { enUS, zhCN } from '@mui/material/locale';
import { useTranslation } from 'react-i18next';

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/static/icons/ic_flag_us.svg'
  },
  {
    label: 'CHINA',
    value: 'zh',
    systemValue: zhCN,
    icon: '/static/icons/ic_flag_cn.svg'
  }
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang: any) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS
  };
}
