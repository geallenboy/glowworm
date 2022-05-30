import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '@/hooks/useAuth';
import Login from '@/pages/authentication/login';

export default function AuthGuard({ children }: any) {
  const { isAuthenticated } = useAuth();
  const { pathname }: any = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
