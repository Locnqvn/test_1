import { Space, Table, Button, Modal, Form, Input, Checkbox, Select, notification } from 'antd';
import { useEffect, useState } from 'react';

import singerApi from '../../../api/singer';

import ImageUpload from '../../Admin/Song/ImageUpload';

const FormEdit = ({ isShowModal, setIsShowModal, indexOfRecord, data, token }) => {

    // const [listCategory, setListCategory] = useState({});
    // const [listSinger, setListSinger] = useState({});
    // const [listSong, setListSong] = useState({});

    const [image, setImage] = useState({});

    const [singerInfo, setSingerInfo] = useState({});

    const { TextArea } = Input;

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const handleOk = () => {
        setIsShowModal(false);
    }

    const handleCancel = () => {
        setIsShowModal(false)
    }


    // submit form
    const onFinish = async (values) => {
        // console.log('Success:', values);
        let formDataImage = new FormData();
        formDataImage.append("avatar_image", image);

        await singerApi.editAvatar(data[indexOfRecord]._id, formDataImage, token)

        await singerApi.editSinger(data[indexOfRecord]._id, token, singerInfo);

        // if (data) {
        //     if (data.status === 1) {
        //         notification.success({ message: "edit successfully" });
        //         setTimeout(() => window.location.reload(), 1000);
        //     }
        // }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const isEmpty = (obj) => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    // const [selectedCategory, setSelectedCategory] = useState([]);

    // console.log(listCategory);
    // console.log(listSong);
    // console.log(listSinger);

    // const OPTIONS1 = !isEmpty(listCategory) ? listCategory.data.data.map(item => item) : [];

    // console.log(data);

    // const category = () => {
    //     const handleChange = (value) => {
    //         setSelectedCategory(value);
    //     }
    //     const categoryValue = selectedCategory;
    //     const filteredOptions = OPTIONS1.filter(o => !categoryValue.includes(o));
    //     return (
    //         <Select
    //             mode="tags"
    //             placeholder="Inserted are removed"
    //             //value={categoryValue}
    //             // value={inputDefaultValue.category}
    //             onChange={handleChange}
    //             style={{ width: '100%' }}
    //         >
    //             {filteredOptions.map(item => (
    //                 <Select.Option key={item._id} value={item._id}>
    //                     {item.name}
    //                 </Select.Option>
    //             ))}
    //         </Select>
    //     );
    // }

    // const [selectedSingers, setSelectedSingers] = useState([]);

    // const OPTIONS2 = !isEmpty(listSinger) ? listSinger.data.data.map(item => item) : [];


    // const singers = () => {
    //     const handleChange = (value) => {
    //         setSelectedSingers(value);
    //     }
    //     const singersValue = selectedSingers;
    //     const filteredOptions = OPTIONS2.filter(o => !singersValue.includes(o));
    //     return (
    //         <Select
    //             mode="tags"
    //             placeholder="Inserted are removed"
    //             value={singersValue}
    //             onChange={handleChange}
    //             style={{ width: '100%' }}
    //         >
    //             {filteredOptions.map(item => (
    //                 <Select.Option key={item._id} value={item._id}>
    //                     {item.name}
    //                 </Select.Option>
    //             ))}
    //         </Select>
    //     );
    // }

    // const [selectedSongs, setSelectedSongs] = useState([]);

    // const OPTIONS3 = !isEmpty(listSong) ? listSong.data.results.map(item => item) : [];

    // const songs = () => {
    //     const handleChange = (value) => {
    //         setSelectedSongs(value);
    //     }
    //     const songsValue = selectedSongs;
    //     const filteredOptions = OPTIONS3.filter(o => !songsValue.includes(o));
    //     return (
    //         <Select
    //             mode="tags"
    //             placeholder="Inserted are removed"
    //             value={songsValue}
    //             onChange={handleChange}
    //             style={{ width: '100%' }}
    //         >
    //             {filteredOptions.map(item => (
    //                 <Select.Option key={item._id} value={item._id}>
    //                     {item.name}
    //                 </Select.Option>
    //             ))}
    //         </Select>
    //     );
    // }

    // const handleAsync = async () => {
    //     let tmp1 = await categoryApi.getAllCategory();
    //     let tmp2 = await songApi.getAllSongAsync();
    //     let tmp3 = await singerApi.getAllSingerAsync();

    //     setListCategory(tmp1);
    //     setListSinger(tmp3);
    //     setListSong(tmp2);
    // }

    const getName = (e) => {
        const { text, value } = e.target;
        setSingerInfo({ ...singerInfo, name: value });
    }
    const getGender = (e) => {
        const { text, value } = e.target;
        setSingerInfo({ ...singerInfo, gender: value });
    }
    const getAge = (e) => {
        const { text, value } = e.target;
        setSingerInfo({ ...singerInfo, age: value });
    }
    
    const getfavorites = (e) => {
        const { text, value } = e.target;
        setSingerInfo({ ...singerInfo, favorites: value });
    }

    // {
    //     name: data[indexOfRecord].name,
    //     category: ["1", "2"],
    //     singer: ["2", "1"],
    //     song: ["23"],
    //     description: data[indexOfRecord].description
    // }

    const getImage = (image) => {
        setImage(image);
        console.log(image);
    }

    // useEffect(() => handleAsync(), []);

    const form = () => (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input singer\'s name!' }]}
            >
                <Input value={!isEmpty(singerInfo) ? singerInfo.name : ""} name="name" onChange={getName} />
            </Form.Item>

            <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: false}]}
            >
                <Input value={!isEmpty(singerInfo) ? singerInfo.gender : ""} name="gender" onChange={getGender} />
            </Form.Item>

            <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please input singer\'s age!' }]}
            >
                <Input value={!isEmpty(singerInfo) ? singerInfo.age : ""} name="age" onChange={getAge} />
            </Form.Item>

            <Form.Item
                label="Favorites"
                name="favorites"
                rules={[{ required: false }]}
            >
                <Input value={!isEmpty(singerInfo) ? singerInfo.favorites : ""} name="favorites" onChange={getfavorites} />
            </Form.Item>

            {/* <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false }]}
                defaultValue={data ? data[indexOfRecord].description : ""}
            >
                <TextArea rows={6} />
            </Form.Item> */}

            <Form.Item
                label="Avatar"
                name="avatar"
                rules={[{ required: false }]}
            >
                <ImageUpload onChange={getImage} />
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    )

    return (
        <div>
            <Modal
                width={1000}
                title="Edit Singer"
                visible={isShowModal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {form()}
            </Modal>
        </div>
    )
}

export default FormEdit;