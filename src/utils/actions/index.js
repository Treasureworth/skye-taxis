import * as actionTypes from '../constants/action-types'

export const openMobileMenu = () => async dispatch => {

    dispatch (
      { 
        type: actionTypes.OPEN_MOBILE_MENU
      })
  };