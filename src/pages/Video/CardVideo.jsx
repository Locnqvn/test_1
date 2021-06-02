import React, { Component } from 'react';
import {PlayCircleOutlined} from '@ant-design/icons';
import './style.scss';
import { useHistory } from 'react-router';
const CardVieo = ({ video }) => {

    const history = useHistory();

    const style = {
        relative: {
            position: 'relative',
        }
    }

    const onSelectVideo = () => {
        window.scrollTo(0,0);
        history.push(`/video/${video._id}`);
    }
    


    return (
            <div className="cardVideo">
                <div style={style.relative} className="image-card">
                <span onClick={onSelectVideo} className="on-hover-video"><PlayCircleOutlined /></span>
                    <a onClick={onSelectVideo}>
                        <img src={video.cover_image ? video.cover_image.path : "https://e4t.edu.vn/resources/common/images/default/video-play.png"}/>
                    </a>
                    <div className="durationVideo">
                        <span>03:32</span>       
                    </div>
                </div>
                <p className="nameSong">{video.name}</p>
                <p className="nameSinger">
                    {
                        video.singers.length > 0 ? video.singers.map((singer, index) => {
                            let obj = JSON.parse(singer);
                            return obj && obj.name ? obj.name : ''
                          }): 'unknown'
                    }
                </p>
            </div>
    );
}

export default CardVieo;