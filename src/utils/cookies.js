const getCookie = (name) => (`; ${document.cookie}`).split(`; ${name}=`).pop().split(';').shift()

const deleteCookie = (name) => document.cookie = `${name}=; Max-Age=0`;

const expires = (ms) => (new Date(Date.now() + ms)).toUTCString()

export {
  getCookie,
  deleteCookie,
  expires,
}
