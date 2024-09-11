export const dateTimeToStr = value => {
  return value ? new Date(value).toLocaleString() : value;
};

export const dateTimeToUnix = value => {
  const date = new Date(value);
  const milliseconds = date.getTime();
  return Math.floor(milliseconds / 1000);
};
