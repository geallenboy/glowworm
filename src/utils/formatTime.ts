import { format, formatDistanceToNow, getTime } from 'date-fns';
import { zhCN } from 'date-fns/locale';
type dateType = string | number | Date;

export function fDate(date: dateType) {
  return format(new Date(date), 'dd MMMM yyyy', {
    locale: zhCN
  });
}

export function fDateTime(date: dateType) {
  return format(new Date(date), 'dd MMM yyyy HH:mm', {
    locale: zhCN
  });
}

export function fTimestamp(date: dateType) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date: dateType) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p', {
    locale: zhCN
  });
}

export function fToNow(date: dateType) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: zhCN
  });
}
