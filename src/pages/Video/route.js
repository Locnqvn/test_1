import {lazy} from "react";

export default {
        path: "/video",
        exact: true,
        component: lazy(() => import("./VideoPage"))
};