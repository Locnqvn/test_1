import http from './config';

const getHistory = (token) => {
    return http.get(`histories`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}

const deleteHistory = (userId, token) => {
    return http.delete(`histories`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export default {
    getHistory,
    deleteHistory
}