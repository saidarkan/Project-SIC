<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KomikController;
use App\Http\Controllers\ProdukController;
use App\Models\Komik;
use App\Http\Controllers\KuisController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// ===================
//=== Auth routes ===
// ===================

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ===================
//=== Guest routes ===
// ===================

// =Home route=
Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// =Komik route=
Route::get('/komik', [KomikController::class, 'komikGuest'])->name('komik.guest');

// =Produk route=
Route::get('/produk', [ProdukController::class, 'produkGuest'])->name('produk.guest');



// ===================
//=== Admin routes ===
// ===================

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('admin')->group(function () {
    // =Produk route=
    Route::get('/produk', [ProdukController::class, 'produkAdmin'])->name('produk.admin');
});



Route::get('/kuis', [KuisController::class, 'index'])->name('kuis.index');
Route::get('/kuis/create', [KuisController::class, 'create'])->name('kuis.create');
Route::post('/kuis', [KuisController::class, 'store'])->name('kuis.store');
Route::get('/kuis/{id}/edit', [KuisController::class, 'edit'])->name('kuis.edit');
Route::put('/kuis/{id}', [KuisController::class, 'update'])->name('kuis.update');
Route::delete('/kuis/{id}', [KuisController::class, 'destroy'])->name('kuis.destroy');

require __DIR__ . '/auth.php';
