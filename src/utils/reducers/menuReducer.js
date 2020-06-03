import * as actionTypes from '../constants/action-types';


const initialState = {
    mobileMenuToggle: false
  };
  
  const menuReducer = (state = initialState, action) => {

    switch (action.type) { 

      case actionTypes.OPEN_MOBILE_MENU:
        
          return { 
            ...state,
            mobileMenuToggle: state.mobileMenuToggle ? false: true
          }
        break;
    
      default:
        return state;
        break;
    }
  };
  
  export default menuReducer;