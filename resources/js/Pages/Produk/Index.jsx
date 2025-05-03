import React, { useRef } from "react";
import GuestLayout from "@/Layouts/GuestLayout";

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
            <div className="-mt-[8.5rem]">
                <h2>sdfasdfsfsffsfsfssf</h2>
            </div>
        </GuestLayout>
    );
};

export default Index;
