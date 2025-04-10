// Importing React and useRef from React library
import React, { useRef } from "react";

// Componen utama untuk halaman Home
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
            <HeroSection />
            <ScrollButtons onTop={scrollToTop} onBottom={scrollToBottom} />
            <AboutSection ref={bottomRef} />
        </>
    );
};

export default Home;




