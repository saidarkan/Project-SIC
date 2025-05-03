<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_artikel'; // sesuaikan jika primary key bukan 'id'

    protected $fillable = [
        'judul',
        'deskripsi',
        'gambar',
    ];
}
