<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::group(["prefix"=> "v0.1"], function(){
      
    Route::controller(AuthController::class)->group(function () {
        Route::post("/sign/signin", 'login');
        Route::post("/sign/signup", 'register');
    });
    
    Route::group(['middleware'=> 'auth:api'], function(){
     
    });

});