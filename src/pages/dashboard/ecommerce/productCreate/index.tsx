import { Container } from '@mui/material';
import { paramCase } from 'change-case';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
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
    <Page title={`创建商品 ${title_admin}`}>
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? '创建商品' : '编辑商品'}
          links={[
            { name: '管理', href: PATH_DASHBOARD.root },
            {
              name: '电子商务',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: !isEdit ? '新建商品' : name }
          ]}
        />

        <NewForm isEdit={isEdit} currentProduct={currentProduct} />
      </Container>
    </Page>
  );
}
