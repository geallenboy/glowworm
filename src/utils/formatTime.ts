import { format, formatDistanceToNow, getTime } from 'date-fns';

type dateType = string | number | Date;

export function fDate(date: dateType) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date: dateType) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date: dateType) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date: dateType) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date: dateType) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}
