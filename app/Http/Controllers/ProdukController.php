<?php

namespace App\Http\Controllers;

use App\Models\Komik;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     return Inertia::render('Guest/Produk/Index');
    // }

    public function produkGuest(): Response
    {
         return Inertia::render('Guest/Produk/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Komik $komik)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Komik $komik)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Komik $komik)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Komik $komik)
    {
        //
    }
}
