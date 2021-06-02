import {lazy} from "react";

export default {
        path: "/music/:idMusic",
        exact: true,
        component: lazy(() => import("./PlayerMusicPage"))
};