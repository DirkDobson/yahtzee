import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'

const enhancers = compose(

)

const store = createStore(rootReducer, {}, )

export default store
