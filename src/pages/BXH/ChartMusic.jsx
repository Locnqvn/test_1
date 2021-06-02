import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class ChartMusic extends Component {
    render() {
        var { item, index } = this.props;
        var specClass = 'chart_tw';
        var rankChangeClass = 'chart_lw';
        var rankFlag = 0;

        if (index === 0) specClass += ' special-1';
        else if (index === 1) specClass += ' special-2';
        else if (index === 2) specClass += ' special-3';

        if (item.rankChange > 0) { rankChangeClass += ' up'; rankFlag=1; }
        else if (item.rankChange === 0) rankChangeClass += ' equal';
        else if (item.rankChange > -50) { rankChangeClass += ' down'; rankFlag=1; }
        else { rankChangeClass += ' new'; rankFlag=-1; }

        return(
            <div className="sub-chart">
                <span className={specClass}>
                    {index + 1}
                </span>
                <span className={rankChangeClass}>
                    <span className="icon"></span>
                    { rankFlag > 0 && <p>{ item.rankChange }</p> }
                    { rankFlag < 0 && <p>MỚI</p> }
                </span>
                <div className="box_info_field">
                    {/* <Link to="/play" title="">
                        <img src={require('../../musicPic/' + item.path)} alt=" "></img>
                    </Link> */}
                    <div className="infor">
                        <Link to="/play" title="" className="name_song">{ item.song }</Link>
                        { 
                            item.name.map((i, key) => {
                                return <Link to="#" title="" className="list_name_singer" key={key}>{ i }</Link>
                            })
                        }
                    </div>
                </div>
                <div className="box_info_more_week">
                    <Link to="#" title="Vị trí xếp hạng cao nhất" className="peak_position">
                        <span></span>
                        { item.rankMax }
                    </Link>
                    <Link to="#" title="Vị trí trên BXH tuần trước" className="last_weeks_position">
                        <span></span>
                        { item.rankLastWeek }
                    </Link>
                    <Link to="#" title="Số tuần nằm trong BXH" className="weeks_on_chart">
                        <span></span>
                        { item.numOfWeeks }
                    </Link>
                </div>
                <div className="box_song_action">
                    <Link to="#" title="Thêm bài hát Tự Tâm vào playlist yêu thích" className="button_add_playlist">
                    </Link>
                    <Link to="/play" title="Nghe bài hát Tự Tâm" className="button_playing">
                    </Link>
                </div>
            </div>
        );
    }
}

export default ChartMusic;