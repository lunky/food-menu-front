export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const LOGIN = 'LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'


export function addToBasket(item) {
    return {type: ADD_TO_BASKET, item }
}

export function beginLogin() {
  return { type: LOGIN }
}

export function errorLogin(errorMsg) {
  return { type: ERROR_LOGIN, error: 'Login Failed! ' + errorMsg }
}

export function successLogin(jwt) {
  return { type: SUCCESS_LOGIN, jwt }
}

export function fetchLogin(userCreds) {
  return function(dispatch) {
    dispatch(beginLogin())

    const headers = new Headers({ 'Content-Type': 'application/json' })

    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers,
        body: JSON.stringify(userCreds)
      })
      .then(response =>  {
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .then(json => dispatch(successLogin(json)))
      .catch(error => dispatch(errorLogin(error)))
  }
}