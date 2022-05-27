import closeFill from '@iconify/icons-eva/close-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import { Box, Button, DialogActions, IconButton, Stack, Tooltip } from '@mui/material';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';

import { DialogAnimate } from '@/components/animate';

import PDF from './PDF';

export default function Toolbar({ invoice }: any) {
  const [openPDF, setOpenPDF] = useState(false);

  const handleOpenPreview = () => {
    setOpenPDF(true);
  };

  const handleClosePreview = () => {
    setOpenPDF(false);
  };

  return (
    <>
      <Stack mb={5} direction="row" justifyContent="flex-end" spacing={1.5}>
        <Button color="error" size="small" variant="contained" endIcon={<Icon icon={shareFill} />}>
          分享
        </Button>

        <Button
          color="info"
          size="small"
          variant="contained"
          onClick={handleOpenPreview}
          endIcon={<Icon icon={eyeFill} />}
          sx={{ mx: 1 }}
        >
          预览
        </Button>

        <PDFDownloadLink
          document={<PDF invoice={invoice} />}
          fileName={`INVOICE-${invoice.id}`}
          style={{ textDecoration: 'none' }}
        >
          {({ loading }) => (
            <LoadingButton
              size="small"
              loading={loading}
              variant="contained"
              loadingPosition="end"
              endIcon={<Icon icon={downloadFill} />}
            >
              下载
            </LoadingButton>
          )}
        </PDFDownloadLink>
      </Stack>

      <DialogAnimate fullScreen open={openPDF}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: '12px !important',
              boxShadow: (theme) => theme.customShadows.z8
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={handleClosePreview}>
                <Icon icon={closeFill} />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              <PDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </DialogAnimate>
    </>
  );
}
