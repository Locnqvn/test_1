import React , {useState, useRef} from 'react';
import { Carousel, Col, Row } from 'antd';
import './Content.scss';
import Slider from "react-slick";

import { PlayCircleOutlined } from '@ant-design/icons';

function PartnerSlide() {

    const settings_partner = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    

    const arrData = ["/images/vng.jpg","/images/mtp.jpg","/images/pnc.jpg", "/images/vcpmc.jpg", "/images/universal.jpg", "/images/thang_long.jpg", "/images/ht.jpg"];


    return (
        <div className="partner-slide">
            <h1 className="hd-white">Đối Tác</h1>
            <div>
                <Slider {...settings_partner}>
                    {
                        arrData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a><img  src={item}></img></a>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </div>
    )
}


export default PartnerSlide;