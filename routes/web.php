<?php

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/admin', function () {
    return view('admin.admin');
});
Route::get('/admin/{any}', function ($any) {
    return redirect()->to('/admin');
});



//? LOGIN
Route::get('/login', [LoginController::class, 'index'])->name('login');

Route::any('/logout', [LoginController::class, 'logout'])->name('logout');

Route::post('/authenticate', [LoginController::class, 'authenticate']);


// Route::fallback(function ($path) {

// });
