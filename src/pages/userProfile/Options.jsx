import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

const Options = () => {

    const onChange = e => {
        console.log('checked = ', e.target.checked);
        // setState({
        //     checked: e.target.checked,
        // });
    };

    return (<div>
        <div class='liked-artist'>
            <div class='title'>
                <h1 class='color-white'>Nghệ Sỹ Yêu Thích</h1>
                <a class='color-white' href='#'><PlusCircleOutlined class='d' />Thêm nghệ sỹ yêu thích</a>

            </div>
            <div class='list-liked-artist'>
                <ul>
                    <li>
                        <a href='#'><img src='/images/default-avatar-artist.jpg'></img></a>
                        <h3 class='color-white'>Hồ  Ngọc Hà</h3>
                        <p class='color-wheat'>3,401 người yêu thích</p>
                    </li>
                    <li>
                        <a href='#'><img src='/images/default-avatar-artist.jpg'></img></a>
                        <h3 class='color-white'>Hồ  Ngọc Hà</h3>
                        <p class='color-wheat'>3,401 người yêu thích</p>
                    </li>
                    <li>
                        <a href='#'><img src='/images/default-avatar-artist.jpg'></img></a>
                        <h3 class='color-white'>Hồ  Ngọc Hà</h3>
                        <p class='color-wheat'>3,401 người yêu thích</p>
                    </li>

                </ul>
            </div>

        </div>
        <br></br>
        <div class='liked-music-type'>
            <h1 class='color-white'>Thể Loại Nhạc Yêu Thích</h1>
            <div class='list-music-type'>
                <ul>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>nhạc trẻ</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Trữ Tình</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Rock Việt</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Dân ca/ nhạc cổ</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>nhạc trẻ</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Thiếu nhi</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Việt remix</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Âu Mỹ</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Nhạc Hoa</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Nhạc Nhật</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}> <span class='color-white'>Nhạc Hàn</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Nhạc không lời</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Thể loại khác</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Nhạc cách mạng</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}><span class='color-white'>Quê Hương</span></Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={onChange}> <span class='color-white'>Rap/Hiphop Việt</span></Checkbox>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Options;