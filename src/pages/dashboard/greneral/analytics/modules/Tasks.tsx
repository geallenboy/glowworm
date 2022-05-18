import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
import editFill from '@iconify/icons-eva/edit-fill';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import shareFill from '@iconify/icons-eva/share-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import { Icon } from '@iconify/react';
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useRef, useState } from 'react';

import { MIconButton } from '@/components/@material-extend';

const TASKS = [
  'Create FireStone Logo',
  'Add SCSS and JS files if required',
  'Stakeholder Meeting',
  'Scoping & Estimations',
  'Sprint Showcase'
];

function MoreMenuButton() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton ref={anchorRef} size="large" onClick={handleOpen}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </MIconButton>

      <Menu
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>
          <Icon icon={checkmarkCircle2Fill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            标记完成
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon icon={editFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            编辑
          </Typography>
        </MenuItem>
        <MenuItem>
          <Icon icon={shareFill} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            分享
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ color: 'error.main' }}>
          <Icon icon={trash2Outline} width={20} height={20} />
          <Typography variant="body2" sx={{ ml: 2 }}>
            删除
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: 'text.disabled',
                textDecoration: 'line-through'
              })
            }}
          >
            {task}
          </Typography>
        }
      />
      <MoreMenuButton />
    </Stack>
  );
}

export default function Tasks() {
  const formik = useFormik({
    initialValues: {
      checked: [TASKS[2]]
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const { values, handleSubmit } = formik;

  return (
    <Card>
      <CardHeader title="任务" />
      <Box sx={{ px: 3, py: 1 }}>
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {TASKS.map((task) => (
              <TaskItem
                key={task}
                task={task}
                formik={formik}
                checked={values.checked.includes(task)}
              />
            ))}
          </Form>
        </FormikProvider>
      </Box>
    </Card>
  );
}
