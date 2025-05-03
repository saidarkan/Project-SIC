<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KuisController;
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

// Route::get('/kuis', [KuisController::class, 'index']);


// // Route::get('/kuis', function () {
// //     return Inertia::render('Kuis/Index');
// // })->name('kuis');

Route::get('/kuis', [KuisController::class, 'index'])->name('kuis.index');
Route::get('/kuis/create', [KuisController::class, 'create'])->name('kuis.create');
Route::post('/kuis', [KuisController::class, 'store'])->name('kuis.store');
Route::get('/kuis/{id}/edit', [KuisController::class, 'edit'])->name('kuis.edit');
Route::put('/kuis/{id}', [KuisController::class, 'update'])->name('kuis.update');
Route::delete('/kuis/{id}', [KuisController::class, 'destroy'])->name('kuis.destroy');

require __DIR__.'/auth.php';
