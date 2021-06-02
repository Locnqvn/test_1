import React, { useState, useEffect } from 'react';
import { Carousel, Col, Row } from 'antd';
import '../../../resources/common.css';

import MusicPlayer from './MusicPlayer';
import BoxActions from '../BoxActions/BoxActions';
import songAPI from '../../../api/song';
import Lyric from './Lyric';
import './style.scss';


const initialSong = {
    path: '',
    name: '',
    cover_image: null,
    lyric: '',
    description: ''
}

const PlayerMusicPage = (props) => {

    const [song, setSong] = useState(initialSong);

    useEffect(() => {
        let songId = props.match.params.idMusic;
        console.log("songId: ", songId);
        rechieveSong(songId);
    }, []);

    const rechieveSong = async (songId) => {
        let { data } = await songAPI.getSongById(songId, props.userToken);
        let mv = data.result.song;
        console.log("MV aaa: ", props.userToken);
        if (mv) {
            setSong({ path: mv.file.path,
                      ...mv});
        }
        else {
            setSong(initialSong);
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
                                    <MusicPlayer song={song}/>

                                </div>

                                <Row  gutter={24}>
                                    <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                                        <Lyric song={song}/>
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <BoxActions song={song}/>
                                    </Col>
                                </Row>
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

export default PlayerMusicPage;