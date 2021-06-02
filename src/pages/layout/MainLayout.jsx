import React from 'react';
import FooterX from './Footer/FooterX';
import HeaderX from './Header/HeaderX';
import Home from '../Home/Home';

export default function MainLayout({children, user, logout}){

    return (
        <div>
            <div user={user} logout={(e) => logout(e)}/>
                {
                    children
                }
            <div/>
        </div>
    )
}