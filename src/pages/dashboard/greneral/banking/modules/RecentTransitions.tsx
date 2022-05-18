import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import bookFill from '@iconify/icons-eva/book-fill';
import diagonalArrowLeftDownFill from '@iconify/icons-eva/diagonal-arrow-left-down-fill';
import diagonalArrowRightUpFill from '@iconify/icons-eva/diagonal-arrow-right-up-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
import heartFill from '@iconify/icons-eva/heart-fill';
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
import { fCurrency } from '@/utils/formatNumber';

const RECENT_TRANSITIONS = [
  {
    id: '1b0fc8a1-cd68-41f6-899e-d0e0676c90bb',
    name: 'Dr. Alize Donnelly',
    avatar: '/static/mock-images/avatars/avatar_8.jpg',
    type: 'Income',
    message: 'Receive money from',
    category: 'Annette Black',
    date: 1627556358365,
    status: 'in_progress',
    amount: 811.45
  },
  {
    id: 'b7846c12-662c-465a-8e81-8a35df7531ef',
    name: 'Santino Gottlieb',
    avatar: '/static/mock-images/avatars/avatar_2.jpg',
    type: 'Expenses',
    message: 'Payment for',
    category: 'Courtney Henry',
    date: 1627556329038,
    status: 'completed',
    amount: 436.03
  },
  {
    id: '336c73d5-3d0e-42e2-9218-ff671dfa28ee',
    name: 'Camilla Gusikowski',
    avatar: '/static/mock-images/avatars/avatar_3.jpg',
    type: 'Receive',
    message: 'Payment for',
    category: 'Theresa Webb',
    date: 1627556339677,
    status: 'failed',
    amount: 82.26
  },
  {
    id: '2cfd360a-f678-4d47-9df0-cef936231315',
    name: null,
    avatar: null,
    type: 'Expenses',
    message: 'Payment for',
    category: 'Beauty & Health',
    date: 1627547330510,
    status: 'completed',
    amount: 480.73
  },
  {
    id: '6b61fa9a-7ce4-4f45-a62a-b711de432b28',
    name: null,
    avatar: null,
    type: 'Expenses',
    message: 'Payment for',
    category: 'Books',
    date: 1627556347676,
    status: 'in_progress',
    amount: 11.45
  }
];

function AvatarIcon({ icon }) {
  return (
    <Avatar
      sx={{
        width: 48,
        height: 48,
        color: 'text.secondary',
        bgcolor: 'background.neutral'
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Avatar>
  );
}

function renderAvatar(transitions) {
  if (transitions.category === 'Books') {
    return <AvatarIcon icon={bookFill} />;
  }
  if (transitions.category === 'Beauty & Health') {
    return <AvatarIcon icon={heartFill} />;
  }
  return transitions.avatar ? (
    <Avatar
      alt={transitions.category}
      src={transitions.avatar}
      sx={{ width: 48, height: 48, boxShadow: (theme) => theme.customShadows.z8 }}
    />
  ) : null;
}

function MoreMenuButton({ onDownload, onPrint, onShare, onDelete }) {
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

export default function RecentTransitions() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const handleClickDownload = () => {};
  const handleClickPrint = () => {};
  const handleClickShare = () => {};
  const handleClickDelete = () => {};

  return (
    <>
      <Card>
        <CardHeader title="最近的转变" sx={{ mb: 3 }} />
        <Scrollbar>
          <TableContainer sx={{ minWidth: 720 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>描述</TableCell>
                  <TableCell>日期</TableCell>
                  <TableCell>数量</TableCell>
                  <TableCell>状态</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {RECENT_TRANSITIONS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ position: 'relative' }}>
                          {renderAvatar(row)}
                          <Box
                            sx={{
                              right: 0,
                              bottom: 0,
                              width: 18,
                              height: 18,
                              display: 'flex',
                              borderRadius: '50%',
                              position: 'absolute',
                              alignItems: 'center',
                              color: 'common.white',
                              bgcolor: 'error.main',
                              justifyContent: 'center',
                              ...(row.type === 'Income' && {
                                bgcolor: 'success.main'
                              })
                            }}
                          >
                            <Icon
                              icon={
                                row.type === 'Income'
                                  ? diagonalArrowLeftDownFill
                                  : diagonalArrowRightUpFill
                              }
                              width={16}
                              height={16}
                            />
                          </Box>
                        </Box>
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.message}
                          </Typography>
                          <Typography variant="subtitle2"> {row.category}</Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2">
                        {format(new Date(row.date), 'dd MMM yyyy')}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {format(new Date(row.date), 'p')}
                      </Typography>
                    </TableCell>

                    <TableCell>{fCurrency(row.amount)}</TableCell>

                    <TableCell>
                      <Label
                        variant={isLight ? 'ghost' : 'filled'}
                        color={
                          (row.status === 'completed' && 'success') ||
                          (row.status === 'in_progress' && 'warning') ||
                          'error'
                        }
                      >
                        {sentenceCase(row.status)}
                      </Label>
                    </TableCell>

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
