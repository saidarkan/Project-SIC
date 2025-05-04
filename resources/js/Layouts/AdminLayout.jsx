import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Layouts/Sidebar";
import Header from "@/Components/Header";

export default function AdminLayout({ children }) {
    return (

        <div>
            <div id="app-container" className="bg-gray-100 min-h-screen flex">
                <div id="layout-wrapper" className="flex flex-row flex-1">
                    <Sidebar />
                    <div id="main-content" className="flex-1 p-4">
                        <Header />


                        <div className="flex-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



