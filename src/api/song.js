import http from './config';

const getSong = (userId, songId) => {
    return http.get(`users/${userId}/songs/${songId}`);
}

const createSong = (data, accesstoken) => {
    return http.post('admin/songs', data, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
            
        }
    });
}

const getAllVideo = (page, limit) => {
    let select="cover_image,name,_id";
    return http.get(`songs?page=${page}&limit=${limit}&select=${select}&type=MV`);
}

const getSongs = (page, limit, filterType) => {
    if(filterType != null && filterType.length == 1){
        return http.get(`songs?page=${page}&limit=${limit}&type=${filterType[0]}`);
    }
    else
        return http.get(`songs?page=${page}&limit=${limit}`);
}

const searchSongs = (page, limit, key) => {
    return http.get(`songs?page=${page}&limit=${limit}&name=${key}`);
}

const getAllSongAsync = async () => {
    return await http.get('songs');
}

const getSongById = (songId, userToken) => {
    let token = userToken ? userToken : "";
    return http.get(`users/songs/${songId}`, {
        headers: {
            Authorization: 'Bearer  ' + token
        }
    });
}

const deleteSongById = (songId, moderatorToken) => {
    return http.delete(`admin/songs/${songId}`, {
        headers: {
            Authorization: 'Bearer ' + moderatorToken
        }
    });
}

const update = (songId, data, moderatorToken) => {
    return http.put(`admin/songs/${songId}`, data, {
        headers: {
            Authorization: 'Bearer ' + moderatorToken
        }
    });
}

const updateImage = (songId, image, moderatorToken) => {
    return http.put(`admin/songs/cover-image/${songId}`, image, {
        headers: {
            Authorization: 'Bearer ' + moderatorToken,
            
        }
    })
}

const updateFile = (songId, file, moderatorToken) => {
    return http.put(`admin/songs/file/${songId}`, file, {
        headers: {
            Authorization: 'Bearer ' + moderatorToken
        }})
}

export default {
    getAllSongAsync,
    createSong,
    getSong,
    getAllVideo,
    getSongById,
    getSongs,
    deleteSongById,
    update,
    updateImage,
    updateFile

}