import actionTypes from "../../constants/constant";

const openSidebar=()=>{
    return{
        type: actionTypes.OPEN_SIDEBAR,
        // payload: null
    }
}

const closeSidebar=()=>{
    return{
        type: actionTypes.CLOSE_SIDEBAR,
        // payload: null
    }
}

const toggleSidebar=()=>{
    return{
        type: actionTypes.TOGGLE_SIDEBAR,
        // payload: null
    }
}

const toggleRememberMe=()=>{
    return{
        type: actionTypes.TOGGLE_REMEMBER_ME,
    }
}

const currentRememberMe=()=>{
    return{
        type: actionTypes.CURRENT_REMEMBER_ME,
    }
}

const toggleUpdateForm=()=>{
    return{
        type: actionTypes.TOGGLE_UPDATE_FORM,
    }
}

const toggleCreateForm=()=>{
    return{
        type: actionTypes.TOGGLE_CREATE_FORM
    }
}
const viewActions={
    openSidebar,
    closeSidebar,
    toggleSidebar,
    toggleRememberMe,
    currentRememberMe,
    toggleUpdateForm,
    toggleCreateForm
}
export default viewActions;