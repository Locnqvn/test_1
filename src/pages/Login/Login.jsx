import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Form, notification} from 'antd';
import {useCookies} from 'react-cookie';

import userAPI from '../../api/user';

import './style.css';


function Login() {

    const [cookie, setCookie] = useCookies(["userToken", "user"]);
    const history = useHistory();

    const [user, setUser] = useState({email: "", password: ""});
    
    const onSubmit = async () => {
        let {data} = await userAPI.login(user);
        if(data.result){
            console.log("login: ", data.result);
            setCookie("userToken", data.result.accesstoken, {path: '/'});
            setCookie("user", {avatar: data.result.avatar, name: data.result.name}, {path: '/'});
            history.push('/');
        }else{
            notification.error({message: data.message});
        }
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }




    return (
        <div className="container">
            <Form>
                <div className="box-auth-inside">
                    <a href="#" className="a-img-logo"><img src="/icons/icon_white.png" alt="auth-img"></img></a>

                    <div className="input-group">
                        <label for="">Nhập email</label>
                        <input type="email" name="email" value={user.email} onChange={onChange}></input>
                        <label>Nhập mật khẩu</label>
                        <input type="password" name="password" value={user.password} onChange={onChange}></input>
                        {/* <p id="eg" data-default-text="VD: 0912345789, abc123, abcdef@gmail.com">VD: 0912345789, abc123, abcdef@gmail.com</p> */}
                    </div>

                    <button onClick={onSubmit} className="login-btn">Đăng nhập</button>
                </div>
                <div className="box-auth-panel">
                    <h4 className="top">hoặc đăng nhập với </h4>
               
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
            </Form>
        </div>
    )
}

export default Login

