import React, { useState } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';


const data = [
    {
        title: 'Title 1',
        amount: '12'
    },
    {
        title: 'Title 2',
        amount: '12'
    },
    {
        title: 'Title 3',
        amount: '12'
    },
    {
        title: 'Title 4',
        amount: '12'
    },
    {
        title: 'Title 5',
        amount: '12'
    },
    {
        title: 'Title 6',
        amount: '12'
    },

];

const onSelectSong = (item) => {
    console.log("title item: ", item.title);
}

const ListPlayerAlbum = ({listPlayer}) => {


    return (
        <div className="list-player-album">
            <div className="title-list-album">
                <p className="tl">Danh sách bài hát</p>
                <p className="amount-s"> 4 bài hát</p>

            </div>
            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    // loadMore={handleInfiniteOnLoad}
                    // hasMore={!this.state.loading && this.state.hasMore}
                    useWindow={false}
                >
                    <List
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.id} style={{background: '#21324a'}}>
                                <List.Item.Meta
                                style={{width: '100%', padding: '5px'}}
                                    avatar={
                                        <img width="80%" src="https://109cdf7de.vws.vegacdn.vn/jXitUPK9cvjCkkVYrFPL/60x60x1607101200/v1/album/s4/0/0/0/124.jpg?v=1607101200" />
                                    }
                                    title={<p onClick={() => onSelectSong(item)} className="item-lpa" >{item.title}</p>}
                                    description={<p style={{color: 'white',margin:'0px'}}>{item.amount}</p>}
                                />
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>


        </div>);
}

export default ListPlayerAlbum;