import { Container } from '@mui/material';
import { paramCase } from 'change-case';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import useSettings from '@/hooks/useSettings';
import { getProducts } from '@/redux/slices/product';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import NewForm from './modules/NewForm';

export default function ProductCreate() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { name } = useParams();
  const { products } = useSelector((state) => state.product);
  const isEdit = pathname.includes('edit');
  const currentProduct = products.find((product) => paramCase(product.name) === name);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Page title="Ecommerce: Create a new product | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new product' : 'Edit product'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: !isEdit ? 'New product' : name }
          ]}
        />

        <NewForm isEdit={isEdit} currentProduct={currentProduct} />
      </Container>
    </Page>
  );
}
