import React, { useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Komik/HeroSection";
import ScrollButtons from "@/Components/Home/ScrollButtons";

const Index = () => {
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
        <GuestLayout>

            <div className="-mt-24">
            <HeroSection />
                <ScrollButtons
                    onTop={scrollToTop}
                    onBottom={scrollToBottom}
                />
            </div>




            <div className="min-h-screen bg-gradient-to-br from-[#6ee7b7] via-[#cce3d5] to-[#fbc7a7]"></div>
        </GuestLayout>
    );
};

export default Index;
