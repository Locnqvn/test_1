import { Space, Table, Button, Modal, Form, Input, Checkbox, Select, notification } from 'antd';
import { useEffect, useState } from 'react';
import SelectWithHiddenSelectedOptions from '../../Helper/Selected-input-component.jsx';
import Avatar from '../../Helper/Upload-image-preview.jsx';
import categoryApi from '../../../api/category';
import songApi from '../../../api/song';
import singerApi from '../../../api/singer';
import ImageUpload from '../../Admin/Song/ImageUpload';
import albumApi from '../../../api/album';

const FormCreate = ({ token }) => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const { TextArea } = Input;

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

  const [listCategory, setListCategory] = useState({});
  const [listSinger, setListSinger] = useState({});
  const [listSong, setListSong] = useState({});

  const [image, setImage] = useState({});

  const OPTIONS1 = !isEmpty(listCategory) ? listCategory.data.data.map(item => item) : [];

  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleChangeCategory = (value) => {
    setSelectedCategory([...value]);
    console.log(selectedCategory);
  }

  const category = () => {
    const categoryValue = selectedCategory;
    const filteredOptions = OPTIONS1.filter(o => !categoryValue.includes(o));
    return (
      <Select
        mode="tags"
        placeholder="Inserted are removed"
        //value={categoryValue}
        // value={}
        onChange={handleChangeCategory}
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

  const [selectedSingers, setSelectedSingers] = useState([]);

  const OPTIONS2 = !isEmpty(listSinger) ? listSinger.data.data.map(item => item) : [];


  const handleChangeSinger = (value) => {
    setSelectedSingers(value);
  }
  const singers = () => {
    const singersValue = selectedSingers;
    const filteredOptions = OPTIONS2.filter(o => !singersValue.includes(o));
    return (
      <Select
        mode="tags"
        placeholder="Inserted are removed"
        value={singersValue}
        onChange={handleChangeSinger}
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

  const handleChangeSong = (value) => {
    setSelectedSongs(value);
  }
  const songs = () => {
    const songsValue = selectedSongs;
    const filteredOptions = OPTIONS3.filter(o => !songsValue.includes(o));
    return (
      <Select
        mode="tags"
        placeholder="Inserted are removed"
        value={songsValue}
        onChange={handleChangeSong}
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
    let tmp1 = await categoryApi.getAllCategory();
    let tmp2 = await songApi.getAllSongAsync();
    let tmp3 = await singerApi.getAllSingerAsync();

    setListCategory(tmp1);
    setListSinger(tmp3);
    setListSong(tmp2);
  }

  useEffect(() => handleAsync(), []);

  const imageResult = (image) => {
    setImage(image);
  }

  const[albumName, setAlbumName] = useState("");
  const[description, setDescription] = useState("");

  const postAlbum = async () => {

    const dataForm = new FormData();

    // if(!isEmpty(image)){
      dataForm.append("cover_image", image)
    // }

    dataForm.append("name", albumName);
    dataForm.append("description", description);
    dataForm.append("category", selectedCategory);
    dataForm.append("musicList", selectedSongs);
    dataForm.append("singers", selectedSingers);
    
    debugger

    const { data } = await albumApi.createAlbum(dataForm, token);
    if (data) {
      if (data.status === 1) {
        notification.success({ message: "create successfully" });
        setTimeout(() => window.location.reload(), 1000);
      }
    }

  }

  const getName = (event) => {
    const {name, value} = event.target;
    setAlbumName(value);
  }

  const getDescription = (event) => {
    const {name, value} = event.target;
    setDescription(value);
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={postAlbum}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input album\'s name!' }]}
      >
        <Input onChange={getName}/>
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
      >
        <TextArea rows={6} onChange={getDescription}/>
      </Form.Item>

      <Form.Item
        label="Avatar"
        name="avatar"
        rules={[{ required: false }]}
      >
        {/* <Avatar /> */}
        <ImageUpload onChange={imageResult} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCreate;

