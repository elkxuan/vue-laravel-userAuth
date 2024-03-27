<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request) {
        $users = new User;
        $users->firstname = $request->input('firstname');
        $users->lastname = $request->input('lastname');
        $users->country = $request->input('country');
        $users->mobile = $request->input('mobile');
        $users->email = $request->input('email');
        $users->password = Hash::make($request->input('password'));
        $users->save();
        return response()->json('User registered!');
    }
}
