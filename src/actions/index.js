export const increment = () => {
  return {
    type: 'INCREMENT'
  };
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
}

export const looginChange = () => {
  return {
    type: 'SING-IN'
  };
}

export const counterMulitply = (stateVar) => {
  return {
    type: 'COUNTER_MULTIPLY',
    payload: {text: stateVar}
  }
}

export const changeUsername = (username) => {
  return {
    type: 'CHANGE_USERNAME',
    payload: {username}
  }
}
