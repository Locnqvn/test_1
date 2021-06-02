import { Form, Input, Button, Checkbox, Select } from 'antd';
// import { Select } from 'antd';
// import SelectGender from '../../Helper/SelectGender';
// import Avatar from '../../Helper/Upload-image-preview';
import ImageUpload from "../Song/ImageUpload";
import singerAPI from '../../../api/singer';
import {useState, useEffect} from 'react';


const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 14 },
};

const { TextArea } = Input;
const initialsinger = {
  name: '',
  gender: '',
  age: '',
};

const Demo = ({moderatorToken}) => {

    const [image, setImage] = useState();
    const [singer,setSinger] = useState(initialsinger);



    const onChangeImage = (image) => {
        setImage(image);
    }
    const onchange = (e) => {
        const {name, value} = e.target;
        setSinger({...singer, [name]: value});
    }
   
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("singer submit: ", singer);
        
        let dataF = new FormData();
        dataF.append("avatar", image);
        dataF.append("name",singer.name);
        dataF.append("genger",singer.gender);
        dataF.append("age",singer.age)
        // dataF.append("categories",song.categories)   chỗ này khi request về server nó đổi từ mảng thành chuỗi 123,123,123 => cần xử lý bên server
        // dataF.append("singers",song.singers)

        let {data} = await singerAPI.createSinger(dataF, moderatorToken);
        console.log("result song new: ", data);
        
    }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input singer\'s name!' }]}
      >
        <Input value={singer.name} name="name" onChange={onchange}/>
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required:false}]}
      >
          <Input value={singer.gender} name="gender" onChange={onchange}/>
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required:true , message:'Plese enter your age'}]}
        
      >
         <Input value={singer.age} name="age" onChange={onchange}/>
      </Form.Item>


      <Form.Item
        label="Avatar"
        name="avatar"
        rules={[{ required: false}]}
      >
      <ImageUpload value={singer.avatar} onChange={onChangeImage} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;