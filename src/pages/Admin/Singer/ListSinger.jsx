import React, { useState, useEffect } from 'react';
import { Table, Tag, Space,Image, AutoComplete, Pagination,notification } from 'antd';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import singerAPI from '../../../api/singer';
import Confirmation from './ModalConfirmDelete';
import FormEdit from './form-edit-singer';
import { EditOutlined , DeleteOutlined} from "@ant-design/icons"
import './style.scss';



const ListSinger = ({moderatorToken}) => {
    const history = useHistory();
    const [singer, setSinger] = useState([]);
    const [paging, setPaging] = useState({current: 1, pageSize: 5, total: 100, defaultCurrent: 1});
    const [filters, setFilters] = useState();
    const [sorter, setSorter] = useState();
    const [indexSelected, setIndexSelected] = useState(0);
    const [recordSelected, setRecordSelected] = useState({});
    const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const onHandleShowModal = (e) => {
            setIsShowModalEdit(e);
        }
   
    useEffect(() => {
        getSinger();
        
}, [paging.current]);
 
    // const [age,setAge] = useState([]);
    // console.log("data: ", singer.data);
    const columns = [
        
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            
            render: avatar => ( 

            <Image width={40} height={40} src={avatar ? avatar.path : 'https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image-620x600.jpg'}/>),
            
        },
        
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        

        },
        {
            title: 'giới tính',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
          
            title: 'Tuổi',
            dataIndex: 'age',
            key: 'age',
            render: age => <span>{age != null ? age : ''}</span>
           
        },
        {
            title: 'Lượt thích',
            dataIndex: 'favorites',
            key: 'favorites',

        },
        
        
        {
            title: 'Hành động',
            key: 'action',
            render: (text, record, index) => {
                // console.log("index", index);
                // console.log("record:", record.age);
                return (
                    <Space size="middle">
                        <Button onClick={() => handleEditClick(index, record)}> 
                            <EditOutlined /> 
                        </Button>
                        <Button style = {{borderColor:'#ff4d4f',background: '#ff4d4f'}} onClick={() => handleDeleteClick(index, record)}> 
                            <DeleteOutlined />
                        </Button>
                    </Space>
                )
            },
        },
    ];

    


    const getSinger = async () => {
        console.log("data singers : ");
        const {data} = await singerAPI.getAllSinger(paging.current, paging.pageSize);
    
        
        setSinger(data.data);
        // console.log("singer: ", singer.result)
    }
// console.log("mode: ", moderatorToken);
    const onChangePaging = (page, limit) => {
        setPaging({...paging, page: page});
    }
    const handleTableChange = (pagination, filters, sorter) => {
        // console.log("pagi: ", pagination);
        setPaging({...pagination});
        setFilters({...filters});
        setSorter({...sorter});

    }
    const configPagination = {
        total: 50,
        defaultCurrent: 1,
        pageSize: paging.pageSize,
        page: paging.page,
        onChange: onChangePaging
    }
    const handleEditClick = (index, record) => {
        setIsShowModalEdit(true);
        setIndexSelected(index);
        setRecordSelected(record);
    }
    const handleDeleteClick = async (index, record) => {
        setIsShowModalConfirm(true);
        setIndexSelected(index);
        setRecordSelected(record);
        // console.log("record id: ",record._id);
    }
    const onHandleShowModalConfirm = (value) => {
        setIsShowModalConfirm(value);
    }
    const deleteSinger = async (id) => {
        let {data} = await singerAPI.deleteSingerById(id, moderatorToken);
        console.log("data status: ",data.status);
        if(data){
            if(data.status === 1){
                notification.success({message: "Xóa thành công"});
                setTimeout(() => window.location.reload(), 1000);
            }
        }
    }
    const onNewSinger = (e) => {
        e.preventDefault();
        history.push('/admin/singers/new');
    }
    return ( <div>
        <h1>Danh sách ca sĩ</h1>
        <div className='right-pos'> 
          <Button type="primary" onClick = {onNewSinger}> Thêm ca sĩ</Button>
        </div>
        
        <Table columns={columns} dataSource={singer} pagination={configPagination} onChange={handleTableChange} />

        <FormEdit
            isShowModal={isShowModalEdit}
            setIsShowModal={onHandleShowModal}
            indexOfRecord={indexSelected}
            data={singer} 
            token={moderatorToken}/>
        <Confirmation
            isShowModal={isShowModalConfirm}
            setIsShowModal={onHandleShowModalConfirm}
            indexOfRecord={indexSelected} data={singer}
            deleteSinger={deleteSinger}
        />
       
    </div> );
}

export default ListSinger;