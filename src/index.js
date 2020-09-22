import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import App from './components/App'
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
