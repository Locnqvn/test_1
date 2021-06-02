
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import albumAPI from '../../api/album';
import CardAlbum from './CardAlbum';


const { TabPane } = Tabs;

const ListAlbum = ({onHome, page, limit}) => {

    // Nếu onHome thì chỉ gen ra 1 số lượng nhất định cardAlbum
    const [listAlbum, setListAlbum] = useState([]);

    useEffect(() => {
        if(onHome)
            rechieveAlbumOnHome();
        else
            rechieveAlbum();
    }, [page]);

    const rechieveAlbumOnHome = async () => {
        let {data} = await albumAPI.getAlbumList(page, limit);
        console.log("album: ", data.results)
        if(data.success)
            setListAlbum(data.results);
        }

    const rechieveAlbum = async () => {
        
        let {data} = await albumAPI.getAlbumList(page, limit);
        if(data.success)
            setListAlbum(data.results);
    }


    const NewestAlbums = () => {
        // Do sth to get newest
        return listAlbum.map((album, index) => {
            return <CardAlbum key={index} album={album} />
        })
    }

    const ViewestAlbums = () => {
        // Do sth to get viewest
        return listAlbum.map((album, index) => {
            return <CardAlbum key={index} album={album} />
        })
    }

    const callback = (key) => {
        console.log(key);
    }



    return (
        <div className="album-content">
            <h1 className="hd-white">Album</h1>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane
                    tab={<h3 className="hd-white">Mới nhất</h3>} key="1">
                   <div className="wrapper-list-album">
                        <div className="list-album">
                            {NewestAlbums()}
                        </div>
                    </div>
                </TabPane>
                <TabPane
                    tab={<h3 className="hd-white">Nghe nhiều</h3>} key="2">
                    <div className="wrapper-list-album">
                        <div className="list-album">
                            {ViewestAlbums()}
                        </div>
                    </div>
                </TabPane>
            </Tabs>

        </div>

    );
}

export default ListAlbum;