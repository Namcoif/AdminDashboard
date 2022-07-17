import { useDispatch } from 'react-redux';
import actionTypes from './../../constants/constant';

const initState = {
    isOpenSideBar: true,
    isRememberMe: false,
    isOpenFormUpdateGroup: false,
    isOpenFormCreateGroup: false,

}

const viewReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_SIDEBAR:

            return {
                ...state,
                isOpenSideBar: true
            }
        case actionTypes.CLOSE_SIDEBAR:

            return {
                ...state,
                isOpenSideBar: false
            }
        case actionTypes.TOGGLE_SIDEBAR:

            return {
                ...state,
                isOpenSideBar: !state.isOpenSideBar
            }

        case actionTypes.TOGGLE_REMEMBER_ME:
            return {
                ...state,
                isRememberMe: !state.isRememberMe
            }
        case actionTypes.CURRENT_REMEMBER_ME:
            return {
                ...state,
                isRememberMe: state.isRememberMe
            }

        case actionTypes.TOGGLE_UPDATE_FORM:
            return {
                ...state,
                isOpenFormUpdateGroup: !state.isOpenFormUpdateGroup
            }

        case actionTypes.TOGGLE_CREATE_FORM:
            return {
                ...state,
                isOpenFormCreateGroup: !state.isOpenFormCreateGroup
            }
        
        default:
            return state;
    }
}

export default viewReducer;