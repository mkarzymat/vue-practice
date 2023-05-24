import axios from "axios"
import router from "../router"

axios.defaults.baseURL = 'https://dummyjson.com';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
});


axios.interceptors.response.use(({data}) => {
    return data
},error => {
    if (error.response.status === 401) {
        console.log('401');
        router.push({name: 'login'})
    } else if (error.response.status === 403) {
        console.log('403');
        router.push({ name: "login" });
    } else if (error.response.status === 400) {
        console.log('400');
    }
    return Promise.reject(error);
})


export default axios
