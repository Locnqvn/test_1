import React, { useState, useEffect } from 'react';

import {PlusCircleOutlined, HeartOutlined, ShareAltOutlined} from '@ant-design/icons';

import './style.scss';

const BoxActions = ({song}) => {
    return ( 
    <div className="box-actions">
        <ul>
            <li><PlusCircleOutlined/></li>
            <li><HeartOutlined/></li>
            <li><ShareAltOutlined /></li>
        </ul>

    </div> );
}
 
export default BoxActions;