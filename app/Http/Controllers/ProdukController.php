<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class ProdukController extends Controller
{
    // Tampilan untuk user tamu
    public function produkGuest(): Response
{
    $produks = Produk::all()->map(function ($produk) {
        $produk->gambar = $produk->gambar ? Storage::url($produk->gambar) : null;
        return $produk;
    });

    return Inertia::render('Guest/Produk/Index', [
        'produks' => $produks
    ]);
}


    // Tampilan untuk admin
    public function produkAdmin(): Response
    {
        $produks = Produk::all();
        return Inertia::render('Admin/Produk/Index', [
            'produks' => $produks
        ]);
    }

    // Form tambah produk (jika pakai)
    public function create(): Response
    {
        return Inertia::render('Admin/Produk/Create');
    }

    // Simpan data produk baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'kategori' => 'required|string',
            'harga' => 'required|numeric',
            'linkproduk' => 'nullable|url',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('produks', 'public');
        }

        Produk::create($validated);

        return redirect()->route('produk.admin')->with('success', 'Produk berhasil ditambahkan.');
    }

    // Menampilkan detail produk (opsional)
    public function show(Produk $produk): Response
    {
        return Inertia::render('Admin/Produk/Show', [
            'produk' => $produk
        ]);
    }

    // Form edit produk
    public function edit($id): Response
    {
         $produk = Produk::findOrFail($id);
        return Inertia::render('Admin/Produk/Edit', [
            'produk' => $produk
        ]);
    }

    // Proses update produk
    public function update(Request $request, $id)
{
    $request->validate([
        'nama' => 'required|string|max:255',
        'deskripsi' => 'required|string',
        'kategori' => 'required|string',
        'harga' => 'required|numeric',
        'linkproduk' => 'nullable|url',
        'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $produk = Produk::findOrFail($id);

    $data = $request->only([
        'nama',
        'deskripsi',
        'kategori',
        'harga',
        'linkproduk',
    ]);

    // Cek apakah ada file gambar baru yang diupload
    if ($request->hasFile('gambar')) {
        // Hapus gambar lama jika ada
        if ($produk->gambar) {
            Storage::disk('public')->delete($produk->gambar);
        }

        // Simpan gambar baru ke folder 'produks' di storage/public
        $data['gambar'] = $request->file('gambar')->store('produks', 'public');
    }

    $produk->update($data);

    return redirect()->route('produk.admin')->with('success', 'Produk berhasil diperbarui.');
}


    // Hapus produk
    public function destroy($id)
    {
       $produk = Produk::findOrFail($id);

        $produk->delete();

        return redirect()->route('produk.admin')->with('success', 'Produk berhasil dihapus.');
    }
}
