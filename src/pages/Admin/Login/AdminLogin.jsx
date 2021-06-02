import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import {useCookies} from 'react-cookie';
import moderatorAPI from '../../../api/moderator';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const styleAdminLoginForm = {
    width: '800px',
    margin: 'auto',
    padding: '200px'
}

const AdminLogin = () => {

    const [moderator, setModerator] = useState({email: '', password: ''});
    const [cookie, setCookie] = useCookies(["moderatorToken", "moderator"]);
    const history = useHistory();

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (e) => {
        const {name, value} = e.target;
        setModerator({...moderator, [name]: value});
    }


    const onSubmit = async () => {
        let {data} = await moderatorAPI.login(moderator.email, moderator.password);
        console.log("login admin: ", data.result);
        if(data.result.message){
            notification.error({message: data.result.message});
        }else{
            setCookie("moderatorToken", data.result.accessToken, {path: '/'});
            setCookie("moderator", {name: data.result.name}, {path: '/'});
            history.push('/admin/albums');
        }
    }

    return (
        <div style={styleAdminLoginForm} className="admin-login-form">
            <h3 style={{textAlign: "center"}}>ADMIN</h3>
            <Form
                {...layout}
                name="basic"
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" value={moderator.email} onChange={onChange}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password name="password" value={moderator.password} onChange={onChange}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
        </Button>
                </Form.Item>
            </Form>
        </div>);
}

export default AdminLogin;