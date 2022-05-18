import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string): string {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

interface grey_type {
  [key: number]: string;
}
const grey: grey_type = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

export interface primary_type {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}
const primary: primary_type = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff'
};
const secondary: primary_type = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff'
};
const info: primary_type = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff'
};
const success: primary_type = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: grey[800]
};
const warning: primary_type = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: grey[800]
};
const error: primary_type = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff'
};

export type gradients_type = {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
};

const gradients: gradients_type = {
  primary: createGradient(primary.light, primary.main),
  info: createGradient(info.light, info.main),
  success: createGradient(success.light, success.main),
  warning: createGradient(warning.light, warning.main),
  error: createGradient(error.light, error.main)
};
export type chart_colors_type = {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
};

const chart_colors: chart_colors_type = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

export interface action_type {
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
}

export interface common_type {
  common: { black: string; white: string };
  primary: primary_type;
  secondary: primary_type;
  info: primary_type;
  success: primary_type;
  warning: primary_type;
  error: primary_type;
  grey: grey_type;
  gradients: gradients_type;
  divider: string;
  chart: chart_colors_type;
  action: action_type;
}

const common: common_type = {
  common: { black: '#000', white: '#fff' },
  primary: { ...primary },
  secondary: { ...secondary },
  info: { ...info },
  success: { ...success },
  warning: { ...warning },
  error: { ...error },
  grey: grey,
  gradients: gradients,
  divider: grey[500_24],
  chart: chart_colors,
  action: {
    hover: grey[500_8],
    selected: grey[500_16],
    disabled: grey[500_80],
    disabledBackground: grey[500_24],
    focus: grey[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};
export interface palette_item_type {
  common: { black: string; white: string };
  primary: primary_type;
  secondary: primary_type;
  info: primary_type;
  success: primary_type;
  warning: primary_type;
  error: primary_type;
  grey: {
    [key: number]: string;
  };
  gradients: gradients_type;
  divider: string;
  chart: chart_colors_type;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
    neutral: string;
  };
  action: action_type & { active: string };
}
export interface palette_type {
  light: palette_item_type;
  dark: palette_item_type;
}

const palette: palette_type = {
  light: {
    ...common,
    text: { primary: grey[800], secondary: grey[600], disabled: grey[500] },
    background: { paper: '#fff', default: '#fff', neutral: grey[200] },
    action: { active: grey[600], ...common.action }
  },
  dark: {
    ...common,
    text: { primary: '#fff', secondary: grey[500], disabled: grey[600] },
    background: { paper: grey[800], default: grey[900], neutral: grey[500_16] },
    action: { active: grey[500], ...common.action }
  }
};

export default palette;
