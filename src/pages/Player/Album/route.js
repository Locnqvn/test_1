import {lazy} from "react";

export default {
        path: "/albums/:idAlbum",
        exact: true,
        component: lazy(() => import("./PlayerAlbumPage"))
};