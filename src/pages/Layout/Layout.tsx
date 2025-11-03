import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "@/components/Footer/Footer";
const LoadingComponent = lazy(() => import("@/components/Loading/Loading"));

export default function Layout() {
    return (
        <>
            <main className="flex flex-col flex-1">
                <Suspense fallback={<LoadingComponent />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}