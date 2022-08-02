import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {
    weather: null,
    unit: "C",
    city: "Kolkata",
    country: "IN",
    isDark: false,
    geoCoords: {
      lon: 88.3639,
      lat: 22.5726,
    },
}

const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store