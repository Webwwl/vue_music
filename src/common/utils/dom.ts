export function getElData(el: HTMLElement, name: string, val?: any) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}