// Importing React and useRef from React library
import React, { useRef } from "react";
import { Head} from "@inertiajs/react";
// Componen utama untuk halaman Home
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Home/HeroSection";
import ScrollButtons from "@/Components/Home/ScrollButtons";
import AboutSection from "@/Components/Home/AboutSection";

const Home = () => {
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <GuestLayout>
                  <Head title="Beranda" />
                <div className="-mt-[8rem]">
                    <HeroSection />
                    <ScrollButtons
                        onTop={scrollToTop}
                        onBottom={scrollToBottom}
                    />
                    <AboutSection ref={bottomRef} />
                </div>
            </GuestLayout>
        </>
    );
};

export default Home;
