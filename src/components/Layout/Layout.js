import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import AppBar from "components/AppBar/AppBar";
import Footer from "components/Footer/Footer";


const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-center" reverseOrder={false} />
            <Footer />
        </div>
    );
};

export default Layout;