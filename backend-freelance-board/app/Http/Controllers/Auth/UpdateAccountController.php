<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Validation\Rules;

class UpdateAccountController extends Controller
{
    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:100|min:5',
            'email' => 'required|email',
        ]);

        $user = User::where('id', $request->user()->id)->first();

        if (isset($request->password) && !empty($request->password)) {
            $passwordValidated = $request->validate([
                'password' => ['required', 'confirmed', Rules\Password::defaults()]
            ]);

            $user->password = Hash::make($passwordValidated['password']);
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];

        return $user->save();
    }
}
