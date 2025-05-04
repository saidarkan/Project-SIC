import React, { useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import ScrollButtons from "@/Components/Home/ScrollButtons";
import Carousel from "@/Components/Produk/Carousel";
import ProdukCard from "@/Components/Produk/ProdukCard";

const Index = () => {
    const bottomRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <GuestLayout>
            <div className="mt-0">
                <Carousel />
                <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />

                <div ref={bottomRef} className="mt-10"></div>

                <ProdukCard />
            </div>
        </GuestLayout>
    );
};

export default Index;
