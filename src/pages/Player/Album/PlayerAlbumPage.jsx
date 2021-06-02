import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';

import '../../../resources/common.css';

import AlbumPlayer from './AlbumPlayer';
import BoxActions from '../BoxActions/BoxActions';
import Lyric from '../Music/Lyric';
import './style.scss';
import ListPlayerAlbum from './ListPlayerAlbum';
import albumAPI from '../../../api/album';


const initialAlbum = {
    _id: '',
    name: '',
    description: '',
    musicList: [],
    category: [],
    singers: [],
    shares: 0,
    views: 0,
    favorites: 0,
    cover_image: null
}


const PlayerMusicPage = (props) => {

    const [album, setAlbum] = useState(initialAlbum);

    useEffect(() => {
        fetchAlbum();
    }, [])

    const fetchAlbum = async () => {
        let albumId = props.match.params.idAlbum;
        let {data} = await albumAPI.getAlbumById(albumId);
        console.log("album player: ", data.result);
        setAlbum(data.result);

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
                                    <div className="infor-music">
                                        <h1 className="hd-white">{album.name}</h1>
                                        <p>Thể loại: <span className="hd-white"> 
                                        {
                                             album.category > 0 ? album.category.map((singer, index) => {
                                                let obj = JSON.parse(singer);
                                                return obj && obj.name ? obj.name : ''
                                              }): 'unknown'
                                        }
                                        </span></p>
                                        <h4 className="hd-white">
                                            {
                                                album.description
                                            }
                                        </h4>
                                    </div>

                                    <AlbumPlayer album={album}/>
                                </div>

                                <Row  gutter={24}>
                                    <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                                        <Lyric/>
                                    </Col>
                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                        <BoxActions />
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className='right-side'>
                                    <ListPlayerAlbum/>
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