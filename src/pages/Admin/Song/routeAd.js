import {lazy} from "react";


export default [
    {
        path: "/admin/songs",
        exact: true,
        component: lazy(() => import("./ListSong"))
    },
    {
        path: "/admin/songs/new",
        exact: true,
        component: lazy(() => import("./NewSong"))
    },
    {
        path: "/admin/songs/:name",
        exact: true,
        component: lazy(() => import("./SongDetail"))
    }
];