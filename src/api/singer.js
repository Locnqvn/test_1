import http from './config';

const getAllSinger = (page, limit) => {
        let select="name,gender,age,favorites,avatar,_id";
       return http.get(`singers?page=${page}&limit=${limit}&select=${select}`);
    }
const createSinger = (data, accesstoken) => {
    return http.post('admin/singers', data, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
            
        }
    });
}
const getById = (singerId) => {
    return http.get(`/singers/${singerId}`);
}

const getAllSingerAsync = async () => {
    return await http.get('/singers');
}

const getByIdAsync = async (singerId) => {
    return await http.get(`/singers/${singerId}`);
}
const deleteSingerById = (singerId,accesstoken)  => {
    return http.delete(`/admin/singers/${singerId}`,{
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
            
        }
    });
}
const editSinger = (id, token, data) => {
    return http.put(`admin/singers/${id}`,data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
}

const editAvatar = (id, data, token) => {
    return http.put(`admin/singers/updateAvatar/${id}`, data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
    console.log("success !")
}

export default {
    getAllSinger,
    createSinger,
    getAllSingerAsync,
    getByIdAsync,
    getById,
    deleteSingerById,
    editAvatar,
    editSinger
    

}