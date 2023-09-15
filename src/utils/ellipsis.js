export function truncateText(text, maxLength = -1, ellipsis = '...') {
  const words = text
    .trim()
    .replace(/[ ]{2,}/gi, ' ')
    .replace(/\n /, '\n')
    .split(' ');
  return maxLength !== -1 && words.length > maxLength
    ? `${words.slice(0, maxLength).join(' ')}${ellipsis}`
    : text;
}
