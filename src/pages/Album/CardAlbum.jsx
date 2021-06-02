import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.scss';


const CardAlbum = ({album}) => {

    return (
        <div className="cardAlbum">
            <Link to={`albums/${album._id}`}>
                <img src={album.cover_image ? album.cover_image.path : "https://admin.yersin.edu.vn//images/images/yersin/news/NoImage.jpg"} alt="aa"/>
                <div className="card-content">
                    <p>{album.name}</p>
                </div>
            </Link>
           
        </div>
     );
}
 
export default CardAlbum;