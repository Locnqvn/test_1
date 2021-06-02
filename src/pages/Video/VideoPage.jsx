import React, { useState, useEffect } from 'react';
import {Row, Col, Pagination } from 'antd';
import ListVideo from './ListVideo';

const initialPaging = {
    page: 1,
    limit: 20,
    prevPage: 1,
    total: 50,
}

const VideoPage = () => {

    const [paging, setPaging] = useState(initialPaging);


    const onChangePaging = (p, l) => {
        setPaging({...paging, page: p, limit: l});
    }

    const onTotal = (value) => {
        console.log("total video: ", value);
        setPaging({...paging, total: value});
    }

    return (<div className="content-side">
        <Row gutter={24}>
            <Col xs={2} sm={4} md={4} lg={4} xl={4} />
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <ListVideo onHome={false} page={paging.page} limit={paging.limit} setTotal={onTotal}/>
            </Col>
        </Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} />
        <div className="pagination">
            <Pagination defaultCurrent={1} total={paging.total} pageSize={paging.limit} prevPage={paging.prevPage} onChange={onChangePaging}/>
        </div>
    </div>);
}

export default VideoPage;