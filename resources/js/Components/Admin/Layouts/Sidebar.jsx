import SidebarMenu from "../SideBar/SidebarMenu";


export default function Sidebar() {
    return (
        <div
            id="sidebar"
            className="flex min-h-screen w-80 flex-col bg-white p-10 shadow-lg"
        >
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span
                    id="logo-title"
                    className="font-poppins-extrabold text-[38px] text-gray-900"
                >
                   Peatland Hero
                </span>
                <span
                    id="logo-subtitle"
                    className="font-barlow font-semibold text-gray-400/80"
                >
                    Admin Dashboard
                </span>
            </div>





            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <SidebarMenu />
            </div>


            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div
                    id="footer-card"
                    className="bg-hijau px-4 gap-2 py-2 rounded-md shadow-lg mb-10 flex items-center"
                >
                    <div id="footer-text" className="text-white text-sm">
                        <span>
                            Please organize your menus through button below!
                        </span>
                        <div
                            id="add-menu-button"
                            className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
                        >
                            {/* <span className="text-gray-600 flex items-center gap-1"><FaPlus/> Add Menus</span> */}
                        </div>
                    </div>
                    <img
                        id="footer-avatar"
                        src="https://avatar.iran.liara.run/public/28"
                        className="w-20 rounded-full"
                    />
                </div>
                <p
                    id="footer-copyright"
                    className="text-sm font-light text-gray-400"
                >
                    &copy; Gatty 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}
