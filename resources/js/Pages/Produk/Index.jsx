import React, { useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Home/ScrollButtons";
import Carousel from "@/Components/Produk/Carousel";

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
            <div className="mt-0">
                <Carousel />
                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />
                <div ref={bottomRef}></div>
            </div>
        </GuestLayout>
    );
};

export default Index;
