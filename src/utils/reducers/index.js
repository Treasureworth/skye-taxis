import {combineReducers} from 'redux';
import menuReducer from './menuReducer'


const rootReducer = combineReducers({
  mobileMenuToggle: menuReducer
})

export default rootReducer;
  
  