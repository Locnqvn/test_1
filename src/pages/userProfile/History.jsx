import React, { useState, useEffect } from 'react';
import { Col, Button, notification, message} from 'antd';
import { PlusCircleOutlined, YoutubeOutlined, HeartOutlined, SendOutlined, ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';
import historyAPI from '../../api/history';


const History = ({ userToken }) => {

    const [mvHistory, setMvHistory] = useState([]);
    const [maHistory, setMaHistory] = useState([]);


    useEffect(() => {
        rechieveUserHistory();
    }, [])

    const rechieveUserHistory = async () => {
        let { data } = await historyAPI.getHistory(userToken);
        console.log("data user history: ", data);

        setMvHistory(data.result.history.musicVideos);
        setMaHistory(data.result.history.musicAudios);
    }


    const onDeleteHistory = async (e) => {
        let {data} = await historyAPI.deleteHistory(userToken);
        console.log('delete history: ', data);  
        if(data.status === 1){
            notification.success({message: 'Xóa lịch sử thành công'})
        }
        else{
            notification.error({message: 'Có lỗi xảy ra, xin thử lại sau....'})
        }
    }
        return (<div>
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
                    maHistory && maHistory.map(item => {
                        return (
                            <li class='item' style={{margin: '5px'}}>
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
                    mvHistory && mvHistory.map(item => {
                        return (
                            <li class='item' style={{margin: '5px'}}>
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

            <Button class='color-white'>Xem tất cả</Button>
        </div>

            <Button onClick={onDeleteHistory} class='color-white' style={{marginTop: '10px'}}>Xóa tất cả lịch sử</Button>
        </div>
    </div>);
}

export default History;