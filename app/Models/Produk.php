<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    protected $primaryKey = 'id_produk';
    protected $fillable = [
    'nama',
    'deskripsi',
    'gambar',
    'kategori',
    'harga',
    'linkproduk',
];

}
