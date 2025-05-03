import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";

const KuisCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timeLeft, setTimeLeft] = useState(10);

    const questions = [
        {
            pertanyaan: "Apa itu tanah gambut?",
            opsi_a: "Tanah organik yang terbentuk dari sisa tanaman",
            opsi_b: "Tanah pasir",
            opsi_c: "Tanah liat",
            opsi_d: "Tanah keras",
            jawaban_benar: "a",
        },
        {
            pertanyaan: "Apa fungsi utama hutan mangrove?",
            opsi_a: "Tempat wisata",
            opsi_b: "Membakar sampah",
            opsi_c: "Menanam padi",
            opsi_d: "Mencegah abrasi",
            jawaban_benar: "d",
        },
    ];

    const current = questions[currentIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleAnswer = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setTimeLeft(10);
        } else {
            alert("Kuis selesai!");
        }
    };

    const options = [
        { key: "a", text: current.opsi_a },
        { key: "b", text: current.opsi_b },
        { key: "c", text: current.opsi_c },
        { key: "d", text: current.opsi_d },
    ];

    return (
        <>
            <Head title="Kuis Interaktif" />
            <section className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 flex items-center justify-center">
                <div className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-lg">
                    {/* Progress */}
                    <div className="flex justify-center mb-4 space-x-2">
                        {[...Array(questions.length)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                    index <= currentIndex ? "bg-orange-500 text-white" : "bg-gray-200"
                                }`}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>

                    {/* Timer */}
                    <div className="text-center text-orange-600 font-bold text-xl mb-4">
                        {`00:${timeLeft.toString().padStart(2, "0")}`}
                    </div>

                    {/* Question */}
                    <h2 className="text-xl font-bold text-center mb-6">{current.pertanyaan}</h2>

                    {/* Answer Options */}
                    <div className="space-y-4">
                        {options.map((option) => (
                            <button
                                key={option.key}
                                onClick={() => handleAnswer(option.key)}
                                disabled={selectedOption !== null}
                                className={`w-full px-4 py-2 rounded-lg border text-left ${
                                    selectedOption === option.key
                                        ? option.key === current.jawaban_benar
                                            ? "bg-green-500 text-white border-green-600"
                                            : "bg-red-500 text-white border-red-600"
                                        : "bg-white hover:bg-gray-100"
                                }`}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={handleNext}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                        >
                            NEXT QUESTION →
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default KuisCard;
