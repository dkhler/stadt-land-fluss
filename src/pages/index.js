import React from "react"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../components/App'
import rootReducer from '../reducers'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var initialState = {
    activeLetter: '-',
    letters: letters.map((letter, index) => ({
        id: index,
        name: letter,
        checked: false,
    }))
}

const store = createStore(rootReducer, initialState)

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)