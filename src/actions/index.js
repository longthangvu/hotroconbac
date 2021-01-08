export const addOption = (id) => {
  return {
    type: 'ADD_OPTION',
    payload: {
      id,
      currentValue: 0,
      totalValue: [],
    },
  }
}
export const addOptions = (options) => {
  return {
    type: 'ADD_OPTIONS',
    payload: options,
  }
}
export const deleteOptions = () => {
  return {
    type: 'DELETE_OPTIONS',
  }
}
export const incrementValue = (id) => {
  return {
    type: 'INCREMENT',
    payload: {
      id,
    },
  }
}
export const changeValue = (id, value) => {
  return {
    type: 'CHANGE',
    payload: {
      id,
      value,
    },
  }
}
export const decrementValue = (id) => {
  return {
    type: 'DECREMENT',
    payload: {
      id,
    },
  }
}
export const endRound = () => {
  return {
    type: 'END_ROUND',
  }
}
export const openModal = () => {
  return {
    type: 'OPEN_MODAL',
  }
}
export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  }
}
