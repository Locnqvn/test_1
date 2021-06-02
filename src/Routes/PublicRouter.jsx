import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AdminRouter({component: Component, ...rest}){

    return (
        <Route
        {...rest}
        render={props => <Component {...props} userToken={rest.userToken}/>}
        />  // chỗ này khi có auth sẽ có check token để ridirect sau

    )
}

export default AdminRouter;