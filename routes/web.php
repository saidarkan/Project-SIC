<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\ProfileController;
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

Route::get('/komik', function () {
    return Inertia::render('Komik/Index');
})->name('komik');

Route::get('/kuis', function () {
    return Inertia::render('Kuis/Index');
})->name('kuis');

use App\Http\Controllers\KomikAdminController;

Route::resource('komik-admin', KomikAdminController::class);


Route::delete('/komik-admin/{id_komik}', [KomikController::class, 'destroy'])->name('komik-admin.destroy');



Route::resource('artikel-admin', ArtikelController::class);

// Route tambahan untuk destroy dengan parameter `id_artikel`
Route::delete('/artikel-admin/{id_artikel}', [ArtikelController::class, 'destroy'])->name('artikel-admin.destroy');


require __DIR__.'/auth.php';
