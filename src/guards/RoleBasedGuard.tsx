import { Alert, AlertTitle, Container } from '@mui/material';

const useCurrentRole = () => {
  const role = 'admin';
  return role;
};

export default function RoleBasedGuard({ accessibleRoles, children }: any) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>拒绝访问</AlertTitle>
          您没有访问此页面的权限
        </Alert>
      </Container>
    );
  }

  return <>{children}</>;
}
