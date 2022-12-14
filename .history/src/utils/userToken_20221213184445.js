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
  return localStorage.getItem(CONSTS.U_TOKEN);
}

export function setUserCurrent(value) {
  return localStorage.setItem(CONSTS.ACCESS_TOKEN, value);
}



export function removeUserCurrent() {
  return localStorage.removeItem(CONSTS.ACCESS_TOKEN);
}