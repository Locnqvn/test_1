import {lazy} from 'react';

export default {
    exact: true,
    path: "/admin",
    component: lazy(() => import('./HomeAd'))
};