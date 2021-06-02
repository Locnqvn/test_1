import {lazy} from "react";
export default {
        path: "/admin/users",
        exact: true,
        component: lazy(() => import("./ListUser"))
    };