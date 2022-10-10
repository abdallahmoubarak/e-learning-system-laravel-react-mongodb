<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;


Route::group(["prefix"=> "v0.1"], function(){
      
    Route::controller(AuthController::class)->group(function () {
        Route::post("/sign/signin", 'login');
        Route::post("/sign/signup", 'register');
    });
    
    Route::group(['middleware'=> 'auth:api'], function(){

        Route::controller(UsersController::class)->group(function () {
            Route::get("/users/instructors", 'getInstructors');
            Route::get("/users/students", 'getStudents');
            Route::post("/users", 'addUser');
            Route::put("/users", 'updateUser');
        });

        Route::controller(CoursesController::class)->group(function () {
            Route::get("/courses", 'getCourses');
            Route::post("/courses", 'createCourse');
            Route::put("/courses", 'updateCourse');
            Route::post("/courses/student", 'addStudentToCourse');
            Route::post("/courses/assignments", 'addAssignment');
            Route::post("/courses/announcements", 'addAnnouncement');

        });

    });

});