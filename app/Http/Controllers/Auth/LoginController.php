<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    // public function __invoke()
    // {
    //     dump('testxd');
    // }

    public function index()
    {
        if (Auth::User()) {
            return redirect('/admin');
        } else {
            return view('auth.login');
            // dump('no autenticado');
        }
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        // $password = bcrypt($credentials['password']);
        // dd($credentials, $password);
        if (Auth::attempt($credentials)) {
            // Authentication passed...
            if (Auth::User()) {
                return redirect('/admin');
            } else {
                // return redirect()->intended('gestionar/dashboard');
            }
        } else {
            dump('Authentication not passed...');
            // return redirect('home');
            return redirect('/login');
        }
    }

    public function logout()
    {
        Auth::logout();
        // return redirect('home');
        return redirect('/');
    }

}
