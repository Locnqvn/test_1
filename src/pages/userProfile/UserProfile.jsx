import React, { useState, useEffect } from 'react';
import { Tabs, Row, Col, Button} from 'antd';
import {useCookies} from 'react-cookie';
import './style.scss';
import FavoriteMusic from './FavoriteMusic';
import Playlist from './Playlist';
import History from './History';
import Options from './Options';

import userAPI from '../../api/user';



const initialUser = {
    name: '',
    avatarPath: null,
    isVip: false,

}

function UserProfile() {


    const [cookie, setCookie] = useCookies(["userToken","user"]);
    const [user, setUser] = useState(initialUser);
    const [playLists, setPlayLists] = useState([]);
    const [favoriteMV, setFavoriteMV] = useState([]);
    const [favoriteMA, setFavoriteMA] = useState([]);

    const [favoriteSingers, setFavoriteSinger] = useState([]);



    const callback = (key) => {
        console.log(key);
    }
   
    const { TabPane } = Tabs;

    useEffect(() => {
        rechieveUserInfo();
    }, []);

    const rechieveUserInfo = async () => {
        let {data} = await userAPI.getUserInfo(cookie.userToken);
        setFavoriteMA(data.favoriteMAs);
        setFavoriteMV(data.favoriteMVs);
        console.log("data user info: ", data);

    }

        return (
            <div>
                <div class='content-side'>
                    <div class='brand-side'>
                        <img src='images/8732187.png' id='brand-img'></img>
                        <div class='profile-side'>
                            <a href='#'>
                                <img src="images/avatar-default.png" id='ava'></img>
                            </a>
                            <div class='profile-info'>
                                <strong class="color-white">tel_0906213612</strong>
                                <p class='color-wheat'>Tài khoản miễn phí</p>
                                <div class='two-button'>
                                    <Button shape='round' type='primary'>Đăng ký Vip</Button>
                                    <Button shape='round' type='primary'>Thay ảnh nền</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='main-content-side'>
                        <Row>
                            <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                            </Col>
                            <Col xs={20} sm={16} md={12} lg={16} xl={16} >
                                <div class='topic'>
                                    <Tabs defaultActiveKey="1" onChange={callback} style={{marginBottom: '30px'}}>
                                        <TabPane class='color-white' tab={<h4 className="hd-white">NHẠC YÊU THÍCH</h4>} key="1">
                                            <Row gutter={24}>
                                                <FavoriteMusic audioList={favoriteMA} videoList={favoriteMV}/>

                                                <Playlist />
                                            </Row>
                                        </TabPane>

                                        <TabPane tab={<h4 className="hd-white">NHẠC ĐÃ NGHE</h4>} key="3">
                                            <History userToken={cookie.userToken}/>
                                        </TabPane>

                                        <TabPane tab={<h4 className="hd-white">TÙY CHỌN</h4>} key="4">
                                            <Options />
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={4} xl={4}>
                            </Col>
                        </Row>
                    </div>
                </div>
                
            </div>
        )
}

export default UserProfile;