export function createElement(tagName, attributes, ...children) {
  const element = document.createElement(tagName);

  Object.entries(attributes || {}).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
}

export function render(element, container) {
  container.appendChild(element);
}
