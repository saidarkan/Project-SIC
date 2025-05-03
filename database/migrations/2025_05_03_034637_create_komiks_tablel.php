<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('komiks', function (Blueprint $table) {
            $table->id('id_komik');
            $table->string('judul');
            $table->text('deskripsi');
            $table->text('thumbnail')->nullable(); // untuk path gambar thumbnail
            $table->text('gambar')->nullable();     // untuk gambar komik lainnya
            $table->string('pengarang');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komiks');
    }
};
