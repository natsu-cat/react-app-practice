import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Reducer, State } from 'reducer'
import thunk from 'redux-thunk'

export type AppState = {
  state: State
}

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
}
declare const window: ExtendedWindow

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers<AppState>({
    state: Reducer,
  }),
  storeEnhancers(applyMiddleware(thunk)),
)

export default store
