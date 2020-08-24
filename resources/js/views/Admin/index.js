export default [
    {
        path: "/admin/login",
        name: "admin/login",
        component: () => import("./Login/Login.vue"),
        layout: "admin-login"
    },
    {
        path: "/admin",
        name: "main-admin",
        component: () => import("../../layouts/Dashboard.vue"),
        redirect: {
            name: "dashboard"
        },
        children: [
            {
                path: "/admin/dashboard",
                name: "dashboard",
                component: () => import("./Dashboard")
            }
        ]
    }
];
