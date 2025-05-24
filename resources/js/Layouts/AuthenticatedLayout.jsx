import Header from "@/Components/Admin/Layouts/Header";
import Sidebar from "@/Components/Admin/Layouts/Sidebar";

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="bg-gray-100 min-h-screen flex">
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex-1 p-4">
                    <Header />
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
