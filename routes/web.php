<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KomikController;
use App\Http\Controllers\ProdukController;
use App\Models\Komik;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/komik', function () {
//     return Inertia::render('Komik/Index');
// })->name('komik');

Route::resource('/komik', KomikController::class)->only(['index', 'create', 'store', 'edit', 'destroy', 'update']);

Route::resource('/produk', ProdukController::class)->only(['index', 'create', 'store', 'edit', 'destroy', 'update']);




Route::get('/kuis', function () {
    return Inertia::render('Kuis/Index');
})->name('kuis');

require __DIR__.'/auth.php';
