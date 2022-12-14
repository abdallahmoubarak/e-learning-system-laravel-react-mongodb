<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller{

function getInstructors(){
    
    $instructors = User::where('admin_id', Auth::id())
                    ->where('type','Instructor')->get();

    return response()->json([
        "status" => "success",
        "data" => $instructors
    ]);

    return response()->json(["status" => "Error"]);

}

function getStudents(){

    $students = User::where('admin_id', Auth::id())
                    ->where('type','Student')->get();

    return response()->json([
        "status" => "success",
        "data" => $students
    ]);

    return response()->json(["status" => "Error"]);

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

function getUser(){

    // $user = User::find(Auth::id())->first();
    $user = Auth::user();
    
    return response()->json([
        'status' => 'success',
        'data' => $user
    ]);

}

}
