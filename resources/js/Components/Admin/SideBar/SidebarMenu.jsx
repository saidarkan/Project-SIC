import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

export default function SidebarMenu() {
    const { url } = usePage();

    const menus = [
        {
            label: "Dashboard",
            routeName: "dashboard",
        },
          {
            label: "Komik",
            routeName: "komik.admin",
        },
        {
            label: "Produk",
            routeName: "produk.admin",
        },

    ];

    return (
        <div id="sidebar-menu" className="mt-10 space-y-3">
            {menus.map((menu, index) => (
                <Link
                    key={index}
                    href={route(menu.routeName)}
                    className={`relative flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                        route().current(menu.routeName)
                            ? "bg-hijau text-black font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    {menu.label}
                </Link>
            ))}
        </div>
    );
}
