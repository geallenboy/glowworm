export interface breakpoints_type {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const breakpoints: breakpoints_type = {
  values: {
    xs: 0,
    sm: 600,
    md: 900, // OLD 960
    lg: 1200, // OLD 1280
    xl: 1536 // OLD 1920
  }
};

export default breakpoints;
