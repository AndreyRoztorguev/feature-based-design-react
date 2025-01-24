export function formatDate(
  date: Date | string | number,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {},
): string {
  const parsedDate =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;

  if (isNaN(parsedDate.getTime())) {
    console.error('Invalid date provided to formatDate.');
    return '';
  }

  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(parsedDate);
}
