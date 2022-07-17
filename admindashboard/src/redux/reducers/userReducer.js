import actionTypes from './../../constants/constant';
const initState = {
    isLoading: false,
    errorMessageRegister: '',
    errorMessageSignin: '',
    userToken: {},
    userInfo: {},
    listGroup: [],
    groupCurrent: {},
    isLogin: false
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.REGISTER_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessageRegister: action.payload
            }

        case actionTypes.SIGNIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // isLogin: true,
                userToken: action.payload
            }
        case actionTypes.SIGNIN_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessageSignin: action.payload
            }


        case actionTypes.GET_USER_INFO_REQUEST:
            return {
                ...state,
            }
        case actionTypes.GET_USER_INFO_SUCCESS:
            let useInfoTemp = action.payload
            return {
                ...state,
                isLoading: false,
                userInfo: useInfoTemp
            }
        case actionTypes.GET_USER_INFO_FAIL:
            return {
                ...state,
            }

        case actionTypes.GET_LIST_GROUP_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case actionTypes.GET_LIST_GROUP_SUCCESS:
            let listGroupGet = action.payload
            return {
                ...state,
                isLoading: false,
                listGroup: listGroupGet

            }
        case actionTypes.GET_LIST_GROUP_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        case actionTypes.UPDATE_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,


            }
        case actionTypes.UPDATE_USER_FAIL:
            return {
                ...state,
                isLoading: false,
            }

        case actionTypes.GET_GROUP_CURRENT:
            return {
                ...state,
                groupCurrent: action.payload
            }

        case actionTypes.UPDATE_GROUP:
            return {
                ...state
            }
        case actionTypes.DELETE_GROUP_SUCCESS:
            return {
                ...state
            }

        case action.CREATE_GROUP_SUCCESS:
            return {
                ...state
            }

            
        default:
            return state;
    }
}


export default userReducer