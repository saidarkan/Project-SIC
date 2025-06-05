import React from "react";
import { Head, usePage, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";

export default function Index() {
    const { produks } = usePage().props;

    const handleDelete = (id) => {
        if (confirm("Yakin ingin menghapus produk ini?")) {
            router.delete(route("produk.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Produk" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">Daftar Produk</h2>
                            <a
                                href={route("produk.create")}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                + Tambah Produk
                            </a>
                        </div>

                        {produks.length === 0 ? (
                            <p>Tidak ada produk yang tersedia.</p>
                        ) : (
                            <ul className="space-y-4">
                                {produks.map((produk) => (
                                    <li
                                        key={produk.id_produk}
                                        className="p-4 border rounded shadow-sm flex gap-4"
                                    >
                                        {/* Gambar Produk */}
                                        {produk.gambar && (
                                            <img
                                                src={`/storage/${produk.gambar}`}
                                                alt={produk.nama}
                                                className="w-32 h-32 object-cover rounded"
                                            />
                                        )}

                                        {/* Info Produk */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold">{produk.nama}</h3>
                                            <p className="text-gray-600">{produk.deskripsi}</p>
                                            <p className="text-sm text-gray-500">
                                                Kategori: {produk.kategori} | Harga: Rp{produk.harga}
                                            </p>
                                            {produk.linkproduk && (
                                                <a
                                                    href={produk.linkproduk}
                                                    className="text-green-600 underline text-sm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Lihat Produk
                                                </a>
                                            )}
                                        </div>

                                        {/* Tombol Aksi */}
                                        <div className="flex flex-col gap-2">
                                            <a
                                                href={route("produk.edit", produk.id_produk)}
                                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm text-center"
                                            >
                                                Edit
                                            </a>
                                            <button
                                                onClick={() => handleDelete(produk.id_produk)}
                                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
