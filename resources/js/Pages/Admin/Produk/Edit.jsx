import React, { useState, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { route } from "ziggy-js";
import { router } from '@inertiajs/react';

export default function Edit({ produk }) {
  const { data, setData, put, processing, errors } = useForm({
    nama: produk.nama || "",
    deskripsi: produk.deskripsi || "",
    gambar: null,
    kategori: produk.kategori || "",
    harga: produk.harga || "",
    linkproduk: produk.linkproduk || "",
  });

  // Gunakan path gambar publik (dari storage link)
const [preview, setPreview] = useState(
  produk.gambar ? `/storage/${produk.gambar}` : null
);

  // Saat user upload gambar baru, perbarui state dan preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData("gambar", file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("nama", data.nama);
  formData.append("deskripsi", data.deskripsi);
  if (data.gambar) {
    formData.append("gambar", data.gambar);
  }
  formData.append("kategori", data.kategori);
  formData.append("harga", data.harga);
  formData.append("linkproduk", data.linkproduk);

  router.post(route("produk.update", produk.id_produk), formData, {
    forceFormData: true,
    preserveScroll: true,
  });
};


  return (
    <AuthenticatedLayout>
      <Head title={`Edit Produk: ${produk.nama}`} />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-8 shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Edit Produk</h2>

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
                <label className="block text-sm font-medium mb-2">Gambar Produk</label>
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mb-3 max-w-xs rounded border"
                  />
                )}
                <input
                  type="file"
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
