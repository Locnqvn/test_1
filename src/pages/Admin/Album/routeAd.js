import {lazy} from "react";

export default [
    {
        path: "/admin/albums",
        exact: true,
        component: lazy(() => import("./ListAlbum"))
    },
    {
        path: "/admin/albums/new",
        exact: true,
        component: lazy(() => import("./NewAlbum"))
    },
    {
        path: "/admin/albums/detail/:albumName",
        exact: false,
        component: lazy(() => import("./DetailAlbum"))
    }
]