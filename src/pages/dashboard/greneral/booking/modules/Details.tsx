import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import printerFill from '@iconify/icons-eva/printer-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import { Icon } from '@iconify/react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { sentenceCase } from 'change-case';
import { format } from 'date-fns';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { MIconButton } from '@/components/@material-extend';
import Label from '@/components/Label';
import Scrollbar from '@/components/Scrollbar';
import mockData from '@/utils/mock-data';

const MOCK_BOOKINGS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  name: mockData.name.fullName(index),
  avatar: mockData.image.avatar(index),
  checkIn: mockData.time(index),
  checkOut: mockData.time(index),
  phoneNumber: mockData.phoneNumber(index),
  status: (index === 1 && 'pending') || (index === 3 && 'un_paid') || 'paid',
  roomType: (index === 1 && 'double') || (index === 3 && 'king') || 'single'
}));

function MoreMenuButton({ onDownload, onPrint, onShare, onDelete }: any) {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
          <Icon icon={moreVerticalFill} width={20} height={20} />
        </MIconButton>
      </>

      <Menu
        open={open}
        anchorEl={menuRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={onDownload}>
          <Icon icon={downloadFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            下载
          </Typography>
        </MenuItem>
        <MenuItem onClick={onPrint}>
          <Icon icon={printerFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            打印
          </Typography>
        </MenuItem>
        <MenuItem onClick={onShare}>
          <Icon icon={shareFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            分享
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
          <Icon icon={trash2Outline} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            删除
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function Details() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};

  return (
    <>
      <Card>
        <CardHeader title="预订详细信息" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 240 }}>布克</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>登记入住</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>退出</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>状态</TableCell>
                  <TableCell sx={{ minWidth: 200 }}>手机号</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>房间类型</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {MOCK_BOOKINGS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={row.name} src={row.avatar} />
                        <Typography variant="subtitle2">{row.name}</Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>{format(new Date(row.checkIn), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{format(new Date(row.checkOut), 'dd MMM yyyy')}</TableCell>

                    <TableCell>
                      <Label
                        variant={isLight ? 'ghost' : 'filled'}
                        color={
                          (row.status === 'paid' && 'success') ||
                          (row.status === 'pending' && 'warning') ||
                          'error'
                        }
                      >
                        {sentenceCase(row.status)}
                      </Label>
                    </TableCell>

                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell sx={{ textTransform: 'capitalize' }}>{row.roomType}</TableCell>

                    <TableCell align="right">
                      <MoreMenuButton
                        onDownload={handleClickDownload}
                        onPrint={handleClickPrint}
                        onShare={handleClickShare}
                        onDelete={handleClickDelete}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button
            to="#"
            size="small"
            color="inherit"
            component={RouterLink}
            endIcon={<Icon icon={arrowIosForwardFill} />}
          >
            显示所有
          </Button>
        </Box>
      </Card>
    </>
  );
}
