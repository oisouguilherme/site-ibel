import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProvideLayout from "@/context/UseLayout";
import { lazy } from "react";
const HomePage = lazy(() => import("@/pages/Home/Home"));
const Layout = lazy(() => import("@/pages/Layout/Layout"));
const LoadingComponent = lazy(() => import("@/components/Loading/Loading"));

const RouterConfig = createBrowserRouter([
    {
        path: "/",
        Component: ProvideLayout,
        children: [
            {
                path: '/',
                 Component: Layout,
                children: [
                    {
                        path: '/',
                        children: [
                            {
                                path: '/',
                                Component: HomePage,
                            },
                        ]
                    }
                ]
            },
        ]
    },
]);

export default function Router() {
    return (
        <RouterProvider router={RouterConfig} fallbackElement={<LoadingComponent />} />
    )
}