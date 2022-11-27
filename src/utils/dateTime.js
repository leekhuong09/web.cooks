export const formatDate = date =>
  new Intl.DateTimeFormat('vi', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(Date.parse(date));

export const formatDuration = date =>
  new Intl.DateTimeFormat('vi', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(Date.parse(date));
