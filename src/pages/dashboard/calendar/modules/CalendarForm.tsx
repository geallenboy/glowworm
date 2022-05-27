import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import { Icon } from '@iconify/react';
import { LoadingButton, MobileDateTimePicker } from '@mui/lab';
import {
  Box,
  Button,
  DialogActions,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  TextField,
  Tooltip
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { merge } from 'lodash';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';

import ColorSinglePicker from '@/components/ColorSinglePicker';
import { createEvent, deleteEvent, updateEvent } from '@/redux/slices/calendar';
import { useDispatch } from '@/redux/store';

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#94D82D', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E' // theme.palette.error.darker
];

const getInitialValues = (event: any, range: any) => {
  const _event = {
    title: '',
    description: '',
    textColor: '#1890FF',
    allDay: false,
    start: range ? new Date(range.start) : new Date(),
    end: range ? new Date(range.end) : new Date()
  };

  if (event || range) {
    return merge({}, _event, event);
  }

  return _event;
};

export default function CalendarForm({ event, range, onCancel }: any) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch: any = useDispatch();
  const isCreating = !event;

  const EventSchema = Yup.object().shape({
    title: Yup.string().max(255).required('Title is required'),
    description: Yup.string().max(5000),
    end: Yup.date().when(
      'start',
      (start, schema) => start && schema.min(start, 'End date must be later than start date')
    ),
    start: Yup.date()
  });

  const formik = useFormik({
    initialValues: getInitialValues(event, range),
    validationSchema: EventSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const newEvent = {
          title: values.title,
          description: values.description,
          textColor: values.textColor,
          allDay: values.allDay,
          start: values.start,
          end: values.end
        };
        if (event) {
          dispatch(updateEvent(event.id, newEvent));
          enqueueSnackbar('Update event success', { variant: 'success' });
        } else {
          dispatch(createEvent(newEvent));
          enqueueSnackbar('Create event success', { variant: 'success' });
        }
        resetForm();
        onCancel();
        setSubmitting(false);
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { values, errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } =
    formik;

  const handleDelete = async () => {
    try {
      onCancel();
      dispatch(deleteEvent(event.id));
      enqueueSnackbar('Delete event success', { variant: 'success' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <TextField
            fullWidth
            label="Title"
            {...getFieldProps('title')}
            error={Boolean(touched.title && errors.title)}
            helperText={touched.title && errors.title}
          />

          <TextField
            fullWidth
            multiline
            maxRows={4}
            label="Description"
            {...getFieldProps('description')}
            error={Boolean(touched.description && errors.description)}
            helperText={touched.description && errors.description}
          />

          <FormControlLabel
            control={<Switch checked={values.allDay} {...getFieldProps('allDay')} />}
            label="All day"
          />

          <MobileDateTimePicker
            label="Start date"
            value={values.start}
            inputFormat="dd/MM/yyyy hh:mm a"
            onChange={(date) => setFieldValue('start', date)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />

          <MobileDateTimePicker
            label="End date"
            value={values.end}
            inputFormat="dd/MM/yyyy hh:mm a"
            onChange={(date) => setFieldValue('end', date)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={Boolean(touched.end && errors.end)}
                helperText={touched.end && errors.end}
                sx={{ mb: 3 }}
              />
            )}
          />

          <ColorSinglePicker {...getFieldProps('textColor')} colors={COLOR_OPTIONS} />
        </Stack>

        <DialogActions>
          {!isCreating && (
            <Tooltip title="Delete Event">
              <IconButton onClick={handleDelete}>
                <Icon icon={trash2Fill} width={20} height={20} />
              </IconButton>
            </Tooltip>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Button type="button" variant="outlined" color="inherit" onClick={onCancel}>
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
            loadingIndicator="Loading..."
          >
            Add
          </LoadingButton>
        </DialogActions>
      </Form>
    </FormikProvider>
  );
}
