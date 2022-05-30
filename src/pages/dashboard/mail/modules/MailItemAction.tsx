import archiveFill from '@iconify/icons-eva/archive-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundMarkEmailRead from '@iconify/icons-ic/round-mark-email-read';
import { Icon } from '@iconify/react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const RootStyle = styled('div')(({ theme }: any) => ({
  height: 40,
  zIndex: 99,
  opacity: 0,
  margin: 'auto',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  top: theme.spacing(1),
  right: theme.spacing(1),
  bottom: theme.spacing(1),
  justifyContent: 'center',
  padding: theme.spacing(0, 0.75),
  boxShadow: theme.customShadows.z12,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  transition: theme.transitions.create('opacity')
}));

export default function MailItemAction({
  handleArchive,
  handleDelete,
  handleMarkRead,
  handleHidden,
  ...other
}: any) {
  const MAIL_ACTIONS: any = [
    {
      name: '档案文件',
      icon: archiveFill,
      action: handleArchive
    },
    {
      name: '删除',
      icon: trash2Fill,
      action: handleDelete
    },
    {
      name: '电子邮件标记为已读',
      icon: roundMarkEmailRead,
      action: handleMarkRead
    },
    {
      name: '隐藏电子邮件',
      icon: eyeOffFill,
      action: handleHidden
    }
  ];

  return (
    <RootStyle {...other}>
      {MAIL_ACTIONS.map((action: any) => (
        <Tooltip key={action.name} title={action.name}>
          <IconButton
            size="small"
            onClick={action.action}
            sx={{
              mx: 0.75,
              '&:hover': {
                color: 'text.primary'
              }
            }}
          >
            <Icon icon={action.icon} width={24} height={24} />
          </IconButton>
        </Tooltip>
      ))}
    </RootStyle>
  );
}
