import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        nama: "",
        deskripsi: "",
        gambar: null,  // pakai null untuk file
        kategori: "",
        harga: "",
        linkproduk: "",
    });

    // Handle file input change
    const handleFileChange = (e) => {
        setData("gambar", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Pakai FormData untuk kirim data termasuk file
        const formData = new FormData();
        formData.append("nama", data.nama);
        formData.append("deskripsi", data.deskripsi);
        if (data.gambar) {
            formData.append("gambar", data.gambar);
        }
        formData.append("kategori", data.kategori);
        formData.append("harga", data.harga);
        formData.append("linkproduk", data.linkproduk);

        post(route("produk.store"), {
            data: formData,
            processData: false,
            contentType: false,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Produk" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-8 shadow rounded-lg">
                        <h2 className="text-2xl font-bold mb-6">Tambah Produk Baru</h2>

                        <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
                            <div>
                                <label className="block text-sm font-medium">Nama Produk</label>
                                <input
                                    type="text"
                                    value={data.nama}
                                    onChange={(e) => setData("nama", e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                                {errors.nama && <div className="text-red-600 text-sm">{errors.nama}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Deskripsi</label>
                                <textarea
                                    value={data.deskripsi}
                                    onChange={(e) => setData("deskripsi", e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                                {errors.deskripsi && <div className="text-red-600 text-sm">{errors.deskripsi}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Gambar Produk</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full"
                                />
                                {errors.gambar && <div className="text-red-600 text-sm">{errors.gambar}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Kategori</label>
                                <input
                                    type="text"
                                    value={data.kategori}
                                    onChange={(e) => setData("kategori", e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                                {errors.kategori && <div className="text-red-600 text-sm">{errors.kategori}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Harga</label>
                                <input
                                    type="number"
                                    value={data.harga}
                                    onChange={(e) => setData("harga", e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                                {errors.harga && <div className="text-red-600 text-sm">{errors.harga}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Link Produk (opsional)</label>
                                <input
                                    type="text"
                                    value={data.linkproduk}
                                    onChange={(e) => setData("linkproduk", e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                                {errors.linkproduk && <div className="text-red-600 text-sm">{errors.linkproduk}</div>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
