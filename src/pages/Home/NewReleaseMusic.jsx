import React, { useState, useEffect } from 'react';

const NewReleaseMusic = ({ props }) => {

    
    return (
        <div class='new-release-music'>
            <h1 className="hd-white">Bài hát mới phát hành</h1>
            <hr></hr>
            <ul className="new-music-list">
                <li className="new-music-card">
                    <a href="">
                        <img src='/images/637.jpg' />
                    </a>
                    <div>
                        <h3>I'LL NEVER FALL IN LUV AGAIN</h3>
                        <p>Mr.A, Dương Edward</p>
                    </div>
                </li>

                <li className="new-music-card">
                    <a href="">
                        <img src='/images/637.jpg' />
                    </a>
                    <div>
                        <h4>I'LL NEVER FALL IN LUV AGAIN</h4>
                        <p>Mr.A, Dương Edward</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default NewReleaseMusic;