import React from 'react';
import { Carousel, Col, Row } from 'antd';
import './Content.scss';
import Slider from "react-slick";
import { PlayCircleOutlined } from '@ant-design/icons';
import TopContent from './TopContent';
import AlbumSlide from './AlbumSlide';
import PartnerSlide from './PartnerSlide';
import ListVideo from '../Video/ListVideo';
import ListAlbum from '../Album/ListAlbum';
import NewReleaseMusic from './NewReleaseMusic';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

    }

    onChange(a, b, c) {
        console.log(a, b, c);
        //this.slider.slickPlay();
    }


    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };

        const setTotal = (e) => {
            console.log('total: ', e);
        }

        return (
            <div className='content-side'>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={4} xl={4}>

                    </Col>
                    <Col xs={20} sm={16} md={12} lg={16} xl={16}>
                        <div className='wrapper'>
                            <TopContent />
                            <AlbumSlide />


                            <div className='main-content'>
                                <Row gutter={24}>
                                    <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                                        <div className='left-side'>
                                            <ListAlbum onHome={true} page={1} limit={16}/>
                                            <ListVideo onHone={true} page={1} limit={16} setTotal={setTotal}/>
                                            <NewReleaseMusic />
                                            <div className='top-artist'>
                                                <div>
                                                    <h1 className="hd-white" style={{margin: '5px'}}>Nghệ Sĩ Nổi Bật</h1>
                                                </div>
                                                <div>
                                                    <Row gutter={[16, 16]}>
                                                        <Col span={4}>
                                                            <a href='#'><img src='/images/37204.jpg'></img></a>
                                                        </Col>
                                                        <Col span={4}>
                                                            <a href='#'><img src='/images/215.jpg'></img></a>
                                                        </Col>
                                                    </Row>
                                                    <Row gutter={[16, 16]}>
                                                        <Col span={4}>
                                                            <a href='#'><img src='/images/37.jpg'></img></a>
                                                        </Col>
                                                        <Col span={4}>
                                                            <a href='#'><img src='/images/27685.jpg'></img></a>
                                                        </Col>
                                                        <Col span={4}>
                                                            <a href='#'><img src='/images/28.jpg'></img></a>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <div className='right-side'>
                                            <div className='title-music-rank'>
                                                <h1 className="hd-white">BXH Bài Hát</h1>
                                                <a>Việt Nam</a>
                                                <span> / </span>
                                                <a>Âu Mỹ</a>
                                                <span> / </span>
                                                <a>Hàn Quốc </a>
                                                <a href='#'><PlayCircleOutlined /></a>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className='music-rank'>
                                            <ul>
                                                <li>
                                                    <div className='rank'>
                                                        <span>7</span>
                                                    </div>
                                                    <a href='#'>
                                                        <h3>021</h3>
                                                        <p>Binz, Touliver</p>
                                                    </a>
                                                </li>
                                                <li>
                                                    <div className='rank'>
                                                        <span>10</span>
                                                    </div>
                                                    <a href='#'>
                                                        <h3>Stream đến bao giờ</h3>
                                                        <p>Độ Mixi</p>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className='title-MV-rank'>
                                            <div>
                                                <h1 className="hd-white">BXH MV</h1>
                                                <a>Việt Nam</a>
                                                <span> / </span>
                                                <a>Âu Mỹ</a>
                                                <span> / </span>
                                                <a>Hàn Quốc </a>
                                                <a href='#'><PlayCircleOutlined /></a>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>
                                                        <div className='rank'>
                                                            <span>1</span>
                                                        </div>
                                                        <a href='#'>
                                                            <h3>Thể Thái</h3>
                                                            <p>Hương Ly</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <PartnerSlide />
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={4} xl={4}>

                    </Col>
                </Row>
            </div>

        );
    }
}
export default Home;