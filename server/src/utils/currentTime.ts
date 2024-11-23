import dayjs from 'dayjs';

export function getCurrentTime() {
  return dayjs();
}

export function getCurrentDay() {
  const date = getCurrentTime();

  return date.startOf('day');
}
