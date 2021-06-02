import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import CardVideo from './CardVideo';
import songAPI from '../../api/song';

import './style.scss'

const { TabPane } = Tabs;

const ListVideo = ({ onHome, page, limit, setTotal }) => {

    // Nếu inHome thì chỉ gen ra 1 số lượng nhất định cardVieo
    const [listVideo, setListVideo] = useState([]);
    

    useEffect(() => {
        if(onHome)
            rechieveMusicVideosOnhome();
        else
            rechieveMusicVideos();
    }, [page])

    const rechieveMusicVideosOnhome = async () => {
        let {data} = await songAPI.getAllVideo(page, limit);
        if(data.success){
            setListVideo(data.results);
        }
    }

    const rechieveMusicVideos = async () => {
        let {data} = await songAPI.getAllVideo(page, limit);
        if(data.success){
            console.log("data MVs: ", data);
            setListVideo(data.results);
            setTotal(data.total);
        }


    }

    const NewestVideos = () => {
        // Do sth to get newest
        return listVideo.map((video, index) => {
            return <CardVideo key={index} video={video} />
        })
    }

    const ViewestVideos = () => {
        // Do sth to get viewest
        return listVideo.map((video, index) => {
            return <CardVideo key={index} video={video} />
        })
    }

    const callback = (key) => {
        console.log(key);
      }

    

    return (
        <div className="music-video-content">
            <h1 className="hd-white">Music Video</h1>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane 
                    tab={<h3 className="hd-white">Mới nhất</h3>} key="1">
                    <div className="wrapper-list-video">
                        <div className="list-video">
                            {NewestVideos()}
                        </div>
                    </div>
                    
                </TabPane>
                <TabPane 
                tab={<h3 className="hd-white">Nghe nhiều</h3>} key="2">
                    <div className="wrapper-list-video">
                        <div className="list-video">
                            {ViewestVideos()}
                        </div>
                    </div>
                </TabPane>
            </Tabs>

        </div>

    );
}

export default ListVideo;