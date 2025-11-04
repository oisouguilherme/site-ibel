import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
const LoadingComponent = lazy(() => import("@/components/Loading/Loading"));

export default function Layout() {
    return (
        <>
            <Header />
            <main className="flex flex-col flex-1">
                <Suspense fallback={<LoadingComponent />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}