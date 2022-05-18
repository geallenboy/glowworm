import React, { createContext } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import palette from '@/theme/palette';

interface primary_color_type {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

const PRIMARY_COLOR: primary_color_type[] = [
  {
    name: 'default',
    ...palette.light.primary
  },
  {
    name: 'purple',
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#fff'
  },
  {
    name: 'cyan',
    lighter: '#D1FFFC',
    light: '#76F2FF',
    main: '#1CCAFF',
    dark: '#0E77B7',
    darker: '#053D7A',
    contrastText: palette.light.grey[800]
  },
  {
    name: 'blue',
    lighter: '#CCDFFF',
    light: '#6697FF',
    main: '#0045FF',
    dark: '#0027B7',
    darker: '#00137A',
    contrastText: '#fff'
  },
  {
    name: 'orange',
    lighter: '#FEF4D4',
    light: '#FED680',
    main: '#fda92d',
    dark: '#B66816',
    darker: '#793908',
    contrastText: palette.light.grey[800]
  },
  {
    name: 'red',
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#fff'
  }
];

function SetColor(themeColor: string) {
  let color;
  const DEFAULT = PRIMARY_COLOR[0];
  const PURPLE = PRIMARY_COLOR[1];
  const CYAN = PRIMARY_COLOR[2];
  const BLUE = PRIMARY_COLOR[3];
  const ORANGE = PRIMARY_COLOR[4];
  const RED = PRIMARY_COLOR[5];
  switch (themeColor) {
    case 'purple':
      color = PURPLE;
      break;
    case 'cyan':
      color = CYAN;
      break;
    case 'blue':
      color = BLUE;
      break;
    case 'orange':
      color = ORANGE;
      break;
    case 'red':
      color = RED;
      break;
    default:
      color = DEFAULT;
  }
  return color;
}

interface initialState_type {
  themeMode: string;
  themeDirection: string;
  themeColor: string;
  themeStretch: boolean;
  onChangeMode: () => void;
  onChangeDirection: () => void;
  onChangeColor: () => void;
  onToggleStretch: () => void;
  setColor: primary_color_type;
  colorOption: {
    name: string;
    value: string;
  }[];
}

const initialState: initialState_type = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColor: 'default',
  themeStretch: false,
  onChangeMode: () => {},
  onChangeDirection: () => {},
  onChangeColor: () => {},
  onToggleStretch: () => {},
  setColor: PRIMARY_COLOR[0],
  colorOption: []
};

const SettingsContext = createContext(initialState);

function SettingsProvider({ children }: any) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
    themeDirection: initialState.themeDirection,
    themeColor: initialState.themeColor,
    themeStretch: initialState.themeStretch
  });

  const onChangeMode = (event: { target: { value: any } }) => {
    setSettings({
      ...settings,
      themeMode: event.target.value
    });
  };

  const onChangeDirection = (event: { target: { value: any } }) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value
    });
  };

  const onChangeColor = (event: { target: { value: any } }) => {
    setSettings({
      ...settings,
      themeColor: event.target.value
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onChangeMode,
        onChangeDirection,
        onChangeColor,
        setColor: SetColor(settings.themeColor),
        colorOption: PRIMARY_COLOR.map((color) => ({
          name: color.name,
          value: color.main
        })),
        onToggleStretch
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };
