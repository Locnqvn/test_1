import {lazy} from "react";

export default [
    {
        path: "/ca-nhan/lich-su",
        exact: true,
        component: lazy(() => import("./History"))
    },
    {
        path: "/ca-nhan/nhac-cua-toi",
        exact: true,
        component: lazy(() => import("./Playlist"))
    },
    {
        path: "/ca-nhan",
        exact: true,
        component: lazy(() => import("./UserProfile"))
    },
];