import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 w-full  p-2 text-white drop-shadow-md backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between p-0">
                    {/* <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button> */}
                    <img
                        src="/build/images/logo/gaty-logo.png"
                        alt="logo web"
                        className="w-20"
                    />
                    <ul className="hidden space-x-6 text-2xl font-medium md:flex">
                        <li>
                            <a
                                href={route("home")}
                                className="font-medium font-almendra_sc hover:text-lime-200 transition-all duration-200"
                            >
                                Beranda
                            </a>
                        </li>
                        <li>
                            <Link
                                href={route("komik")}
                                className="font-medium font-almendra_sc hover:text-lime-200 transition-all duration-200"
                            >
                                Komik Gambi
                            </Link>
                        </li>
                        <li>
                            <Link
                                href=""
                                className="font-medium font-almendra_sc hover:text-lime-200 transition-all duration-200"
                            >
                                Prouduk Gambut
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
