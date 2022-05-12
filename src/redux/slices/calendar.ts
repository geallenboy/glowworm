import { createSlice } from '@reduxjs/toolkit';
import { filter, map } from 'lodash';

import axios from '@/utils/axios';

const initialState = {
  isLoading: false,
  error: false,
  events: [],
  isOpenModal: false,
  selectedEventId: null,
  selectedRange: null
};

const slice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getEventsSuccess(state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },
    createEventSuccess(state: any, action) {
      const newEvent = action.payload;
      state.isLoading = false;
      state.events = [...state.events, newEvent];
    },
    updateEventSuccess(state: any, action) {
      const event = action.payload;
      const updateEvent = map(state.events, (_event) => {
        if (_event.id === event.id) {
          return event;
        }
        return _event;
      });

      state.isLoading = false;
      state.events = updateEvent;
    },
    deleteEventSuccess(state: any, action) {
      const { eventId } = action.payload;
      const deleteEvent = filter(state.events, (user: any) => user.id !== eventId);
      state.isLoading = false;
      state.events = deleteEvent;
    },
    selectEvent(state, action) {
      const eventId = action.payload;
      state.isOpenModal = true;
      state.selectedEventId = eventId;
    },
    selectRange(state: any, action) {
      const { start, end } = action.payload;
      state.isOpenModal = true;
      state.selectedRange = { start, end };
    },
    openModal(state) {
      state.isOpenModal = true;
    },

    closeModal(state) {
      state.isOpenModal = false;
      state.selectedEventId = null;
      state.selectedRange = null;
    }
  }
});

export default slice.reducer;

export const { openModal, closeModal, selectEvent } = slice.actions;
export function getEvents() {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/calendar/events');
      dispatch(slice.actions.getEventsSuccess(response.data.events));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createEvent(newEvent: any) {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/api/calendar/events/new', newEvent);
      dispatch(slice.actions.createEventSuccess(response.data.event));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateEvent(eventId: any, updateEvent: any) {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/api/calendar/events/update', {
        eventId,
        updateEvent
      });
      dispatch(slice.actions.updateEventSuccess(response.data.event));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function deleteEvent(eventId: any) {
  return async (dispatch: any) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post('/api/calendar/events/delete', { eventId });
      dispatch(slice.actions.deleteEventSuccess({ eventId }));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function selectRange(start: { getTime: () => any }, end: { getTime: () => any }) {
  return async (dispatch: any) => {
    dispatch(
      slice.actions.selectRange({
        start: start.getTime(),
        end: end.getTime()
      })
    );
  };
}
