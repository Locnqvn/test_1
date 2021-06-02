import { Space, Table, Button, Modal, Form, Input, Checkbox, Select, notification } from 'antd';
import { useEffect, useState } from 'react';
import categoryApi from '../../../api/category';
import songApi from '../../../api/song';
import singerApi from '../../../api/singer';
import albumApi from '../../../api/album';
import album from '../../../api/album';
import ImageUpload from '../../Admin/Song/ImageUpload';
import { useHistory, useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';


const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const initialAlbum = {
    categories: [],
    description: "thien nhac",
    name: "Nhac Thien",
    singers: [],
    songs: []
}


const DetailAlbum = ({ moderatorToken }) => {

    const location = useLocation();

    const history = useHistory();

    const [listCategory, setListCategory] = useState({});
    const [listSinger, setListSinger] = useState({});
    const [listSong, setListSong] = useState({});
    const [image, setImage] = useState({});
    const [albumInfo, setAlbumInfo] = useState({});
    const [albumDisplay, setAlbumDisplay] = useState({ initialAlbum });
    const { TextArea } = Input;

    const setAlbum = () => {
        setAlbumDisplay(location.state.album);
    }

    // submit form
    const onFinish = async (values) => {
        let formDataImage = new FormData();
        formDataImage.append("cover_image", image);


        const { data } = await album.editCoverImage(location.state.album.id, formDataImage, moderatorToken);
        const res = await album.editAlbum(location.state.album.id, moderatorToken, values);
        debugger

        if (data.status == 1 && res.data.status == 1) {
            notification.success({ message: "edit successfully" });
        } else {
            notification.warning({ message: "something went wrong, please try again" });
        }
        setTimeout(() => {
            history.push({
                pathname: "/"
            })
        }, 1000);

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


    // categories
    const [selectedCategory, setSelectedCategory] = useState([]);
    const OPTIONS1 = !isEmpty(listCategory) ? listCategory.data.data.map(item => item) : [];
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
                placeholder="Inserted are removed"
                onChange={handleChange}
                style={{ width: '100%' }}
                value={location.state.album.category}
            >
                {filteredOptions.map(item => (
                    <Select.Option key={item._id} value={item._id}>
                        {item.name}
                    </Select.Option>
                ))}
            </Select>
        );
    }

    // singers
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
                placeholder="Inserted are removed"
                value={location.state.album.singer}
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


    // songs
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
                placeholder="Inserted are removed"
                value={location.state.album.song}
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

    const handleAsync = async () => {
        setAlbum();

        let tmp1 = await categoryApi.getAllCategory();
        let tmp2 = await songApi.getAllSongAsync();
        let tmp3 = await singerApi.getAllSingerAsync();

        setListCategory(tmp1);
        setListSinger(tmp3);
        setListSong(tmp2);

    }
   

    const getName = (e) => {
        const name = e.target.value;
        setAlbumDisplay({ ...albumDisplay, name: name });
    }

    const setDescription = (e) => {
        const des = e.value;
        setAlbumDisplay({ ...albumDisplay, description: des });
    }

    const getImage = (e) => {
        const img = e;
        setImage(img);
    }

    const [inputDisplay, setInputDisplay] = useState("");

    useEffect(() => {
        handleAsync();
        setInputDisplay(location.state.album.name);
    }, []);

    return (<div>

        <Button onClick={() => {
            history.push({
                pathname: "/"
            })
        }}>Back</Button>
        <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input album\'s name!' }]}
            >
                <Input
                    name="albumName"
                    onChange={getName}
                    value={inputDisplay}
                    defaultValue={inputDisplay}
                />
            </Form.Item>

            <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: 'Please input category\'s name!' }]}
            >
                {category()}
            </Form.Item>

            <Form.Item
                label="Singers"
                name="singers"
                rules={[{ required: true, message: 'Please input singer\'s name!' }]}
            >
                {singers()}
            </Form.Item>

            <Form.Item
                label="Songs"
                name="songs"
                rules={[{ required: true, message: 'Please input song\'s name!' }]}
            >
                {songs()}
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false }]}
            // defaultValue={data ? data[indexOfRecord].description : ""}
            >
                <TextArea value={location.state.album.description} rows={6} onChange={setDescription} />
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
    </div>
    )
}

export default DetailAlbum;