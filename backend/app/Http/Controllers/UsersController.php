<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller{

public function getJWTIdentifier(){
    return $this->getKey();
}

public function getJWTCustomClaims(){
    return [];
}

function getInstructors(){
    
    $instructors = User::where('admin_id', Auth::id());

    return response()->json([
        "status" => "success",
        "data" => $instructors
    ]);

    return response()->json(["status" => "Error"]);
}

function getStudents(){
}

function addUser(Request $request){
}

function updateUser(Request $request){
}

}
