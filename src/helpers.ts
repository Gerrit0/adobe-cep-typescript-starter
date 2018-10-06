export function onClick(selector: string, listener: EventListenerOrEventListenerObject) {
  // ! is used to assert that querySelector did not return null
  document.querySelector(selector)!.addEventListener('click', listener)
}
