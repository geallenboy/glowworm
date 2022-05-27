import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { Box, Button, Divider, Drawer, List } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MHidden } from '@/components/@material-extend';
import Scrollbar from '@/components/Scrollbar';
import { useSelector } from '@/redux/store';

import MailSidebarItem from './MailSidebarItem';

export default function MailSidebar({ isOpenSidebar, onOpenCompose, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { labels } = useSelector((state) => state.mail);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const handleOpenCompose = () => {
    onCloseSidebar();
    onOpenCompose();
  };

  const renderContent = (
    <Scrollbar>
      <Box sx={{ p: 3 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Icon icon={plusFill} />}
          onClick={handleOpenCompose}
        >
          新建
        </Button>
      </Box>

      <Divider />

      <List disablePadding>
        {labels.map((label) => (
          <MailSidebarItem key={label.id} label={label} />
        ))}
      </List>
    </Scrollbar>
  );

  return (
    <>
      <MHidden width="mdUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: { width: 280 } }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="mdDown">
        <Drawer variant="permanent" PaperProps={{ sx: { width: 280, position: 'relative' } }}>
          {renderContent}
        </Drawer>
      </MHidden>
    </>
  );
}
