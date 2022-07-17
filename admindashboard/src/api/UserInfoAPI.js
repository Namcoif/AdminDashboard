
import { api } from './api';
const getUserInfo=(username)=>{
    return api('GET',`/accounts/${username}`,null);
}

export default getUserInfo;