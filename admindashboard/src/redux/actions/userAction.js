import axios from "axios";
import actionTypes from './../../constants/constant';

const registerUser = (user) => async (dispatch) => {
    dispatch({
        type: actionTypes.REGISTER_USER_REQUEST
    })
    try {
        const response = await axios.post('api/auth/signup', {
            ...user
        })
        dispatch({
            type: actionTypes.REGISTER_USER_SUCCESS,
            payload: response.data
        })
        console.log(response);

        window.location.replace('/sign-in')
    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_USER_FAIL,
            payload: {
                statusCode: error.response.status,
                message: "Register user fail"
            }
        })
    }
}

const signin = (username, password) => async (dispatch) => {
    dispatch({
        type: actionTypes.SIGNIN_REQUEST
    })

    try {

        const response = await axios.post('/api/auth/signin', {
            username: username,
            password: password
        })
        console.log(response);

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('role', response.data.role)
        localStorage.setItem('login', true)
        dispatch({
            type: actionTypes.SIGNIN_SUCCESS,
            payload: response.data
        })
        // let navigate= useNavigate();
        // navigate("/",{replace:true});

        window.location.replace("/")


    } catch (error) {
        dispatch({
            type: actionTypes.SIGNIN_FAIL,
            payload: {
                statusCode: error.tatus,
                message: "Signin fail"
            }
        })
    }
}

// const loggeIn=()=>{
//     return{
//         type:actionTypes.LOGGED_IN
//     }
// }

const getUserInfo = (username) => async (dispatch) => {
    dispatch({
        type: actionTypes.GET_USER_INFO_REQUEST
    })

    try {
        const response = await axios.get(`/api/accounts/${username}`, {
            headers: { "Authorization": `Bearer ${localStorage.token}` }
        })
        console.log(response);
        dispatch({
            type: actionTypes.GET_USER_INFO_SUCCESS,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.GET_USER_INFO_FAIL,
            payload: {
                statusCode: error.tatus,
                message: "GET info fail"
            }
        })
    }
}

const getListGroups = () => async (dispatch) => {
    dispatch({
        type: actionTypes.GET_LIST_GROUP_REQUEST
    })
    const api = '/api/groups'
    try {
        const response = await axios.get(api, {
            headers: { "Authorization": `Bearer ${localStorage.token}` }
        })
        console.log(response);
        dispatch({
            type: actionTypes.GET_LIST_GROUP_SUCCESS,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.GET_LIST_GROUP_FAIL,
            payload: {
                statusCode: error.tatus,
                message: "GET listgroups fail"
            }
        })
    }
}
const updateUser = (userUpdate) => async (dispatch) => {
    // console.log(userUpdate);

    dispatch({
        type: actionTypes.UPDATE_USER_REQUEST
    })
    try {
        const response = await axios.put(`/api/accounts/${userUpdate.id}`, {
            username: userUpdate.username,
            firstName: userUpdate.firstName,
            lastName: userUpdate.lastName,
            email: userUpdate.email,
            password: userUpdate.password,
            role: userUpdate.role,
            id: userUpdate.id,
            status: userUpdate.status,
            avatarUrl: userUpdate.avatarUrl
        }, {
            headers: { "Authorization": `Bearer ${localStorage.token}` }

        })
        console.log(response);
        alert(response.data.rusultText)

        dispatch({
            type: actionTypes.UPDATE_USER_SUCCESS,
            payload: response.data
        })

    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_USER_FAIL,
            payload: {
                statusCode: error.tatus,
                message: "UPDATE user fail"
            }
        })
    }
}
const getGroupCurrent = (group) => {
    console.log(group);
    return {
        type: actionTypes.GET_GROUP_CURRENT,
        payload: group
    }

}

const updateGroup = (groupUpdate) => async (dispatch) => {
    // console.log(userUpdate);

    // dispatch({
    //     type: actionTypes.UPDATE_USER_REQUEST
    // })
    try {
        const response = await axios.put(`/api/groups`, {
            name: groupUpdate.name,
            type: groupUpdate.type,
            totalMember: groupUpdate.totalMember,
            createdAt: groupUpdate.createdAt
        }, {
            headers: { "Authorization": `Bearer ${localStorage.token}` },
            params: { id: groupUpdate.id }
        })
        console.log(response);
        alert(response.data)

        // dispatch({
        //     type: actionTypes.UPDATE_USER_SUCCESS,
        //     payload: response.data
        // })

    } catch (error) {
        // dispatch({
        //     type: actionTypes.UPDATE_USER_FAIL,
        //     payload: {
        //         statusCode: error.tatus,
        //         message: "UPDATE user fail"
        //     }
        // })
    }
}

const deleteGroup = (groupID) => async (dispatch) => {
    // dispatch({
    //     type: actionTypes.GET_USER_INFO_REQUEST
    // })
    console.log(groupID);

    try {
        const response = await axios.post(`/api/groups/delete/${groupID}`, {},{
            headers: { "Authorization": `Bearer ${localStorage.token}` }
        })
        console.log(response);
        dispatch({
            type: actionTypes.DELETE_GROUP_SUCCESS,
            payload: response.data
        })

    } catch (error) {
        // dispatch({
        //     type: actionTypes.GET_USER_INFO_FAIL,
        //     payload: {
        //         statusCode: error.status,
        //         message: "GET info fail"
        //     }
        // })
    }
}

const createGroup=(group)=>async(dispatch)=>{
    try {
        const response = await axios.post(`/api/groups`, {
            type:group.type,
            name:group.name,
            totalMember:Number(group.totalMember)
        },{
            headers: { "Authorization": `Bearer ${localStorage.token}` }
        })
        console.log(response);
        dispatch({
            type: actionTypes.CREATE_GROUP_SUCCESS,
            payload: response.data
        })
        alert(response.data)


    } catch (error) {
        // dispatch({
        //     type: actionTypes.GET_USER_INFO_FAIL,
        //     payload: {
        //         statusCode: error.status,
        //         message: "GET info fail"
        //     }
        // })
    }
}
const userAction = {
    registerUser,
    signin,
    getUserInfo,
    getListGroups,
    updateUser,
    getGroupCurrent,
    updateGroup,
    deleteGroup,
    createGroup,
    // loggeIn
}
export default userAction