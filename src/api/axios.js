import axios from "axios"

axios.defaults.baseURL = 'https://dummyjson.com';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
});

// axios.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response.status === 401) {
//         store.dispatch('logout')
//         delete axios.defaults.headers.common['Authorization']
//         router.push({name: 'Login'})
//     }
//
//     return Promise.reject(error);
// });


export default axios
