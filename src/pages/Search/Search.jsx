import React, { useState, useEffect } from 'react';
import {useHistory, useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import { Select, Spin} from 'antd';

import songAPI from '../../api/song';

const { Option } = Select;

const Search = ({searchRedirect}) => {

    const history = useHistory();
    const location = useLocation();

    const [songs, setSongs] = useState([]);
    const [fetching, setFetching] = useState(false);

    const handleChange = value => {
        let type = value.slice(0, 2);
        let songId = value.substring(2, value.length);
        if(type === 'MV'){
            searchRedirect(songId);
            history.push(`video/${songId}`);
        }
        else{
            history.push(`music/${songId}`);
        }
    };

    const fetchSong = async value => {
        console.log('fetching song', value);
        setSongs([]);
        setFetching(true);
        let { data } = await songAPI.getSongs(1, 10, value);
        console.log("data lên này: ", data);
        setFetching(false);
        setSongs(data.results);
    };

    return (<Select
        showSearch
        placeholder="tìm kiếm bài hát..."
        notFoundContent={fetching ? <Spin size="small" /> : null}
        defaultActiveFirstOption={false}
        filterOption={false}
        onSearch={fetchSong}
        onChange={handleChange}
        style={{ width: '100%' }}
    >
        {songs.map(song => (
            <Option key={song.type + song._id}>
                {song.name} 
                {
                    song.type =='MV' 
                    ? <span style={{float: 'right', color: 'red'}}>Video</span>
                    : <span style={{float: 'right', color: 'green'}}>Bài hát</span>
                }
            </Option>
        ))}
    </Select>);
}

export default Search;