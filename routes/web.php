<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route to display all houses from the 'listing' table as JSON
Route::get('/listings', function () {
    // Retrieve all records from the 'listing' table using DB facade
    $houses = DB::table('listing')->get();

    // Return the fetched data as JSON response
    return response()->json($houses);
});

// Catch-all route to display the 'home' view for any URL path
Route::get('/{any?}', function () {
    return view('home');
})->where('any', '.*');
