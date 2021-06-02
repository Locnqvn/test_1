import http from './config';


const login = (email, password) => {
    return http.post('admin/login', {email, password});
}

export default {
    login
}