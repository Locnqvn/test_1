import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Table, Tag, Space, Button, notification, Modal, Select } from 'antd';
import songAPI from '../../../api/song';
import { EditOutlined , DeleteOutlined} from "@ant-design/icons"
import './style.scss';
import ModalDelete from './ModalDelete';


const inititalSong = {
  _id: null,
  name: '',
  cover_image: null,
  file: null,
  type: '',
  lyric: '',
  description: '',
  musican: [],
  categories: [],
  singers: [],
  shares: 0,
  views: 0,
  favorites: 0,
  createDate: '',
  modifiedDate: '',
  createBy: '',
  modifiedBy: '',
}



const ListSong = ({ moderatorToken }) => {

  const history = useHistory();
  const [songs, setSongs] = useState([inititalSong]);
  const [paging, setPaging] = useState({ current: 1, pageSize: 10, total: 100, defaultCurrent: 1 });
  const [filters, setFilters] = useState(null);
  const [sorter, setSorter] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);
  const [recordSelected, setRecordSelected] = useState({});

  useEffect(() => {
    fetchSongs();
  }, [paging.current, paging.pageSize, filters])


  const fetchSongs = async () => {
    let { data } = await songAPI.getSongs(paging.current, paging.pageSize, filters ? filters.type : null);
    setSongs(data.results);
    setPaging({ ...paging, total: data.total });
    console.log("data song: ", data.results);

  }

  const onChangePage = (p, l) => {
    setPaging({ ...paging, page: p });
  }


  const configPagination = {
    total: paging.total,
    defaultCurrent: 1,
    pageSize: paging.pageSize,
    page: paging.page,
    onChange: onChangePage
  }


  const columns = [
    {
      title: 'Ảnh bìa',
      dataIndex: 'cover_image',
      key: 'cover_image',
      render: cover_image => <div className="image-list-item">
        <img className="image-item" src={cover_image ? cover_image.path : "https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg"} />
      </div>,
    },
    {
      title: 'Tên bài hát',
      dataIndex: 'name',
      width: '20%',
      key: 'name',
      render: (name, record) => <Link to={{
        pathname: `/admin/songs/${name}`,
        state: { song: record }
      }} >{name}
      </Link>
    },
    {
      title: 'Type',
      key: 'type',
      width: 90,
      dataIndex: 'type',
      filters: [
        { text: 'Video', value: 'MV' },
        { text: 'Audio', value: 'MA' },
      ],
      render: type => {
        let color = (type == "MV" ? 'volcano' : 'green');
        return (
          <Tag color={color} key={type}>
            {type}
          </Tag>
        );
      }
    },
    {
      title: 'Thể hiện',
      key: 'singers',
      width: '10%',
      dataIndex: 'singers',
      render: singers => singers ? singers.map((singer, index) => {
        let obj = JSON.parse(singer);
        return <a>{obj && obj.name ? obj.name : ''} </a>
      }) : ''
    },
    {
      title: 'Thể loại',
      dataIndex: 'categories',
      key: 'categories',
      width: '10%',
      render: categories => categories ? categories.map((cate) => {
        let obj = JSON.parse((cate));
        return (
          <a>{obj && obj.name ? obj.name : ''} <br /> </a>
        )
      }) : ''
    },
    {
      title: 'Lượt xem',
      dataIndex: 'views',
      key: 'views',
    },
    {
      title: 'Lượt thích',
      dataIndex: 'favorites',
      key: 'favorites',
    },
    {
      title: 'Lượt chia sẻ',
      dataIndex: 'shares',
      key: 'shares',
    },

    {
      title: 'Action',
      key: 'index',
      render: (text, record, index) => {
        return (
          <Space size="middle">
            <Button type="danger" onClick={() => handleDeleteClick(index, record)}>
              <DeleteOutlined />
            </Button>
          </Space>

        )
      },
    },
  ];

  const handleDeleteClick = (index, record) => {
    setIsShowModalConfirm(true);
    setIndexSelected(index);
    setRecordSelected(record);
  }

  const onDeleteSong = async (songId) => {
    try {
      let { data } = await songAPI.deleteSongById(songId, moderatorToken);
      if (data && data.status == 1) {
        notification.success({ message: "Xóa bài hát thành công!" });
        setTimeout(() => window.location.reload(), 1000);
      }
      else
        notification.error({ message: "Có lỗi xảy ra!" });
    } catch (e) {
      notification.error({ message: e.response.data.message });
    }

  }

  const onHandleShowModalConfirm = (value) => {
    setIsShowModalConfirm(value);
  }


  const handleTableChange = (pagination, filters, sorter) => {
    setPaging({ ...pagination });
    setFilters({ ...filters });
    setSorter({ ...sorter });
    console.log(filters.type);
  }

  const onNewSong = (e) => {
    e.preventDefault();
    history.push('/admin/songs/new');
  }

  return (
    <div>
      <h2>Danh sách các bài hát</h2>
      <Button type="primary" style={{ float: "right" }} onClick={onNewSong}>Tạo mới</Button>
      <Table
        columns={columns}
        dataSource={songs}
        pagination={configPagination}
        onChange={handleTableChange}
      />
      <p>Tối đa một trang:</p>
      <Select
        labelInValue
        defaultValue={{ value: paging.pageSize }}
        style={{ width: 120 }}
        onChange={(value) => {
          console.log("limit: ", value);
          setPaging({...paging, pageSize: value.value});
        }}
      >
        <Select.Option value="5">5</Select.Option>
        <Select.Option value="10">10</Select.Option>
        <Select.Option value="20">20</Select.Option>
        <Select.Option value="50">50</Select.Option>
      </Select>
      {/* modal xoa */}
      <ModalDelete
        isShowModal={isShowModalConfirm}
        setIsShowModal={onHandleShowModalConfirm}
        indexOfRecord={indexSelected}
        data={songs}
        deleteSong={onDeleteSong}
      />

    </div>);
}

export default ListSong;