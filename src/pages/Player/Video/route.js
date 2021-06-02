import {lazy} from "react";

export default {
        path: "/video/:videoId",
        exact: true,
        component: lazy(() => import("./PlayerVideoPage"))
};