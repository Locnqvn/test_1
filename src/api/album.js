import http from './config';
import category from './category';
import singer from './singer';
import song from './song';

const getListAlbum = async (filter) => {
    let url = 'albums';
    if (!filter.page)
        url = url.concat('?page=' + filter.page);
    else
        url = url.concat('?page=0');
    if (!filter.sort)
        url = url.concat('&&sort=' + filter.sort);
    if (!filter.limit)
        url = url.concat('&&limit=' + filter.limit);
    const response = await http.get(url);
    let result = {};

    let temp = [];


    response.data.results.forEach(async function (element, index) {
        let singerList = [];
        let categoryList = [];
        let songList = [];

        categoryList = element.category.map(e => {
            let jsonCate = JSON.parse(e);
            if (jsonCate)
                return jsonCate.name
        });

        singerList = element.singers.map(e => {
            let jsonCate = JSON.parse(e);
            if (jsonCate)
                return jsonCate.name
        });

        songList = element.musicList.map(e => {
            let jsonCate = JSON.parse(e);
            if (jsonCate)
                return jsonCate.name
        });
        debugger

        const abl = {
            key: index,
            name: element.name,
            description: element.description,
            category: categoryList,
            singer: singerList,
            createdAt: element.createdDate,
            modifiedAt: element.modifiedDate,
            song: songList,
            id: element._id,
            cover_image: element.cover_image
        }

        temp.push(abl);

    })

    result.data = response.data.results;
    result.dataDisplay = temp;

    return result;
}

const deleteAlbumById = (id, accesstoken) => {
    return http.delete(`admin/albums/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken
        }
    })
}
const getAlbumList = (page, limit) => {
    // let select="cover_image,name,_id";
    return http.get(`albums?page=${page}&limit=${limit}`);
}

const getAlbumById = (albumId) => {
    return http.get(`albums/${albumId}`);
}

const createAlbum = (data, accesstoken) => {
    return http.post('admin/albums', data, {
        headers: {
            'Authorization': 'Bearer ' + accesstoken,
        }
    });
}

const editAlbum = (id, token, data) => {
    return http.put(`admin/albums/${id}`, data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
}

const editCoverImage = (id, data, token) => {
    return http.put(`admin/albums/updateCoverImage/${id}`, data, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
}

export default {
    getAlbumList,
    getAlbumById,
    getListAlbum,
    deleteAlbumById,
    createAlbum,
    editAlbum,
    editCoverImage
}