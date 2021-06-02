import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import {
    PlayCircleOutlined,
    RetweetOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
    RollbackOutlined,
    PauseCircleOutlined,
    SoundOutlined
} from '@ant-design/icons';
import handleTime from '../../../utils/handleTime';


const initialControl = {
    url: "",
    playing: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    loop: false
}

const VideoPlayer = ({video}) => {


    return (
        <div className="card-video">
            <ReactPlayer
                //   ref={playerRef}
                width='100%'
                height='100%'
                url={video.path}
                controls
                // playing={controls.playing}
                // light={controls.light}
                // loop={controls.loop}
                // volume={controls.volume}
                // muted={controls.muted}
                // onReady={() => console.log('onReady')}
                // onStart={() => console.log('onStart')}
                // onBuffer={() => console.log('onBuffer')}
                // onSeek={e => console.log('onSeek', e)}
                // onEnded={handleEnded}
                // onError={e => console.log('onError', e)}
                // onDuration={handleDuration}
                // onProgress={handleProgress}
            />
        </div>);
}

export default VideoPlayer;