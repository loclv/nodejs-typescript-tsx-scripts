export const startTime = new Date();

export const createReadableTime = (date: Date): string => {
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();
  let hour: number | string = date.getHours();
  let min: number | string = date.getMinutes();
  let sec: number | string = date.getSeconds();

  month = `${month < 10 ? '0' : ''}${month}`;
  day = `${day < 10 ? '0' : ''}${day}`;
  hour = `${hour < 10 ? '0' : ''}${hour}`;
  min = `${min < 10 ? '0' : ''}${min}`;
  sec = `${sec < 10 ? '0' : ''}${sec}`;

  const str = `${date.getFullYear()}-${month}-${day}-${hour}-${min}-${sec}`;

  return str;
};
