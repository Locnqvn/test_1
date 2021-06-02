import React, { useEffect, useState, lazy } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Redirect, useHistory } from 'react-router';
import { useCookies } from 'react-cookie';
import { Spin, Space } from 'antd';
import adminRouter from '../pages/Admin/routes';
import DashBoard from '../pages/layout/admin/DashBoard';
import MainLayout from '../pages/layout/MainLayout';
import publicRouter from '../pages/routes';
import AdminRouter from './AdminRouter';
import PublicRouter from './PublicRouter';

const AppRouter = (props) => {

    const [isLoginedAdmin, setIsAdminLogined] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(["userToken", "user", "moderatorToken", "moderator"]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getAuthUser();
        getAuthAdmin();

    }, [cookies, isLoginedAdmin]);

    const getAuthUser = async () => {
        let token = await cookies.userToken;
        let userCookie = await cookies.user;

        if (userCookie)
            setUser({ name: userCookie.name, avatar: userCookie.avatar });
    }

    const getAuthAdmin = async () => {
        let token = await cookies.moderatorToken;
        let name = await cookies.moderator;
        if (token)
            setIsAdminLogined(true);
    }

    const onLogoutUser = (e) => {
        if (e) {
            removeCookie("userToken", { path: '/' });
            removeCookie("user", { path: '/' });
            setUser(null);
        }

    }


    const onLogoutAdmin = async (e) => {
        if (e) {
            removeCookie("moderatorToken", { path: '/' });
            removeCookie("moderator", { path: '/' });
            setIsAdminLogined(false);
        }
    }


    const AdminApp = () => {
        return (
            <DashBoard onLogout={onLogoutAdmin}>
                <Switch>
                    {
                        adminRouter.map(router => {
                            const { exact, path, component } = router;
                            return (
                                <AdminRouter exact={exact} path={path} component={component} moderatorToken={cookies.moderatorToken} />
                            )
                        })
                    }
                </Switch>
            </DashBoard>
        )
    }

    const PublicApp = () => {
        return (
            <MainLayout user={user} logout={onLogoutUser}>
                <Switch>
                    {
                        publicRouter.map(router => {
                            const { exact, path, component } = router;
                            return (
                                <PublicRouter exact={exact} path={path} component={component} userToken={cookies.userToken}/>
                            )
                        })
                    }

                    {
                        isLoginedAdmin ? '' : <Route exact path="/admin/login" component={lazy(() => import('../pages/Admin/Login/AdminLogin'))} />
                    }
                </Switch>
            </MainLayout>
        )
    }


    const Loading = () => {
        return (
            <Space size="middle" style={{ position: 'absolute', top: '48%', left: '48%' }}>
                <Spin size="large" />
            </Space>
        )
    }

    return (
        <React.Suspense fallback={<div style={{ position: 'relative' }}><Loading /></div>}>
            <BrowserRouter>
                {
                    isLoginedAdmin
                        ? <AdminRouter component={AdminApp} />
                        : <PublicRouter component={PublicApp} />
                }


            </BrowserRouter>
        </React.Suspense>
    );
}

export default AppRouter;