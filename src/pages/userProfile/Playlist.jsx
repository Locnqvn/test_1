import React, { useState } from 'react';
import { Col, Button} from 'antd';
import { DeleteOutlined, PlusCircleOutlined, YoutubeOutlined} from '@ant-design/icons';

const Playlist = ({props}) => {
    return ( 
        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <div class='my-playlist'>
            <div class='my-playlist-title'>
                <h1 id='title' class='color-white'>Playlist Của Tôi</h1>
                <a href='#'><PlusCircleOutlined /></a>
            </div>
            <hr>
            </hr>
            <div class='list-playlist'>
                <ul>
                    <li class='flex'>
                        <a href='#'><img src="images/26594790.png"></img></a>
                        <p class='color-white'>Playlist1</p>
                        <a href='#' class='auto' ><YoutubeOutlined /></a>
                        <a href='#' class='auto' ><DeleteOutlined /></a>
                    </li>
                    <hr></hr>
                    <li class='flex'>
                        <a href='#'><img src="images/26594790.png"></img></a>
                        <p class='color-white'>Playlist2</p>
                        <a href='#' class='auto' ><YoutubeOutlined /></a>
                        <a href='#' class='auto' ><DeleteOutlined /></a>
                    </li>
                    <hr></hr>
                    <li class='flex'>
                        <a href='#'><img src="images/26594790.png"></img></a>
                        <p class='color-white'>Playlist3</p>
                        <a href='#' class='auto' ><YoutubeOutlined /></a>
                        <a href='#' class='auto' ><DeleteOutlined /></a>
                    </li>
                    <hr></hr>
                    <li class='flex'>
                        <a href='#'><img src="images/26594790.png"></img></a>
                        <p class='color-white'>Playlist4</p>
                        <a href='#' class='auto' ><YoutubeOutlined /></a>
                        <a href='#' class='auto' ><DeleteOutlined /></a>
                    </li>
                    <hr></hr>
                    <Button class='color-white'>Xem tất cả</Button>
                </ul>

            </div>

        </div>
    </Col>
    );
}
 
export default Playlist;