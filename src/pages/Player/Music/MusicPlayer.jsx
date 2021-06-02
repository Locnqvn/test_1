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




const MusicPlayer = ({song}) => {

    const initialControl = {
        url: song.path,
        playing: true,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        loop: false
    }

    const [controls, setControls] = useState(initialControl);
    const playerRef = useRef();

    const handleEnded = () => {
        // Chỗ này xử lý next bài đối với album, nhạc thì có thể cho phát lại
        setControls({ ...controls, playing: controls.loop })
    }



    useEffect(() => {
    })

    


    const handleSeekMouseDown = e => {
        setControls({ ...controls, seeking: true });
    }

    const handleSeekChange = e => {
        setControls({ ...controls, played: parseFloat(e.target.value) });
    }

    const handleSeekMouseUp = e => {
        setControls({ ...controls, seeking: false })
        // playerRef.seekTo(parseFloat(e.target.value));
    }

    const handlePlayPause = () => {
        setControls({ ...controls, playing: !controls.playing })
    }

    const handleOnLoop = () => {
        setControls({ ...controls, loop: !controls.loop })
    }

    const handleVolumeChange = (e) => {
        setControls({ ...controls, volume: e.target.value })
    }

    const handleOnMuted = () => {
        setControls({ ...controls, muted: !controls.muted })
    }

    const handleProgress = (state) => {
        console.log("onprogress: ", state);
        if (!controls.seeking) {
            setControls({ ...controls, loaded: state.loaded, played: state.played })
        }
    }

    const handleDuration = (duration) => {
        console.log('onDuration: ', duration);
        setControls({ ...controls, duration: duration });
    }

    const Duration = (seconds, className) => {
        return (
            <time dateTime={`P${Math.round(seconds)}S`} className={className}>
                {handleTime.format(seconds)}
            </time>
        )
    }


    return (
        <div className="card-music">

            <div className="cover-image">
                <img src={song.cover_image ? song.cover_image.path : 'https://nicolasbrugneaux.me/web-player-react/dist/img/default.png'} alt="" />
            </div>

            {/* Info playing music */}

            <div className="cus-controls">
                <span className="c-played"><Duration seconds={controls.duration * controls.played} /></span>
                <input
                    type="range" min="0" max={0.999999} step='any'
                    className="c-progress"
                    value={controls.played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                />
                <span className="c-duration"><Duration seconds={controls.duration} /></span>
            </div>

            <div className="btn-controls">
                <ul>
                    <li><RetweetOutlined /></li>
                    <li><LeftCircleOutlined /></li>
                    {
                        controls.playing
                            ?
                            <li className="playing"><PauseCircleOutlined onClick={handlePlayPause} /></li>
                            :
                            <li className="playing"><PlayCircleOutlined onClick={handlePlayPause} /></li>
                    }
                    <li><RightCircleOutlined /></li>
                    <li className={controls.loop ? "c-on" : "c-off"}><RollbackOutlined onClick={handleOnLoop} /></li>
                </ul>
            </div>

            <div className="c-volume">
                <span
                    className={controls.muted ? "vol-off" : "vol-on"}
                ><SoundOutlined onClick={handleOnMuted} /></span>
                <input
                    type="range"
                    className={controls.muted ? "input-off" : "input-on"}
                    onChange={handleVolumeChange}
                    min={0} max={1} step='any'
                    value={controls.volume} />
            </div>

            <ReactPlayer
                //   ref={playerRef}
                className='react-player'
                width='100%'
                height='100%'
                url={song.path}
                playing={controls.playing}
                light={controls.light}
                loop={controls.loop}
                volume={controls.volume}
                muted={controls.muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onBuffer={() => console.log('onBuffer')}
                onSeek={e => console.log('onSeek', e)}
                onEnded={handleEnded}
                onError={e => console.log('onError', e)}
                onDuration={handleDuration}
                onProgress={handleProgress}
            />
        </div>);
}

export default MusicPlayer;