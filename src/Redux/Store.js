import { createStore } from 'redux'
import reducers from './Reducer'
import state from './State'

export default createStore(reducers, state)