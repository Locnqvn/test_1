import React, { Component } from 'react';
import ChartMusic from './ChartMusic';
import { Link } from 'react-router-dom';


import './style.css';
const BXHVietNam = {
    title: 'BẢNG XẾP HẠNG BÀI HÁT VIỆT NAM',
    des: 'Bảng Xếp Hạng NhacCuaTui cập nhật vào thứ Hai hàng tuần dựa trên số liệu thống kê thực tế trên desktop và mobile NhacCuaTui. Trong đó những trọng số quan trọng quyết định thứ hạng TOP 20 như sau: Nghe, Thích, Bình Luận, Chia sẻ, Tải v.v... Mỗi tương tác của người dùng đều tác động đến kết quả cuối cùng của BXH NhacCuaTui. ',
    list: [
        {song: 'Tự Tâm', name: ['Nguyễn Trần Trung Quân'], path: 'm_1.jpg', rankChange: 0, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Cô Thắm Không Về', name: ['Phát Hồ, ', 'Jokes Bii, ', 'Thiện'], path: 'm_2.jpg', rankChange: 1, rankMax: 2, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Em Muôn Ta Là Gì', name: ['Thanh Hưng Idol'], path: 'm_3.jpg', rankChange: -1, rankMax: 2, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Từng Yêu', name: ['Phan Duy Anh'], path: 'm_4.jpg', rankChange: 0, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Đi Đu Đi Đưa', name: ['Bích Phương'], path: 'm_5.jpg', rankChange: 1, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Hongkong 12', name: ['Nguyễn Trọng Tài, ', 'MC 12'], path: 'm_6.jpg', rankChange: -1, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Nghe Nói Anh Sắp Kết Hôn', name: ['Văn Mai Hương, ', 'Bùi Anh Tuấn'], path: 'm_7.jpg', rankChange: 0, rankMax: 5, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Hãy Trao Cho Anh', name: ['Sơn Tùng MTP, ', 'Snoop Dogg'], path: 'm_8.jpg', rankChange: 0, rankMax: 4, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Xiêu Lòng', name: ['Phạm Quỳnh Anh'], path: 'm_9.jpg', rankChange: 3, rankMax: 2, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Anh Đưa Em Về', name: ['Tia Hải Châu, ', 'Lê Thiện Hiếu'], path: 'm_10.jpg', rankChange: 0, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Nàng Thơ', name: ['Masew, ', 'Ý Tiên'], path: 'm_11.jpg', rankChange: 0, rankMax: 2, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'So Close', name: ['Binz, ', 'Phương Ly'], path: 'm_12.jpg', rankChange: -3, rankMax: 3, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Kết Thúc Thôi Chuyện Của Mình', name: ['Hồ Thiện Quân'], path: 'm_13.jpg', rankChange: -99, rankMax: 6, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Bạn Tình Ơi', name: ['Yunni Boo, ', 'Goctoi Mixer'], path: 'm_14.jpg', rankChange: 5, rankMax: 2, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Mượn Rượu Tỏ Tình', name: ['BigDaddy, ', 'Emily'], path: 'm_15.jpg', rankChange: -2, rankMax: 3, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Cao Ốc 20', name: ['B Ray, ', 'Emily'], path: 'm_16.jpg', rankChange: 0, rankMax: 2, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Từng Yêu', name: ['Phan Duy Anh'], path: 'm_4.jpg', rankChange: 0, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Đi Đu Đi Đưa', name: ['Bích Phương'], path: 'm_5.jpg', rankChange: 1, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Hongkong 12', name: ['Nguyễn Trọng Tài, ', 'MC 12'], path: 'm_6.jpg', rankChange: -1, rankMax: 1, rankLastWeek: 1, numOfWeeks: 4},
        {song: 'Nghe Nói Anh Sắp Kết Hôn', name: ['Văn Mai Hương, ', 'Bùi Anh Tuấn'], path: 'm_7.jpg', rankChange: 0, rankMax: 5, rankLastWeek: 1, numOfWeeks: 4}
    ]

}

class BXH extends Component {
    constructor() {
        super();
        
        this.state = { listBXH: BXHVietNam } 
    }

    generate(list) {
        var result = list.map((item, index) => {
            return <ChartMusic item={item} index={index} key={index}/>
        })
        return result;
    }

    render() {
        return(
            <React.Fragment>
                <div className="box_top_search">
                    <ul className="search_control_select">
                        <li>
                            <Link to="#" title="Bảng Xếp Hạng Việt Nam" className="active">Việt Nam</Link>
                        </li>
                        <li>
                            <Link to="#" title="Bảng Xếp Hạng Âu Mỹ">Âu Mỹ</Link>
                        </li>
                        <li>
                            <Link to="#" title="Bảng Xếp Hạng Hàn Quốc">Hàn Quốc</Link>
                        </li>
                    </ul>
                </div>
                <div className="tile_box_key">
                    <h1 className="nomore">{ this.state.listBXH.title }</h1>
                    <div className="btn_view_select">
                        <Link to="#" title="Bảng Xếp Hạng Bài Hát Việt Nam" className="active">
                            Bài hát
                        </Link>
                        <span></span>
                        <Link to="#" title="Bảng Xếp Hạng Video Việt Nam">
                            Video
                        </Link>
                    </div>
                </div>
                <div className="descriptionBXH">{ this.state.listBXH.des }</div>
                <div className="list_chart_page">
                    <div className="box_view_week">
                        <Link to="#" className="prev" title="Bảng xếp hạng tuần trước"></Link>
                        <h2><strong>Tuần 47</strong> (18/11/2019 - 24/11/2019)</h2>
                        <Link to="#" className="next" title="Bảng xếp hạng tuần kế tiếp" style={{display: 'none'}}></Link>
                        <Link to="#" className="active_play" title="Nghe Toàn Bộ"><span className="icon_playall"></span>Nghe Toàn Bộ</Link>
                    </div>
                    <div className="list_show_chart">
                        { this.generate(this.state.listBXH.list) }
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BXH;