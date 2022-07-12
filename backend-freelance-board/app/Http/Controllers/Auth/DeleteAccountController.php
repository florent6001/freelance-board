<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Symfony\Component\HttpFoundation\Request;

class DeleteAccountController extends Controller
{
    public function destroy(Request $request)
    {
        $user = User::where('id', $request->user()->id)->first();
        return $user->delete();
    }
}
