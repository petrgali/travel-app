const getCookie = (name) => (`; ${document.cookie}`).split(`; ${name}=`).pop().split(';').shift()

const expires = (ms) => (new Date(Date.now() + ms)).toUTCString()

export {
  getCookie,
  expires,
}
