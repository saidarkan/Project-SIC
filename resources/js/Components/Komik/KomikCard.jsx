import React from "react";
import { Head, Link } from "@inertiajs/react";

const KomikCard = React.forwardRef((props, ref) => {
    const komikList = [
        {
            id: 1,
            judul: "Belajar Energi Terbarukan",
            deskripsi:
                "Komik ini mengajarkan tentang berbagai sumber energi terbarukan yang ramah lingkungan.",
            cover: "https://th.bing.com/th/id/OIP.v6o0VenOmJc_TPf1jA5C7QHaLA?rs=1&pid=ImgDetMain",
            kategori: ["Lingkungan", "IPA"],
        },
        {
            id: 2,
            judul: "Petualangan Si Atom",
            deskripsi:
                "Petualangan seru Si Atom dalam menjelaskan struktur dasar materi.",
            cover: "https://th.bing.com/th/id/OIP.v6o0VenOmJc_TPf1jA5C7QHaLA?rs=1&pid=ImgDetMain",
            kategori: ["Kimia", "Sains"],
        },
        {
            id: 3,
            judul: "Misi Menyelamatkan Hutan",
            deskripsi:
                "Komik ini menceritakan pentingnya pelestarian hutan dan cara menjaga alam.",
            cover: "https://th.bing.com/th/id/OIP.v6o0VenOmJc_TPf1jA5C7QHaLA?rs=1&pid=ImgDetMain",
            kategori: ["Lingkungan", "Biologi"],
        },
        {
            id: 4,
            judul: "Eksperimen Listrik Si Boltek",
            deskripsi:
                "Si Boltek melakukan eksperimen kelistrikan yang seru dan edukatif.",
            cover: "https://th.bing.com/th/id/OIP.v6o0VenOmJc_TPf1jA5C7QHaLA?rs=1&pid=ImgDetMaing",
            kategori: ["IPA", "Fisika"],
        },
    ];

    return (
        <>
            <Head title="Komik Edukatif" />
            <section
                ref={ref}
                className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden"
            >
                <div className="container mx-auto px-4 py-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {komikList.map((komik) => (
                            <Link
                                key={komik.id}
                                href={`/komik/${komik.id}`}
                                className="block transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
                            >
                                <div className="relative bg-white/70 backdrop-blur-md border border-green-200 shadow-xl rounded-2xl overflow-hidden cursor-pointer">
                                    <div className="relative">
                                        <img
                                            src={komik.cover}
                                            alt={`Cover komik ${komik.judul}`}
                                            className="w-full  object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                                            <h2 className="text-lg font-bold">
                                                {komik.judul}
                                            </h2>
                                            <p className="text-sm mt-1 line-clamp-2">
                                                {komik.deskripsi}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {komik.kategori.map(
                                                    (tag, i) => (
                                                        <span
                                                            key={i}
                                                            className="bg-green-500/70 text-white text-xs px-2 py-1 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
});

export default KomikCard;
