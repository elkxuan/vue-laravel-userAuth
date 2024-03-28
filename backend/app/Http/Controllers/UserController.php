<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $users = Auth::user();

            return response()->json([
                'message' => 'Login successfully!',
                'data' => $users,
            ], 200);
        }

        return response()->json([
            'message' => 'Invalid login credentials',
        ], 401);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'mobile' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users', 
            'password' => 'required|string|min:8',
            'confirm_password' => 'required|string|min:8|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        }

        $users = new User;
        $users->firstname = $request->input('firstname');
        $users->lastname = $request->input('lastname');
        $users->country = $request->input('country');
        $users->mobile = $request->input('mobile');
        $users->email = $request->input('email');
        $users->password = Hash::make($request->input('password'));
        $users->save();
        return response()->json([
            'message' => 'User registered successfully!',
            'data' => $users,
        ], 200);
    }
}
