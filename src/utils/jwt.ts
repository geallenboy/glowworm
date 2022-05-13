import jwtDecode from 'jwt-decode';

import axios from './axios';

const isValidToken = (accessToken: any) => {
  if (!accessToken) {
    return false;
  }
  console.log(accessToken, 3333, jwtDecode(accessToken));
  const decoded: any = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  console.log(decoded, 666);
  return decoded.exp > currentTime;
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
