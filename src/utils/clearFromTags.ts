export function clearFromTags (string: string): string {
  const clearFromTagsRgx = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
  return string.replace(clearFromTagsRgx, "")
}