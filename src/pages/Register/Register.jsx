import Form from 'antd/lib/form/Form';
import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router';

import {notification} from 'antd';

import userAPI from '../../api/user';

import './style_register.css';


const initialUser = {
    name: '',
    password: '',
    email: ''
}

function Register() {

    const history = useHistory();
    const [userRes, setUserRes] = useState(initialUser);

    const onSubmit = async () => {
        let {data} = await userAPI.register(userRes);

        console.log("register: ", data);
        if(data.status){
            notification.success({message: 'Đăng ký tài khoản thành công!'});
            window.scrollTo(0, 0);
            history.push('/login');
        }
        else{
            notification.error({message: data.message});
        }
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setUserRes({...userRes, [name]: value});
    }


    return (
        <div className="container">
            <Form>
                <div className="box-auth-inside">
                    <a href="#" className="a-img-logo"><img src="/icons/icon_white.png" alt="auth-img"></img></a>

                    <div className="input-group">
                        <label for="">Nhập email đăng kí</label>
                        <input type="text" name="email" value={userRes.email} onChange={onChange}></input>
                        <p id="eg" data-default-text="VD: abcdef@gmail.com">VD: abcdef@gmail.com</p>
                        <label for="">Nhập tên đăng kí</label>
                        <input type="text" name="name" value={userRes.name} onChange={onChange}></input>
                        <label>Nhập mật khẩu</label>
                        <input type="password" name="password" value={userRes.password} onChange={onChange}></input>
                        {/* <p id="eg" data-default-text="VD: 0912345789, abc123, abcdef@gmail.com">VD: 0912345789, abc123, abcdef@gmail.com</p> */}
                    </div>

                    <button onClick={onSubmit} className="login-btn">Đăng kí</button>
                </div>
                <div className="box-auth-panel">
                    <h4 className="top">hoặc đăng kí với </h4>
               
                     <ul className="a-login-ul">
                        <li>
                            <a href="#" className="a-login-fb">
                                <img src="/icons/fb_icon.png" alt="auth-img"></img> Facebook
                               
                            </a>
                        </li>
                        <li>
                            <a href="#" class="a-login-google">
                                <img src="/icons/gg_icon.png" alt="auth-img"></img>    Google
                            
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="box-auth-panel-2">
                    <h3>Bạn đã có tài khoản? <a href="#">Đăng nhập</a></h3>
                </div>
            </Form>
        </div>
    )
}

export default Register;
