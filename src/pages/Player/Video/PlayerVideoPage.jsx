import React, { useState, useEffect } from 'react';
import { Carousel, Col, Row } from 'antd';
import VideoPlayer from './VideoPlayer';
import songAPI from '../../../api/song';
import '../../../resources/common.css';
import './style.scss';

const initialVideo = {
    path: '',
    name: ''
}
const PlayerVideoPage = (props) => {

    const [musicVideo, setMusicVideo] = useState(initialVideo);

    useEffect(() => {
        let songId = props.match.params.videoId;
        console.log("songId: ", songId);
        rechieveVideo(songId);
    }, []);

    const rechieveVideo = async (songId) => {
        console.log("play video: ", props.userToken);
        let { data } = await songAPI.getSongById(songId, props.userToken);
        let mv = data.result.song;
        console.log("MV aaa: ", props.userToken);
        if (mv) {
            setMusicVideo({ path: mv.file.path, name: mv.name });
        }
        else {
            setMusicVideo(initialVideo);
        }
    }


    return (
        <div className="content-side">

            <Row>
                <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                </Col>

                <Col xs={20} sm={16} md={12} lg={16} xl={16}>
                    <div className='main-content'>
                        <Row gutter={24}>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                                <div className='left-side'>

                                    <VideoPlayer video={musicVideo} />



                                    <div className="infor-video">
                                        <h1 className="hd-white">{musicVideo.name}</h1>
                                        <p>Thể loại: <span className="hd-white"> Nhạc trẻ</span></p>
                                    </div>

                                </div>
                            </Col>

                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className='right-side'>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                </Col>
            </Row>
        </div>);
}

export default PlayerVideoPage;