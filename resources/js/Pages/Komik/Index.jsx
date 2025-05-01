import React, { useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "@/Components/Komik/HeroSection";
import ScrollButtons from "@/Components/Home/ScrollButtons";
import KomikCard from "@/Components/Komik/KomikCard";

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

                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />
            </div>
            <KomikCard   ref={bottomRef} />
        </GuestLayout>
    );
};

export default Index;
