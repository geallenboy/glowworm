import { useEffect, useState } from 'react';

export type defaultType = {
  themeMode: string;
  themeDirection: string;
  themeColor: string;
  themeStretch: boolean;
};

export default function useLocalStorage(key: string, defaultValue: defaultType) {
  const [value, setValue] = useState((): any => {
    const storeValue = localStorage.getItem('key');
    return storeValue === null ? defaultValue : JSON.parse(storeValue);
  });

  useEffect(() => {
    const listener = (e: any) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);
  const setValueInLocalStorage = (newValue: any) => {
    setValue((currentValue: string) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
