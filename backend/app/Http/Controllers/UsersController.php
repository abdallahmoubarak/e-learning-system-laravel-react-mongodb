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
    
    $instructors = User::where('admin_id', Auth::id())->get();

    return response()->json([
        "status" => "success",
        "data" => $instructors
    ]);

    return response()->json(["status" => "Error"]);
}

function getStudents(){
}

function addUser(Request $request){

    
    $user = User::where('email', $request->email)->first();
    
    if($user){
        $user->admin_id=Auth::id();
        if($user->save()) {
            return response()->json([
                "status" => "success",
                "data" => $user
            ]);
        }
        return response()->json(["status" => "error"]);
    }
    else{
        $user = User::create([
            'admin_id' => Auth::id(),
            'name' => $request->name,
            'email' => $request->email,
            'type' => $request->type,
            'phone' => $request->phone,
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'data' => $user
        ]);
    }

}

function updateUser(Request $request){
}

}
