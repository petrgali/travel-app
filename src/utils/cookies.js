const getCookie = (name) => (`; ${document.cookie}`).split(`; ${name}=`).pop().split(';').shift()

const deleteCookie = (name) => document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

const expires = (ms) => (new Date(Date.now() + ms)).toUTCString()

export {
  getCookie,
  deleteCookie,
  expires,
}
