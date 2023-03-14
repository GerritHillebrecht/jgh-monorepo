interface ElementAttributes {
  tagName: keyof HTMLElementTagNameMap;
  innerHTML: string;
  attributes?: any;
}

export function createHtmlElement(
  tagname: keyof HTMLElementTagNameMap,
  innerHTML: string,
  attributes?: any
): HTMLElement {
  const element = document.createElement(tagname);
  element.innerHTML = innerHTML;

  if (!attributes) return element;

  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key])
  );
  return element;
}
