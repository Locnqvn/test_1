import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, notification } from 'antd';
import FormCreate from './form-create-album.jsx';
import getListAlbum from '../../../api/album';
import FormEdit from './form-edit-album';
import Confirmation from './ModalConfirmDelete';
import album from '../../../api/album';
import { Redirect, Link } from 'react-router-dom'
import { EditOutlined , DeleteOutlined} from "@ant-design/icons"
import './style.scss';
const ListAlbum = ({ moderatorToken }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const [isShowModalEdit, setIsShowModalEdit] = useState(false);

    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);

    const [data, setData] = useState([]);

    const [filterAlbum, setFilterAlbum] = useState(
        {
            sort: 0,
            page: 0,
            limit: 0
        }
    );

    const [indexSelected, setIndexSelected] = useState(0);

    const [recordSelected, setRecordSelected] = useState({});

    const showModal = () => {
        setIsShowModal(true);
    }

    const handleOk = e => {
        console.log(e);
        setIsShowModal(false);
    };

    const handleCancel = e => {
        console.log(e);
        setIsShowModal(false);
    }

    const handleEditClick = (index, record) => {
        setIsShowModalEdit(true);
        setIndexSelected(index);
        setRecordSelected(record);

    }

    const handleDeleteClick = (index, record) => {
        setIsShowModalConfirm(true);
        setIndexSelected(index);
        setRecordSelected(record);
    }

    const[imagePath, setImagePath] = useState("");

   
    // data.dataDisplay ? data.dataDisplay.cover_image.path
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
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name > b.name,
                multiple: 6,
            }

        },
        {
            title: 'Thể loại',
            dataIndex: 'category',
            key: 'category',
            sorter: {
                compare: (a, b) => a.category > b.category,
                multiple: 5,
            }
        },
        {
            title: 'Ca sỹ',
            dataIndex: 'singer',
            key: 'singer',

        },
        {
            title: 'danh sách bài hát',
            dataIndex: 'song',
            key: 'song',

        },
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record, index) => {
                // console.log(index);
                console.log(record);
                return (
                    <Space size="middle">
                        <Button onClick={() => handleEditClick(index, record)}>
                            <Link to={{
                                pathname: `/admin/albums/detail/${record.name}`,
                                state: {
                                    album: record,
                                }
                            }} >
                                <EditOutlined />
                            </Link>
                        </Button>
                        <Button style = {{borderColor:'#ff4d4f',background: '#ff4d4f'}} onClick={() => handleDeleteClick(index, record)}>
                            <DeleteOutlined />
                        </Button>
                    </Space>
                )
            },
        },
    ];

    


    const getAlbums = async () => {
        const rp = await getListAlbum.getListAlbum(filterAlbum);
        setData(rp);
        if(data.dataDisplay){
            setImagePath(data.dataDisplay.cover_image.path)
        }
    }

    useEffect(() => {
        console.log("data album: ", data.data);
        getAlbums()
    }, []);

    const onHandleShowModal = (e) => {
        setIsShowModalEdit(e);
    }

    const onHandleShowModalConfirm = (value) => {
        setIsShowModalConfirm(value);
    }

    const deleteAlbum = async (id) => {
        debugger
        let { data } = await album.deleteAlbumById(id, moderatorToken);
        if (data) {
            if (data.status === 1) {
                notification.success({ message: "Xóa thành công" });
                setTimeout(() => window.location.reload(), 1000);
            }
        }
    }

    console.log(data.data);

    return (<div>
        <h1>Danh sách Album </h1>
        <Button type="primary" onClick={showModal} style={{float: 'right'}}>Tạo mới album</Button>
        <br></br>
        <Table columns={columns} dataSource={data.dataDisplay} />
        <Modal
            width={1000}
            title="Add Album"
            visible={isShowModal}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <FormCreate token={moderatorToken} />
        </Modal>
        {/* <FormEdit
            isShowModal={isShowModalEdit}
            setIsShowModal={onHandleShowModal}
            indexOfRecord={indexSelected}
            data={data.data}
            token={moderatorToken} /> */}

        {/* modal xoa */}
        <Confirmation
            isShowModal={isShowModalConfirm}
            setIsShowModal={onHandleShowModalConfirm}
            indexOfRecord={indexSelected}
            data={data.data}
            deleteAlbum={deleteAlbum}
        />

    </div>);
}
export default ListAlbum;