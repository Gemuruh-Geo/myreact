import {createStore} from 'redux'
import {rootReducer} from '../../src/reducers/index.js'
const store = createStore(rootReducer)

export default store;