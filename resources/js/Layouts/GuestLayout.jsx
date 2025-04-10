import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";

export default function GuestLayout({ children }) {
    return (
        <>
            <div className="flex min-h-screen flex-col ">
                <Navbar />
                {children}
                {/* Footer */}
                {/* <Footer /> */}
            </div>
        </>
    );
}
