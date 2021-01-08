import { combineReducers } from 'redux'

const options = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [...state, action.payload]
    case 'ADD_OPTIONS':
      return [...state, ...action.payload]
    case 'DELETE_OPTIONS':
      return []
    case 'INCREMENT': {
      return state.map((opt) => {
        if (opt.id === action.payload.id)
          return {
            id: action.payload.id,
            currentValue: opt.currentValue + 1,
            totalValue: opt.totalValue,
          }
        return opt
      })
    }
    case 'DECREMENT': {
      return state.map((opt) => {
        if (opt.id === action.payload.id)
          return {
            id: action.payload.id,
            currentValue: opt.currentValue - 1,
            totalValue: opt.totalValue,
          }
        return opt
      })
    }
    case 'CHANGE': {
      return state.map((opt) => {
        if (opt.id === action.payload.id)
          return {
            id: action.payload.id,
            currentValue: action.payload.value,
            totalValue: opt.totalValue,
          }
        return opt
      })
    }
    case 'END_ROUND': {
      return state.map((opt) => ({
        id: opt.id,
        currentValue: 0,
        totalValue: [...opt.totalValue, opt.currentValue],
      }))
    }
    default:
      return state
  }
}
const modalState = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return true
    case 'CLOSE_MODAL':
      return false
    default:
      return state
  }
}

export default combineReducers({
  options,
  openingModal: modalState,
})
