import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

import reducers from './redux/reducers/initialState'
import middleware from './middleware'

export default createStore(
  combineReducers({
    ...reducers,
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
)