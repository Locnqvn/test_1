import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    UserOutlined,
    CustomerServiceOutlined,
    BarsOutlined,
    DingtalkOutlined,
    TrademarkCircleOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import './style.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DashBoard = ({children, onLogout}) => {


    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    }

    const onLogoutModerator = () => {
        onLogout(true);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logoAd"><img src='/icons/spotify.png' alt="nhacvn" style = {{paddingRight: '12px'}}></img>MySpotify</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<BarsOutlined />}>
                        <Link to="/admin/albums">Album</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
                        <Link to="/admin/songs">Bài hát</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<DingtalkOutlined />}>
                        <Link to="/admin/singers">Ca sỹ</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        <Link to="/admin/users">Người dùng</Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TrademarkCircleOutlined/>} title="Quản trị">
                        <Menu.Item key="5" onClick={onLogoutModerator}>Đăng xuất</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                       
                        {children}

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default DashBoard;