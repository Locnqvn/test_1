import {lazy} from "react";

export default {
        path: "/album",
        exact: true,
        component: lazy(() => import("./AlbumPage"))
    }