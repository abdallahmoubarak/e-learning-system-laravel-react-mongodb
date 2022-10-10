<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller{

    public function getJWTIdentifier(){
    return $this->getKey();
}

public function getJWTCustomClaims(){
    return [];
}
    

}
