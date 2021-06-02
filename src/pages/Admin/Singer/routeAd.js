import {lazy} from "react";

export default [
    {
        path: "/admin/singers",
        exact: true,
        component: lazy(() => import("./ListSinger"))
        // component: import("./ListSinger")
    },
    {
        path: "/admin/singers/new",
        exact: true,
        component: lazy(() => import("./NewSinger"))
        // component: import("./NewSinger")
    }
]