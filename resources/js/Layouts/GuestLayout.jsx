import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Navbar from "@/Layouts/Navbar";
import Footer from "@/Layouts/Footer";

export default function GuestLayout({ children }) {
    return (
        <>
            {/* <div className="min-h-screen bg-gradient-to-b from-lime-900 via-lime-800 to-lime-700 text-white">
                <Navbar />
                {children}
                <Footer />
            </div> */}

            <div className="bg-gradient-to-b from-lime-900 via-lime-800 to-lime-700 min-h-screen flex">
                <div className="flex flex-col flex-1">
                    <Navbar />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
