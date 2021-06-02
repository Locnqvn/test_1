import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import { Menu, Dropdown, Row, Col, Input, Avatar } from 'antd';
import { SearchOutlined, UserOutlined} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import './style.scss';
import Search from '../../Search/Search';

function HeaderX({ user, logout }) {


    const topic_menu = (
        <div className='sub-menu'>
            <Row gutter={8}>
                <Col span={8}>
                    <a className="sub-title" href="#">NỔI BẬT</a>
                    <ul>
                        <li><a href="#">50 sắc thái cảm xúc</a></li>
                        <li><a href="#">Relax music</a></li>
                        <li><a href="#">Nhạc vàng muôn thuở</a></li>
                        <li><a href="#">Rap</a></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <a className="sub-title" href="#">NGHE NHIỀU</a>
                    <ul>
                        <li><a href="#">Nhạc vàng muôn thủơ</a></li>
                        <li><a href="#">Tuyệt phẩm bolero</a> </li>
                        <li><a href="#">The best of nhacvn</a></li>
                        <li><a href="#">Nhạc cách mạng</a></li>
                    </ul>
                </Col>
                <Col span={8}>
                    <a className="sub-title" href="#">CÓ THỂ BẠN THÍCH</a>
                    <ul>
                        <li><a href="#">Acoustic</a></li>
                        <li><a href="#">Cà phê</a> </li>
                        <li><a href="#">Chill out</a></li>
                        <li><a href="#">Underground</a></li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
    const rank_menu = (
        <div className='sub-menu'>
            <br></br>
            <Row>
                <Col span={8}>
                    <a className="sub-title" href="#">VIỆT NAM</a>
                    <ul>
                        <li><a href="#">Bài hát</a></li>
                        <li><a href="#">Album</a></li>
                        <li><a href="#">Video</a></li>
                    </ul>

                </Col>
                <Col span={8}>
                    <a className="sub-title" href="#">ÂU MỸ</a>
                    <ul>
                        <li><a href="#">Bài hát</a></li>
                        <li><a href="#">Album</a></li>
                        <li><a href="#">Video</a></li>
                    </ul>


                </Col>
                <Col span={8}>
                    <a className="sub-title" href="#">HÀN QUỐC</a>
                    <ul>
                        <li><a href="#">Bài hát</a></li>
                        <li><a href="#">Album</a></li>
                        <li><a href="#">Video</a></li>
                    </ul>


                </Col>
            </Row>
        </div>
    );
    const album_menu = (
        <div className='sub-menu'>
            <Row gutter={8}>
                <Col span={6}>
                    <a className="sub-title" href="#">VIỆT NAM</a>
                    <ul>
                        <li><a href="#">Nhạc trẻ</a></li>
                        <li><a href="#">Trữ tình</a></li>
                        <li></li>
                    </ul>

                </Col>
                <Col span={6}>
                    <a className="sub-title" href="#">ÂU MỸ</a>
                    <ul>
                        <li> <a href="#">Pop</a></li>
                        <li> <a href="#">Nhạc Hàn</a></li>
                        <li><a href="#">Việt remix</a></li>
                    </ul>
                </Col>
                <Col span={6}>
                    <a className="sub-title" href="#">CHÂU Á</a>
                    <ul>
                        <li><a href="#">Nhạc Hoa</a></li>
                        <li><a href="#">Rocks</a></li>
                        <li></li>
                    </ul>
                </Col>
                <Col span={6}>
                    <a className="sub-title" href="#">THỂ LOẠI KHÁC</a>
                    <ul>
                        <li><a href="#">Nhạc không lời</a></li>
                        <li><a href="#">Nhạc trịnh</a></li>
                        <li> <a href="#">Beat-Karaoke</a></li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
    const music_video_menu = (
        <div className='sub-menu'>
            <Row gutter={8}>
                <Col span={12}>
                    <a href="#">Nhạc Trẻ</a>
                </Col>
                <Col span={12}>
                    <a href="#">Trữ Tình</a>
                </Col>
            </Row>
            <hr></hr>
            <Row gutter={8}>
                <Col span={12}>
                    <a href="#">Quê Hương</a>
                </Col>
                <Col span={12}>
                    <a href="#">Cách Mạng</a>
                </Col>
            </Row>
            <hr></hr>
            <Row gutter={8}>
                <Col span={12}>
                    <a href="#">Âu Mỹ</a>
                </Col>
                <Col span={12}>
                    <a href="#">Nhạc Hoa</a>
                </Col>
            </Row>
            <hr></hr>
            <Row gutter={8}>
                <Col span={12}>
                    <a href="#">Nhạc Hàn</a>
                </Col>
                <Col span={12}>
                    <a href="#">Thể  Loại Khác</a>
                </Col>
            </Row>
        </div>
    );
    const artist_menu = (
        <div className='sub-menu'>
            <br></br>
            <Row>
                <Col span={24}>
                    <a href="#">Việt Nam</a>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col span={24}>
                    <a href="#">Châu Mỹ</a>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col span={24}>
                    <a href="#">Châu Á</a>
                </Col>
            </Row>

        </div>
    );




    const onLogout = () => {
        logout(true);
    }

    const menuUser = (
    <Menu>
        <Menu.Item key="1" style={{background: '#ffe58f'}}>
            <Link to={'/ca-nhan'} className="dropdown-item" >Trang cá nhân</Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={onLogout} icon={<UserOutlined />}>
            Đăng xuất
        </Menu.Item>
    </Menu>);


    const onSearchRedirect = (songId) => {

    }

    return (
        <div className='header'>
            <div className="wrapper">
                <div className='header-top'>
                    <div className='logo'>
                        <div title='nghe nhac online, tai nhac mpc'>
                            <Link to={'/'}>
                                <img src='/icons/spotify.png' alt="nhacvn"></img>
                            </Link>
                        </div>
                    </div>
                    <div className='search-side'>

                        <form action='#' method='get' className="search">
                            <Search searchRedirect={onSearchRedirect}/>
                        </form>
                    </div>
                    <div className='align14 search-option'>
                        <ul>
                            <li><a onClick='#'>Video</a></li>
                            <li style={{ color: 'white' }}> | </li>
                            <li><a onClick='#'>Sách nói</a></li>
                        </ul>
                    </div>
                    <div className='align14 sign-in-up'>
                            {
                                user ?
                                 <Dropdown.Button
                                    overlay={menuUser}
                                    placement="bottomCenter"
                                    size="large"
                                    style={{ border: '1px solid #fa8c16', borderRadius: '5px', verticalAlign: 'center' }}
                                    icon={<Avatar
                                        src={user.avatar ? user.avatar : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"}
                                        size="medium" icon={<UserOutlined />} />}>
                                    {user.name}
                                </Dropdown.Button>
                                :
                                <ul>
                                    <li><Link to='/login'>Đăng nhập</Link></li>
                                    <li style={{ color: 'white' }}> | </li>
                                    <li><Link to="/register">Đăng ký</Link></li>
                                </ul>
                            }
                    </div>
                </div>
                <div className='header-menu'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Dropdown overlay={topic_menu}>
                                    <a href="#" >Chủ đề</a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={rank_menu}>
                                    <a href="#" >BXH</a>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={album_menu}>
                                    <Link to="/album">Album</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={music_video_menu}>
                                    <Link to="/video">Video</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Dropdown overlay={artist_menu}>
                                    <Link to="#">Nghệ sỹ</Link>
                                </Dropdown>
                            </li>
                            <li>
                                <a onClick={e => e.preventDefault()}>
                                    <span><img alt='VIP' src='/icons/icon-vip.png'></img></span>
                                    <span>VIP</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderX;