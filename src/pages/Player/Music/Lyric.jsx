import React, { useState, useEffect } from 'react';


const Lyric = ({song}) => {
    return ( 
    <div className="box-lyric">
        <h1 className="hd-white">{song && song.name}</h1>
        <h3 className="hd-white"> tên Ca sỹ</h3>

        <p className="hd-white" style={{fontSize: '15px', fontWeight: 'bold', margin: '30px 0px'}}>
            Lời bài hát
            <br/>
            {song && song.lyric}
        </p>
    </div> );
}
 
export default Lyric;