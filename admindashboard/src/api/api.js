import axios from "axios";

const axiosClient=axios.create({
    baseURL: "http://localhost:8888/api/",
    headers: {"Authorization" : `Bearer ${localStorage.token}`}
});

export let api=(method, endpoint, payload)=>{
    return axiosClient(endpoint, {method: method, data: payload})
        .then((response)=>{
            return response.data
        }).catch((error)=>{
            console.log(error)
        })
}