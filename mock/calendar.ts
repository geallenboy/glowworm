import { add, set, sub } from 'date-fns';
import { assign, map, reject } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { MockMethod } from 'vite-plugin-mock';

import mockData from '../src/utils/mock-data';
import { resultSuccess } from './_util';

const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#94D82D', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E' // theme.palette.error.darker
];

const setColorAndTime = (index: number) => {
  if (index === 0)
    return {
      textColor: COLOR_OPTIONS[0],
      start: sub(new Date(), { days: 6, hours: 6, minutes: 30 }),
      end: sub(new Date(), { days: 6, hours: 4, minutes: 30 })
    };
  if (index === 1)
    return {
      textColor: COLOR_OPTIONS[1],
      start: add(new Date(), { days: 2, hours: 0, minutes: 0 }),
      end: add(new Date(), { days: 2, hours: 1, minutes: 0 })
    };
  if (index === 2)
    return {
      textColor: COLOR_OPTIONS[2],
      start: add(new Date(), { days: 6, hours: 0, minutes: 15 }),
      end: add(new Date(), { days: 6, hours: 0, minutes: 20 })
    };
  if (index === 3)
    return {
      textColor: COLOR_OPTIONS[5],
      start: sub(new Date(), { days: 12, hours: 0, minutes: 45 }),
      end: sub(new Date(), { days: 12, hours: 0, minutes: 30 })
    };
  if (index === 4)
    return {
      textColor: COLOR_OPTIONS[5],
      start: add(new Date(), { days: 2, hours: 2, minutes: 30 }),
      end: add(new Date(), { days: 2, hours: 3, minutes: 30 })
    };
  if (index === 5)
    return {
      textColor: COLOR_OPTIONS[4],
      start: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
      end: sub(new Date(), { days: 3, hours: 3, minutes: 20 })
    };
  if (index === 6)
    return {
      textColor: COLOR_OPTIONS[0],
      start: set(new Date(), { hours: 10, minutes: 30 }),
      end: set(new Date(), { hours: 13, minutes: 30 })
    };
  if (index === 7)
    return {
      textColor: COLOR_OPTIONS[3],
      start: add(new Date(), { days: 2, hours: 3, minutes: 30 }),
      end: add(new Date(), { days: 2, hours: 4, minutes: 30 })
    };
  return {
    textColor: COLOR_OPTIONS[2],
    start: add(new Date(), { days: 2, hours: 3, minutes: 45 }),
    end: add(new Date(), { days: 2, hours: 4, minutes: 50 })
  };
};

let events = [...Array(9)].map((_, index) => ({
  id: uuidv4(),
  title: mockData.text.title(index),
  description: mockData.text.description(index),
  allDay: mockData.boolean(index),
  ...setColorAndTime(index)
}));
export default [
  {
    url: '/api/calendar/events/update',
    timeout: 5000,
    method: 'get',
    response: (params: any) => {
      const { eventId, updateEvent } = params.body;
      let event = null;
      events = map(events, (_event) => {
        if (_event.id === eventId) {
          assign(_event, { ...updateEvent });
          event = _event;
        }
        return _event;
      });

      return resultSuccess({ event });
    }
  },
  {
    url: '/api/calendar/events/delete',
    timeout: 5000,
    method: 'get',
    response: (params: any) => {
      const { eventId } = params.body;
      events = reject(events, { id: eventId });

      return resultSuccess({ eventId });
    }
  }
] as MockMethod[];
