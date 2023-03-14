export function parseDom(rawDom: string) {
  const parser = new DOMParser();
  return parser.parseFromString(rawDom, 'text/html').body;
}
