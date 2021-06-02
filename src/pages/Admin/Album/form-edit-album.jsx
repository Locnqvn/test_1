import { Space, Table, Button, Modal, Form, Input, Checkbox, Select, notification } from 'antd';
import { useEffect, useState } from 'react';
import Avatar from '../../Helper/Upload-image-preview.jsx';
import categoryApi from '../../../api/category';
import songApi from '../../../api/song';
import singerApi from '../../../api/singer';
import albumApi from '../../../api/album';
import album from '../../../api/album';
import ImageUpload from '../../Admin/Song/ImageUpload';

const FormEdit = ({ isShowModal, setIsShowModal, indexOfRecord, data, token }) => {

    const [listCategory, setListCategory] = useState({});
    const [listSinger, setListSinger] = useState({});
    const [listSong, setListSong] = useState({});

    const [image, setImage] = useState({});

    const [albumInfo, setAlbumInfo] = useState({});

    const [albumDisplay, setAlbumDisplay] = useState({});

    console.log(data);

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
        let formDataImage = new FormData();
        formDataImage.append("cover_image", image);

        await album.editCoverImage(data[indexOfRecord]._id, formDataImage, token);

        debugger;

        await album.editAlbum(data[indexOfRecord]._id, token, albumInfo);

        notification.success({ message: "edit successfully" });
        setTimeout(() => window.location.reload(), 1000);
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

    const [selectedCategory, setSelectedCategory] = useState([]);

    console.log(listCategory);
    console.log(listSong);
    console.log(listSinger);

    const OPTIONS1 = !isEmpty(listCategory) ? listCategory.data.data.map(item => item) : [];

    console.log(data);

    const category = () => {
        const handleChange = (value) => {
            setSelectedCategory(value);
            setAlbumInfo({ ...albumInfo, category: value })
        }
        const categoryValue = selectedCategory;
        const filteredOptions = OPTIONS1.filter(o => !categoryValue.includes(o));
        console.log(albumDisplay.categories);
        return (
            <Select
                mode="tags"
                placeholder=""
                onChange={handleChange}
                style={{ width: '100%' }}
                value={!isEmpty(albumDisplay) ? albumDisplay.categories : ["1"]}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item._id} value={item._id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    const [selectedSingers, setSelectedSingers] = useState([]);

    const OPTIONS2 = !isEmpty(listSinger) ? listSinger.data.data.map(item => item) : [];


    const singers = () => {
        const handleChange = (value) => {
            setSelectedSingers(value);
            setAlbumInfo({ ...albumInfo, singers: value })
        }
        const singersValue = selectedSingers;
        const filteredOptions = OPTIONS2.filter(o => !singersValue.includes(o));
        return (
            <Select
                mode="tags"
                placeholder=""
                value={singersValue}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item._id} value={item._id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    const [selectedSongs, setSelectedSongs] = useState([]);

    const OPTIONS3 = !isEmpty(listSong) ? listSong.data.results.map(item => item) : [];

    const songs = () => {
        const handleChange = (value) => {
            setSelectedSongs(value);
            setAlbumInfo({ ...albumInfo, musicList: value });
        }
        const songsValue = selectedSongs;
        const filteredOptions = OPTIONS3.filter(o => !songsValue.includes(o));
        return (
            <Select
                mode="tags"
                placeholder=""
                value={songsValue}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item._id} value={item._id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    useEffect(() => {
        if (!isEmpty(data)) {
            let temp = {
                name: data[indexOfRecord].name,
                categories: data[indexOfRecord].category,
                songs: data[indexOfRecord].musicList,
                singers: data[indexOfRecord].singers,
                description: data[indexOfRecord].description
            }

            if (!isEmpty(data[indexOfRecord].cover_image)) {
                temp.image = data[indexOfRecord].cover_image;
            }

            if (!isEmpty(listSong)) {
                temp.songs = temp.songs.map((value, index) => {
                    const tmp = listSong.data.results.filter(e => e._id === value).map(e => e.name);
                    return tmp[0];
                });
            }

            if (!isEmpty(listSinger)) {
                temp.singers = temp.singers.map((value, index) => {
                    const tmp = listSinger.data.data.filter(e => e._id === value).map(e => e.name);
                    return tmp[0];
                });
            }

            if (!isEmpty(listCategory)) {
                temp.categories = temp.categories.map((value, index) => {
                    const tmp = listCategory.data.data.filter(e => e._id === value).map(e => e.name);
                    return tmp[0];
                });
            }


            setAlbumDisplay(temp);

            debugger
        }
    }, [indexOfRecord, isShowModal, data]);

    const handleAsync = async () => {
        let tmp1 = await categoryApi.getAllCategory();
        let tmp2 = await songApi.getAllSongAsync();
        let tmp3 = await singerApi.getAllSingerAsync();

        setListCategory(tmp1);
        setListSinger(tmp3);
        setListSong(tmp2);

    }

    const getName = (e) => {
        const { text, value } = e.target;
        setAlbumInfo({ ...albumInfo, name: value });
    }



    // {
    //     name: data[indexOfRecord].name,
    //     category: ["1", "2"],
    //     singer: ["2", "1"],
    //     song: ["23"],
    //     description: data[indexOfRecord].description
    // }

    const setDescription = (e) => {
        setAlbumInfo({ ...albumInfo, description: e.target.value });
    }

    const getImage = (image) => {
        setImage(image);
        console.log(image);
    }

    useEffect(() => handleAsync(), []);

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
                rules={[{ required: true, message: 'Hãy nhập tên album\'s !' }]}
            >
                <Input
                    // value={!isEmpty(albumDisplay) ? albumDisplay.name : "1"}
                    // defaultValue={!isEmpty(albumDisplay) ? albumDisplay.name : "1"}
                    name="name"
                    onChange={getName} />
            </Form.Item>

            <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Hãy nhập thể loại Album\'s!' }]}
            >
                {category()}
            </Form.Item>

            <Form.Item
                label="Singers"
                name="singers"
                rules={[{ required: true, message: 'Hãy nhập tên ca sĩ!' }]}
            >
                {singers()}
            </Form.Item>

            <Form.Item
                label="Songs"
                name="songs"
                rules={[{ required: true, message: 'Hãy nhập tên các bài hát!' }]}
            >
                {songs()}
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false }]}
            // defaultValue={data ? data[indexOfRecord].description : ""}
            >
                <TextArea rows={6} onChange={setDescription} />
            </Form.Item>

            <Form.Item
                label="Avatar"
                name="avatar"
                rules={[{ required: false }]}
            >
                <ImageUpload onChange={getImage} previewUrl={image.path} />
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
                title="Edit Album"
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