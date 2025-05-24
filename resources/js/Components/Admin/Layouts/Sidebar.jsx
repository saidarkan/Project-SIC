import SidebarMenu from "../SideBar/SidebarMenu";
import { useState } from "react";
import { Menu } from "lucide-react"; // Gunakan lucide-react atau FontAwesome

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle button for mobile */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-hijau text-white rounded-md shadow-md"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Sidebar */}
            <div
                id="sidebar"
                className={`fixed z-40 inset-y-0 left-0 transform bg-lime-900 shadow-lg w-72 p-6 transition-transform duration-300 ease-in-out flex flex-col
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
            >
                {/* Logo */}
                <div id="sidebar-logo" className="flex flex-col items-start">
                    <span
                        id="logo-title"
                        className="font-extrabold text-3xl text-white"
                    >
                        Peatland Hero
                    </span>
                </div>

                {/* Menu */}
                <div id="sidebar-menu" className="mt-10 flex-grow">
                    <SidebarMenu />
                </div>

                {/* Footer */}
                <div id="sidebar-footer" className="mt-10">
                    <div
                        id="footer-card"
                        className="bg-white px-4 py-4 rounded-xl shadow flex gap-4 items-center"
                    >
                        <img
                            id="footer-avatar"
                            src="https://avatar.iran.liara.run/public/28"
                            alt="Avatar"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-black text-sm flex flex-col">
                            <span>
                                Please organize your menus through button below!
                            </span>
                            <div
                                id="add-menu-button"
                                className="flex justify-center items-center mt-3 bg-white text-hijau px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100"
                            >
                                + Add Menu
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-light text-gray-400 mt-4 text-center">
                        &copy; Gatty 2025 All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    );
}
