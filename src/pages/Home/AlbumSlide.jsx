import React, {useState, useEffect} from 'react';
import { Carousel, Col, Row } from 'antd';
import albumAPI from '../../api/album';
import './Content.scss';
import Slider from "react-slick";


function AlbumSlide() {

    const arrData = ["/images/371.jpg", "/images/371.jpg", "/images/371.jpg"];

    const settings_playlist = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
    };

    // Nếu onHome thì chỉ gen ra 1 số lượng nhất định cardAlbum
    const [listAlbum, setListAlbum] = useState([]);

    useEffect(() => {
        rechieveAlbum();
    }, []);

    const rechieveAlbum = async () => {
        let {data} = await albumAPI.getAlbumList(1, 7);
        if(data.success)
            setListAlbum(data.results);
    }

    return (
        <div className='playlist'>
            <h1 className="hd-white">Playlist cho hôm nay</h1>
            <Slider {...settings_playlist}>
                {listAlbum.map((item, index) => {
                    return (
                        <div className="playlist-slider-item">
                            <a href='#'><img width='100%' key={index} src={item.cover_image ? item.cover_image.path : "https://admin.yersin.edu.vn//images/images/yersin/news/NoImage.jpg"}></img></a>
                        </div>
                    )

                })}
                {listAlbum.length < 6 ? arrData.map((item, index) => {
                    return (
                        <div className="playlist-slider-item">
                            <a href='#'><img width='100%' key={index} src={item}></img></a>
                        </div>
                    )

                }) : ''}

            </Slider>
        </div>
    )
}

export default AlbumSlide;