import React, { useState } from 'react';
import { Col, Button, Checkbox } from 'antd';
import { DeleteOutlined, PlusCircleOutlined, YoutubeOutlined, HeartOutlined, SendOutlined, ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';

const FavoriteMusic = ({ audioList, videoList }) => {


    return (
        <Col xs={18} sm={18} md={18} lg={18} xl={18}>
            <div class='title'>
                <h1 class='color-white'>Bài hát yêu thích</h1>
                <a href='#'>
                    <SendOutlined />
                    <h3 class='color-white'>Nghe tất cả</h3>
                </a>
            </div>
            <hr></hr>
            <div class='list-likely-music'>
                <ul>
                    {
                        audioList && audioList.map(item => {
                            return (
                                <li class='item' style={{margin: '10px 0px'}}>
                                    <a href='#'><img src={item.cover_image ? item.cover_image.path : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"}></img></a>
                                    <div class='music-name'>
                                        <h3 class='color-white'>{item.name}</h3>
                                        <p class='color-wheat'>Superbrothers, Orange, Binz</p>
                                    </div>

                                    <ul>
                                        <li><a href='#'><YoutubeOutlined class='a' /></a></li>
                                        <li><a href='#'><HeartOutlined class='b' /></a></li>
                                        <li><a href='#'><ShareAltOutlined class='c' /></a></li>
                                        <li><a href='#'><PlusCircleOutlined class='d' /></a></li>
                                        <li><a href='#'><DownloadOutlined class='e' /></a></li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
                <br></br>

            </div>
            <div class='title'>
                <h1 class='color-white'>Video yêu thích</h1>
                <a href='#'>
                    <SendOutlined />
                    <h3 class='color-white'>Nghe tất cả</h3>
                </a>
            </div>
            <hr></hr>
            <div class='list-likely-music'>
                <ul>
                {
                        videoList && videoList.map(item => {
                            return (
                                <li class='item' style={{margin: '10px 0px'}}>
                                    <a href='#'><img src={item.cover_image ? item.cover_image.path : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"}></img></a>
                                    <div class='music-name'>
                                        <h3 class='color-white'>{item.name}</h3>
                                        <p class='color-wheat'>Superbrothers, Orange, Binz</p>
                                    </div>

                                    <ul>
                                        <li><a href='#'><YoutubeOutlined class='a' /></a></li>
                                        <li><a href='#'><HeartOutlined class='b' /></a></li>
                                        <li><a href='#'><ShareAltOutlined class='c' /></a></li>
                                        <li><a href='#'><PlusCircleOutlined class='d' /></a></li>
                                        <li><a href='#'><DownloadOutlined class='e' /></a></li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
                <br></br>
            </div>
        </Col>
    );
}

export default FavoriteMusic;