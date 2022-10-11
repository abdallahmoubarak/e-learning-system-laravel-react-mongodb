<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Course;

class CoursesController extends Controller{
    
public function getJWTIdentifier(){
    return $this->getKey();
}

public function getJWTCustomClaims(){
    return [];
}


function getCourses(){
    return Course::where('admin_id', Auth::id());
}

function createCourse(Request $request){
}

function updateCourse(Request $request){
}

function addStudentToCourse(Request $request){
}

function addAssignment(Request $request){
}

function addAnnouncement(Request $request){
}


}
