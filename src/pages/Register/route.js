import {lazy} from "react";

export default {
        path: "/register",
        exact: true,
        component: lazy(() => import("./Register"))
}