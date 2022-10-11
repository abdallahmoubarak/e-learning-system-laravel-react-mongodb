<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Course;

class CoursesController extends Controller{


function getCourses(){
   
    $courses= Course::where('admin_id', Auth::id())->get();

    return response()->json([
        'status' => 'success',
        'data' => $courses
    ]);

    return response()->json(["status" => "Error"]);

}

function createCourse(Request $request){

    $course = Course::create([
        'admin_id' => Auth::id(),
        'code' => $request->code,
        'name' => $request->name,
        'instructor' => $request->instructor,
        'instructor_id' => $request->instructor_id,
    ]);
    
    if($course->save()) {
        return response()->json([
            "status" => "success",
            "data" => $course
        ]);
    }
    return response()->json(["status" => "error"]);
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
