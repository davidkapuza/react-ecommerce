export default function capitalize (str: string): string {
  return  str.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase())
}