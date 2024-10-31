export const bindEventOn = (eventName, callBack) => {
  window.addEventListener(eventName, callBack)
}

export const unBindEventOn = (eventName, callBack) => {
  window.removeEventListener(eventName, callBack)
}
