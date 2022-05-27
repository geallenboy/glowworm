import { createSlice } from '@reduxjs/toolkit';

import axios from '@/utils/axios';

function objFromArray(array: any[], key = 'id') {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

const initialState = {
  isLoading: false,
  error: false,
  mails: { byId: {}, allIds: [] },
  labels: []
};

const slice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getLabelsSuccess(state, action) {
      state.isLoading = false;
      state.labels = action.payload;
    },
    getMailsSuccess(state: any, action) {
      const mails = action.payload;

      state.isLoading = false;
      state.mails.byId = objFromArray(mails);
      state.mails.allIds = Object.keys(state.mails.byId);
    },
    getMailSuccess(state: any, action) {
      const mail = action.payload;

      state.mails.byId[mail.id] = mail;
      if (!state.mails.allIds.includes(mail.id)) {
        state.mails.allIds.push(mail.id);
      }
    }
  }
});
export default slice.reducer;

export function getLabels() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/mail/labels');
      dispatch(slice.actions.getLabelsSuccess(response.data.labels));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMails(params: any) {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/mail/mails', { params });
      dispatch(slice.actions.getMailsSuccess(response.data.mails));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMail(mailId: any) {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/mail/mail', {
        params: { mailId }
      });
      dispatch(slice.actions.getMailSuccess(response.data.mail));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
