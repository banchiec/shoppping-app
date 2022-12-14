import * as CONSTS from "./consts";

export function getUserToken() {
  return localStorage.getItem(CONSTS.ACCESS_TOKEN);
}

export function setUserToken(value) {
  return localStorage.setItem(CONSTS.ACCESS_TOKEN, value);
}

export function removeUserToken() {
  return localStorage.removeItem(CONSTS.ACCESS_TOKEN);
}


export function getUserCurrent() {
  return localStorage.getItem(JSON.parse( CONSTS.CURRENT_USER);
}

export function setUserCurrent(value) {
  return localStorage.setItem(CONSTS.CURRENT_USER, value);
}



export function removeUserCurrent() {
  return localStorage.removeItem(CONSTS.CURRENT_USER);
}